/* eslint-disable react/jsx-props-no-spreading */

import {
  useCallback,
  useEffect,
  useState,
  SyntheticEvent,
} from 'react';

// mui
import { Autocomplete, TextField, CircularProgress } from '@mui/material';

// 3rd-party
import debounce from 'lodash/debounce';

// store
import { useAppSelector } from 'store';

// hooks
import { useSection, useSectionSelectors } from 'hooks/section';

// types
import { BaseModel } from 'types/models';

// settings
import { ISectionOptions } from 'settings/section';

// ==============================|| PROPS ||============================== //

interface SectionAutocompleteProps<T extends BaseModel> {
  label: string;
  options: ISectionOptions;
  value: T | null;
  errorText?: string;
  onChange: (value: T) => void;
  onInputChange?: (value: string) => void;
  onOpen?: () => void;
  onClear?: () => void;
}

// ==============================|| BASE AUTOCOMPLETE ||============================== //

export const SectionAutocomplete = <T extends BaseModel>(props: SectionAutocompleteProps<T>) => {
  const {
    label,
    options,
    value,
    errorText = '',
    onChange,
    onInputChange,
    onOpen,
    onClear,
  } = props;

  // state
  const [open, setOpen] = useState<boolean>(false);
  // const [tempInputValue, setTempInputValue] = useState<string>(value?.name || '');
  const [tempInputValue, setTempInputValue] = useState<string>('');

  // hooks
  const { getWithFilter, clearFiltered } = useSection<T>(options);
  const {
    loadingSelector,
    filteredSelector,
  } = useSectionSelectors<T>(options);

  // store
  const { filtered } = useAppSelector(filteredSelector);
  const { loading } = useAppSelector(loadingSelector);

  // method to fetch the required data with debounce
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeWithDelay = useCallback(debounce((text: string) => {
    if (!text.trim()) {
      return;
    }

    setOpen(true);
    getWithFilter(text);
  }, 500), [getWithFilter]);

  // clear filtered on unmounting
  //
  useEffect(() => {
    return () => clearFiltered();
  }, [clearFiltered]);

  // handle changes to the "temp" variable
  //
  useEffect(() => {
    handleChangeWithDelay(tempInputValue);
  }, [tempInputValue, handleChangeWithDelay]);

  // AUTOCOMPLETE -> ON CLOSE
  const handleClose = () => {
    setOpen(false);
  };

  // AUTOCOMPLETE -> ON INPUT CHANGE
  const handleAutocompleteInputChange = (event: SyntheticEvent, data: string, reason: string) => {
    if (reason === 'input') {
      setTempInputValue(data);
      onInputChange && onInputChange(data);

      if (!data.trim()) {
        setOpen(false);
      }
    }
  };

  // AUTOCOMPLETE -> ON CHANGE
  const handleAutocompleteChange = (event: SyntheticEvent, data: T | null, reason: string) => {
    if (reason === 'selectOption' && data) {
      onChange(data);
      setOpen(false);
    } else if (reason === 'clear') {
      onClear && onClear();
    }
  };

  // forn the error text
  const text = errorText.trim().length > 0
    ? errorText
    : ' ';

  // RENDER
  return (
    <Autocomplete
      // options={options}
      options={filtered}
      // inputValue={tempInputValue}
      value={value}
      // defaultValue={value}
      isOptionEqualToValue={(option, data) => option.id === data.id}
      getOptionLabel={(option) => option.name}
      open={open}
      filterOptions={(x) => x}
      noOptionsText="Нет данных"
      loadingText="Идет поиск..."
      onClose={handleClose}
      loading={loading}
      onChange={handleAutocompleteChange}
      onInputChange={handleAutocompleteInputChange}
      onOpen={onOpen}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          required
          error={errorText.trim().length > 0}
          helperText={text}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};
