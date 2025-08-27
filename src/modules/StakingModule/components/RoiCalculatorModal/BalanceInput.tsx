import { memo, useMemo } from 'react'
import { IconButton, InputAdornment, InputBase, Stack, Typography } from '@mui/material';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import { useDFLForm } from '../../../../components/FormFields';
import { Controller } from 'react-hook-form';
import { ITokenInfo } from '../../interfaces/ISmartChef';

type BalanceInputProps = {
  name: string
  stakedTokenInfo: ITokenInfo
  balance: number
  isOpen: boolean, onToggle: () => void
}

const BalanceInput = ({ name, isOpen, onToggle, stakedTokenInfo, balance }: BalanceInputProps) => {
  const { control } = useDFLForm()


  const balancePrice = useMemo(() => isOpen ? (balance / stakedTokenInfo?.price) : (balance * stakedTokenInfo?.price), [stakedTokenInfo, balance, isOpen])

  return (
    <Stack sx={(theme) => ({
      backgroundColor: theme.palette.grey[900],
      borderRadius: '10px',
      padding: '8px 16px',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 1
    }
    )}>
      <Stack flex={1} alignItems={'end'}>
        <Controller
          control={control}
          name={name}
          defaultValue={60 * 60}
          render={({ field }) => (
            <InputBase
              onChange={field.onChange}
              sx={{
                flex: 1,
                '.MuiInputBase-input': {
                  textAlign: 'end',
                },
                fontSize: '18px !important',
                '.MuiInputBase-input:not(.MuiInputBase-inputSizeSmall)': { padding: 0 }
              }}
              placeholder="0.00"
              inputProps={{ 'aria-label': '0.00' }}
              endAdornment={
                <InputAdornment position="end">
                  {isOpen ? 'USD' : stakedTokenInfo?.symbol}
                </InputAdornment>}
            />
          )}
        />

        <Typography variant="caption">{`${balancePrice} ${isOpen ? stakedTokenInfo?.symbol : 'USD'}`}</Typography>
      </Stack>
      <IconButton onClick={onToggle}>
        <UnfoldMoreOutlinedIcon />
      </IconButton>

    </Stack>
  );

}

export default memo(BalanceInput);