import { useEffect } from 'react';

// mui
import { DataGrid } from '@mui/x-data-grid';
// import { COMPACT_DENSITY_FACTOR, COMFORTABLE_DENSITY_FACTOR }
// from '@mui/x-data-grid/hooks/features/density/useGridDensity';

// components
import { PageCaption } from 'components/base';

// config
import { localeGridRus } from 'app-config';

// store
import { useAppSelector } from 'store';

// hooks
import { useSection, useSectionSelectors } from 'hooks/section';

// types
import { CurrencyModel } from 'types/models';

// settings
import { currencyOptions } from 'settings/section';

// aux.
import { useGridColumns } from './use-grid-columns';
import { ToolbarCurrency } from './toolbar-currency';

// ==============================|| CURRENCIES PAGE ||============================== //

export const CurrenciesPage = () => {
  // hooks
  const { getAll, clearData } = useSection<CurrencyModel>(currencyOptions);
  const { dataSelector, loadingSelector } = useSectionSelectors<CurrencyModel>(currencyOptions);

  // store
  const { data } = useAppSelector(dataSelector);
  const { loading } = useAppSelector(loadingSelector);

  // columns
  const { columns } = useGridColumns();

  // EFFECT "DID MOUNT"
  useEffect(() => {
    // load currencies
    getAll();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // on unmounting clear data
  useEffect(() => {
    return () => clearData();
  }, [clearData]);

  // RENDER
  return (
    <>
      {/* Page Caption */}
      <PageCaption text="Валюты" />

      <DataGrid
        columns={columns}
        rows={data}
        // pageSize={10}
        // rowsPerPageOptions={[10]}
        localeText={localeGridRus}
        loading={loading}
        components={{
          Toolbar: ToolbarCurrency,
        }}
        sx={{
          mt: 3,
          height: 600,
        }}
      />
    </>
  );
};
