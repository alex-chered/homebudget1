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

// types
import { WalletTypeModel } from 'types/models';
import { ActionRejectedError } from 'types/errors';

// settings
import { walletTypeOptions } from 'settings/section';

// ==============================|| VALIDATION RULES ||============================== //

const schema = yupObject({
  id: yupString().trim(),
  name: yupString().trim()
    .required('Необходимо заполнить наименование'),
});

// ==============================|| PROPS ||============================== //

interface EditFormProps {
  walletType?: WalletTypeModel;
  mode?: 'new' | 'edit';
  onCompleted?: () => void;
  onClose?: () => void;
}

// ==============================|| STATE ||============================== //

interface EditFormState {
  id: string;
  name: string;
}

// ==============================|| ERROR STATE ||============================== //

interface EditFormErrorState {
  id: string;
  name: string;
}

type StateKey = keyof EditFormErrorState;

const initialErrorState: EditFormErrorState = {
  id: '',
  name: '',
};

// ==============================|| EDIT (WALLET TYPE) -> FORM ||============================== //

export const EditForm = (props: EditFormProps) => {
  const {
    walletType,
    mode = 'new',
    onCompleted,
    onClose,
  } = props;

  // state
  const [state, setState] = useState<EditFormState>({
    id: walletType?.id?.toString() || ' ',
    name: walletType?.name || '',
  });
  // The error state
  const [errorState, setErrorState] = useState<EditFormErrorState>({ ...initialErrorState });

  // hooks
  const { create, update } = useSection<WalletTypeModel>(walletTypeOptions);
  const { loadingSelector } = useSectionSelectors<WalletTypeModel>(walletTypeOptions);
  const { toastError } = useToasts();

  // store
  const { loading } = useAppSelector(loadingSelector);

  // SAVE WALLET TYPE
  const saveWalletType = async (
    callback: (param: WalletTypeModel) => Promise<WalletTypeModel>,
  ) => {
    // <!-- Body --!>
    const { id, name } = state;

    try {
      // validate input
      await schema.validate(state, { abortEarly: false });

      // create the model
      const element = new WalletTypeModel(name);
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
        const errors: EditFormErrorState = { ...initialErrorState };
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
      saveWalletType(create);
    } else if (mode === 'edit') {
      saveWalletType(update);
    }
  };

  // INPUTS -> ON CHANGE
  const handleChange = (
    prop: keyof EditFormState,
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

    </EditFormBase>
  );
};
