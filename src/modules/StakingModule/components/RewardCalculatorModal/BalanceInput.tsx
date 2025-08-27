import { memo } from 'react'
import { InputAdornment, InputBase, Stack } from '@mui/material';
import { useDFLForm } from '../../../../components/FormFields';
import { Controller } from 'react-hook-form';
import { TransTypography } from '../../../../components/TransTypography';
import CopyReward from './CopyReward/CopyReward';

type BalanceInputProps = {
  name: string
  balance: number
}

const BalanceInput = ({ name, balance }: BalanceInputProps) => {
  const { control } = useDFLForm()

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
                  Token
                </InputAdornment>}
            />
          )}
        />
        <TransTypography variant="caption" message='staking:rewardPerBlock' values={{ reward: balance.toFixed(8) }} />

      </Stack>
      <CopyReward balance={Number(balance.toFixed(8))} />

    </Stack>
  );

}

export default memo(BalanceInput);