import { Box, Switch, styled } from '@mui/material';
import { memo } from 'react'
import { useSettings } from '../../contexts/SettingsProvider';
import { THEMES } from '../../common';

const ToggleContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center'
}))

const ToggleLabel = styled(Box)(() => ({
  marginRight: 8
}))

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  '.MuiSwitch-track': {
    backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#000'
  }
}))

const ThemeToggle = () => {
  const { settings, toggleTheme } = useSettings()

  return (
    <ToggleContainer>
      <ToggleLabel>Dark Mode</ToggleLabel>
      <ThemeSwitch
        checked={settings?.theme === THEMES.DARK ? true : false}
        onChange={toggleTheme}
      />
    </ToggleContainer>
  );

}

export default memo(ThemeToggle);