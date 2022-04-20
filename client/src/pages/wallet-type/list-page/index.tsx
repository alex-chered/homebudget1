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
import { WalletTypeModel } from 'types/models';

// settings
import { walletTypeOptions } from 'settings/section';

// aux.
import { useGridColumns } from './use-grid-columns';
import { ToolbarWalletType } from './toolbar-wallet-type';

// ==============================|| LIST (WALLET TYPE) -> PAGE ||============================== //

export const ListPage = () => {
  // hooks
  const { getAll, clearData } = useSection<WalletTypeModel>(walletTypeOptions);
  const { loadingSelector, dataSelector } = useSectionSelectors<WalletTypeModel>(walletTypeOptions);

  // store
  const { data: walletTypes } = useAppSelector(dataSelector);
  const { loading } = useAppSelector(loadingSelector);

  // columns
  const { columns } = useGridColumns();

  // EFFECT "DID MOUNT"
  useEffect(() => {
    // load wallet-types
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
      <PageCaption text="Типы кошельков" />

      <DataGrid
        columns={columns}
        rows={walletTypes}
        // pageSize={10}
        // rowsPerPageOptions={[10]}
        localeText={localeGridRus}
        loading={loading}
        components={{
          Toolbar: ToolbarWalletType,
        }}
        sx={{
          mt: 3,
          height: 600,
        }}
      />
    </>
  );
};
