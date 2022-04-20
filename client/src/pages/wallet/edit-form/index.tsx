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
  SectionAutocomplete,
  IdInput,
  NameInput,
} from 'components/base';

// store
import { useAppSelector } from 'store';

// hooks
import { useToasts } from 'hooks/toasts';
import { useSection, useSectionSelectors } from 'hooks/section';

// types
import { WalletModel, CurrencyModel, WalletTypeModel } from 'types/models';
import { ActionRejectedError } from 'types/errors';

// settings
import { walletOptions, currencyOptions, walletTypeOptions } from 'settings/section';

// ==============================|| VALIDATION RULES ||============================== //

const schema = yupObject({
  id: yupString().trim(),
  name: yupString().trim()
    .required('Необходимо заполнить наименование'),
  currency: yupObject()
    .nullable()
    .test('not_null', 'Необходимо заполнить валюту', (value, ctx) => {
      if (!value) {
        return ctx.createError();
      }
      return true;
    }),
  walletType: yupObject()
    .nullable()
    .test('not_null', 'Необходимо заполнить тип кошелька', (value, ctx) => {
      if (!value) {
        return ctx.createError();
      }
      return true;
    }),
  comment: yupString().trim(),
});

// ==============================|| PROPS ||============================== //

interface EditFormProps {
  wallet?: WalletModel;
  mode?: 'new' | 'edit';
  onCompleted?: () => void;
  onClose?: () => void;
}

// ==============================|| STATE ||============================== //

interface EditFormState {
  id: string;
  name: string;
  comment: string;
  currency: CurrencyModel | null;
  walletType: WalletTypeModel | null;
}

// ==============================|| ERROR STATE ||============================== //

interface EditFormErrorState {
  id: string;
  name: string;
  comment: string;
  currency: string;
  walletType: string;
}

const initialErrorState: EditFormErrorState = {
  id: '',
  name: '',
  comment: '',
  currency: '',
  walletType: '',
};

// ==============================|| AUX. TYPES ||============================== //

type ErrorStateKey = keyof EditFormErrorState;

// ==============================|| EDIT (WALLET) -> FORM ||============================== //

export const EditForm = (props: EditFormProps) => {
  const {
    wallet,
    mode = 'new',
    onCompleted,
    onClose,
  } = props;

  // state
  const [state, setState] = useState<EditFormState>({
    id: wallet?.id?.toString() || ' ',
    name: wallet?.name || '',
    comment: wallet?.comment || '',
    currency: wallet?.currency || null,
    walletType: wallet?.walletType || null,
  });
  // error state
  const [errorState, setErrorState] = useState<EditFormErrorState>({ ...initialErrorState });

  // hooks
  const { toastError } = useToasts();
  const { create, update } = useSection<WalletModel>(walletOptions);
  const { loadingSelector } = useSectionSelectors<WalletModel>(walletOptions);

  // store
  const { loading } = useAppSelector(loadingSelector);

  // SAVE WALLET
  const saveWallet = async (
    callback: (param: WalletModel) => Promise<WalletModel>,
  ) => {
    // <!-- Body --!>
    const {
      id,
      name,
      comment,
      currency,
      walletType,
    } = state;

    try {
      // validate input
      await schema.validate(state, { abortEarly: false });

      // this check doesn't make sense, because of schema.validate.
      // but if don't use this check, a warning is issued while creating a model
      // in the next block
      if (!currency || !walletType) {
        return;
      }

      // create the model
      const element = new WalletModel(
        name,
        currency,
        walletType,
        comment,
      );
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
          const key = err.path as ErrorStateKey;
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

  // FUNCTIONS TO WORK WITH REFERENCE FIELDS
  const setCurrency = (data: CurrencyModel) => {
    setState({ ...state, currency: data });
  };

  const onClearCurrency = () => {
    setState({ ...state, currency: null });
  };

  const setWalletType = (data: WalletTypeModel) => {
    setState({ ...state, walletType: data });
  };

  const onClearWalletType = () => {
    setState({ ...state, walletType: null });
  };

  const clearErrors = () => {
    setErrorState(initialErrorState);
  };

  // FORM -> ON SUBMIT
  const handleSubmit = () => {
    if (mode === 'new') {
      saveWallet(create);
    } else if (mode === 'edit') {
      saveWallet(update);
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

      {/* Currency */}
      <SectionAutocomplete
        label="Валюта"
        options={currencyOptions}
        value={state.currency}
        errorText={errorState.currency}
        onChange={setCurrency}
        onInputChange={clearErrors}
        onOpen={clearErrors}
        onClear={onClearCurrency}
      />

      {/* Wallet Type */}
      <SectionAutocomplete
        label="Тип кошелька"
        options={walletTypeOptions}
        value={state.walletType}
        errorText={errorState.walletType}
        onChange={setWalletType}
        onInputChange={clearErrors}
        onOpen={clearErrors}
        onClear={onClearWalletType}
      />

    </EditFormBase>
  );
};
