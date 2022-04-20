import { useState, SyntheticEvent, useEffect } from 'react';

// mui
import { Tabs, Tab, Box } from '@mui/material';

// local
import { useSx } from './use-sx';
import { computeActiveTab, computeActiveTabNumber } from './utils';
import { LoginMenuItemDataType } from './login-menu-item-data.type';

// ==============================|| PROPS ||============================== //

interface LoginMenuProps {
  defaultTab: LoginMenuItemDataType;
  onChange: (data: LoginMenuItemDataType) => void;
}

// ==============================|| COMPONENT ||============================== //

export const LoginMenu = (props: LoginMenuProps) => {
  const {
    menuProps,
    tabsProps,
    tabProps,
  } = useSx();

  const { defaultTab, onChange } = props;

  // store the current tab number
  const [activeTab, setActiveTab] = useState<number>(computeActiveTabNumber(defaultTab));

  // Handle the "activeTab" change
  //
  useEffect(() => {
    // run the "onChange" event
    onChange && onChange(computeActiveTab(activeTab));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  // TABS -> ON CHANGE
  const handleActiveTabChange = (event: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  // RENDER
  return (
    <Box sx={menuProps}>
      <Tabs
        value={activeTab}
        onChange={handleActiveTabChange}
        sx={tabsProps}
      >
        <Tab
          label="Логин"
          sx={tabProps}
        />
        <Tab
          label="Регистрация"
          sx={tabProps}
        />
      </Tabs>
    </Box>
  );
};
