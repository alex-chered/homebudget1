import { useMemo, useState } from 'react';

// store
import {
  generateDataSelector,
  generateCurrentSelector,
  generateFilteredSelector,
  generateLoadingSelector,
} from 'store/utils/generate-selector';

// types
import { BaseModel } from 'types/models';

// settings
import { ISectionOptions } from 'settings/section';

// ==============================|| USE SECTION SELECTORS ||============================== //

export const useSectionSelectors = <T extends BaseModel>(options: ISectionOptions) => {
  // save the options in the state
  const [innerOptions] = useState<ISectionOptions>({ ...options });

  //
  // DATA SELECTOR
  //
  const dataSelector = useMemo(() => generateDataSelector<T>(innerOptions), [innerOptions]);

  //
  // CURRENT SELECTOR
  //
  const currentSelector = useMemo(() => generateCurrentSelector<T>(innerOptions), [innerOptions]);

  //
  // FILTERED SELECTOR
  //
  const filteredSelector = useMemo(() => generateFilteredSelector<T>(innerOptions), [innerOptions]);

  //
  // LOADING SELECTOR
  //
  const loadingSelector = useMemo(() => generateLoadingSelector(innerOptions), [innerOptions]);

  // RETURN
  return {
    dataSelector,
    currentSelector,
    filteredSelector,
    loadingSelector,
  };
};
