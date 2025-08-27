import { Box, IconButton, Menu, MenuItem, Stack } from '@mui/material';
import { memo, useMemo, useState } from 'react'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { THEMES } from '../../common';
import { useSettings } from '../../contexts/SettingsProvider';

const options = [
  {
    theme: THEMES.DARK,
    title: 'DARK',
    icon: <DarkModeOutlinedIcon fontSize='inherit'/>
  },
  {
    theme: THEMES.LIGHT,
    title: 'LIGHT',
    icon: <LightModeOutlinedIcon fontSize='inherit'/>
  },
]

const ThemeMenu = () => {
  const {settings} = useSettings()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const selected = useMemo(() => options?.find(op => op.theme === settings?.theme), [settings])
  const {setTheme} = useSettings()
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (index: number,
  ) => {
    setAnchorEl(null);
    setTheme(options[index].theme)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton size='small' sx={{border: (theme) => `1px solid ${theme.palette.primary.main}`}} onClick={handleClickListItem}>
        {selected?.theme === THEMES.DARK ? <DarkModeOutlinedIcon/>:<LightModeOutlinedIcon/>}
      </IconButton>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem 
            key={option?.theme}
            selected={option?.theme === settings.theme}
            onClick={() => handleMenuItemClick(index)}
          >
            <Stack direction={'row'} gap={1} alignItems={'center'}>{option?.icon} {option.title}</Stack>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );

}

export default memo(ThemeMenu);