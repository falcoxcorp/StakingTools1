import { Menu, MenuItem, Stack } from '@mui/material';
import { memo, useCallback, useMemo, useState } from 'react'
import { LoadingButton } from '../Buttons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTokenContext } from '../../modules/AdministrationModule/context/TokenContext';
import { TOKEN_TYPE_ENUM } from '../../contracts/instances/interfaces';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import { useTranslation } from 'react-i18next';

const SwitchToken = () => {
  const { setToken, token } = useTokenContext()
  const { pathname } = useLocation()
  const { t } = useTranslation('menu')
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const options = useMemo(() => Object.keys(TOKEN_TYPE_ENUM)?.filter((token) => ![TOKEN_TYPE_ENUM.ADVANCED].includes(token as TOKEN_TYPE_ENUM)), [TOKEN_TYPE_ENUM])

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = useCallback(async (token: TOKEN_TYPE_ENUM) => {
    setAnchorEl(null)
    setToken?.(token)
    return navigate(pathname, { preventScrollReset: false })
  }, [setToken, navigate, pathname])

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <LoadingButton
        fullWidth
        onClick={handleClickListItem}
        variant='contained'
        startIcon={<TokenOutlinedIcon />}>
        {t(`tokens.${token}`)}
      </LoadingButton>
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
        {options.map((option: string) => (
          <MenuItem
            key={option}
            selected={option === token}
            onClick={() => handleMenuItemClick(option as TOKEN_TYPE_ENUM)}
          >
            <Stack direction={'row'} gap={1} alignItems={'center'}><TokenOutlinedIcon />{t(`tokens.${option}`)}</Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );

}

export default memo(SwitchToken);