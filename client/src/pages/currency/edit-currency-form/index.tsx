import { useState, ChangeEvent } from 'react';

// 3-rd party
import {
  string as yupString,
  object as yupObject,
  ValidationError,
} from 'yup';

// components
import {
  EditFormBase,
  EditFormTop,
  IdInput,
  NameInput,
} from 'components/base';

// store
import { useAppSelector } from 'store';

// hooks
import { useToasts } from 'hooks/toasts';
import { useSection, useSectionSelectors } from 'hooks/section';

// settings
import { currencyOptions } from 'settings/section';

// types
import { CurrencyModel } from 'types/models';
import { ActionRejectedError } from 'types/errors';

// aux.
import { FullNameInput } from './fullname-input';

// ==============================|| VALIDATION RULES ||============================== //

const schema = yupObject({
  id: yupString().trim(),
  name: yupString().trim()
    .required('Необходимо заполнить наименование'),
  fullName: yupString().trim()
    .required('Необходимо заполнить полное наименование'),
});

// ==============================|| PROPS ||============================== //

interface EditCurrencyFormProps {
  currency?: CurrencyModel;
  mode?: 'new' | 'edit';
  onCompleted?: () => void;
  onClose?: () => void;
}

// ==============================|| STATE ||============================== //

interface EditCurrencyFormState {
  id: string;
  name: string;
  fullName: string;
}

// ==============================|| ERROR STATE ||============================== //

interface EditCurrencyFormErrorState {
  id: string;
  name: string;
  fullName: string;
}

type StateKey = keyof EditCurrencyFormErrorState;

const initialErrorState: EditCurrencyFormErrorState = {
  id: '',
  name: '',
  fullName: '',
};

// ==============================|| EDIT CURRENCY FORM ||============================== //

export const EditCurrencyForm = (props: EditCurrencyFormProps) => {
  const {
    currency,
    mode = 'new',
    onCompleted,
    onClose,
  } = props;

  // state
  const [state, setState] = useState<EditCurrencyFormState>({
    id: currency?.id?.toString() || ' ',
    name: currency?.name || '',
    fullName: currency?.fullName || '',
  });
  // The error state
  const [
    errorState,
    setErrorState,
  ] = useState<EditCurrencyFormErrorState>({ ...initialErrorState });

  // hooks
  const { create, update } = useSection<CurrencyModel>(currencyOptions);
  const { loadingSelector } = useSectionSelectors<CurrencyModel>(currencyOptions);
  const { toastError } = useToasts();

  // store
  const { loading } = useAppSelector(loadingSelector);

  // SAVE CURRENCY
  const saveCurrency = async (
    callback: (param: CurrencyModel) => Promise<CurrencyModel>,
  ) => {
    // <!-- Body --!>
    const { id, name, fullName } = state;

    try {
      // validate input
      await schema.validate(state, { abortEarly: false });

      // create the model
      const element = new CurrencyModel(name, fullName);
      element.id = +id;
      // execute the callback
      await callback(element);

      // if all is OK, run the "onCompleted"
      onCompleted && onCompleted();

    // CATCH ERRORS
    } catch (error: unknown) {
      // handle "ValidationError"
      if (ValidationError.isError(error)) {
        // create the "errors" object with empty messages
        const errors: EditCurrencyFormErrorState = { ...initialErrorState };
        // fill the errors
        error.inner.forEach((err: ValidationError) => {
          const key = err.path as StateKey;
          errors[key] = err.message;
        });
        // set the "errors" state
        setErrorState(errors);

      // handle "ActionRejectError"
      } else if (ActionRejectedError.isError(error)) {
        toastError(error.message);
      }
    }
  };

  const clearErrors = () => {
    setErrorState(initialErrorState);
  };

  // FORM -> ON SUBMIT
  const handleSubmit = () => {
    if (mode === 'new') {
      saveCurrency(create);
    } else if (mode === 'edit') {
      saveCurrency(update);
    }
  };

  // INPUTS -> ON CHANGE
  const handleChange = (
    prop: keyof EditCurrencyFormState,
  ) => (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [prop]: event.target.value });
    clearErrors();
  };

  // RENDER
  return (
    <EditFormBase
      loading={loading}
      onSubmit={handleSubmit}
      onClose={onClose}
    >

      {/* Top Group */}
      <EditFormTop>

        {/* ID */}
        <IdInput value={state.id} />

        {/* Name */}
        <NameInput
          value={state.name}
          errorText={errorState.name}
          onChange={handleChange('name')}
        />

      </EditFormTop>

      {/* Full Name */}
      <FullNameInput
        value={state.fullName}
        errorText={errorState.fullName}
        onChange={handleChange('fullName')}
      />

    </EditFormBase>
  );
};
