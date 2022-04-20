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
import { WalletModel } from 'types/models';

// settings
import { walletOptions } from 'settings/section';

// aux.
import { useGridColumns } from './use-grid-columns';
import { ToolbarWallet } from './toolbar-wallet';

// ==============================|| LIST (WALLETS) -> PAGE ||============================== //

export const ListPage = () => {
  // hooks
  const { getAll, clearData } = useSection<WalletModel>(walletOptions);
  const { loadingSelector, dataSelector } = useSectionSelectors<WalletModel>(walletOptions);

  // store
  const { data: wallets } = useAppSelector(dataSelector);
  const { loading } = useAppSelector(loadingSelector);

  // columns
  const { columns } = useGridColumns();

  useEffect(() => {
    // load wallets
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
      <PageCaption text="Кошельки" />

      <DataGrid
        columns={columns}
        rows={wallets}
        // pageSize={10}
        // rowsPerPageOptions={[10]}
        localeText={localeGridRus}
        loading={loading}
        components={{
          Toolbar: ToolbarWallet,
        }}
        sx={{
          mt: 3,
          height: 600,
        }}
      />
    </>
  );
};
