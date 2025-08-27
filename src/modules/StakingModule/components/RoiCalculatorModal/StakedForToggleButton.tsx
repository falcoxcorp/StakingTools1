import { memo, useCallback, useState } from 'react'
import { Controller } from 'react-hook-form';
import { styled, Chip, Box, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useDFLForm } from '../../../../components/FormFields';
import { DAY_IN_SECUND } from '../../../../utils/block-time';


type StakedForToggleButtonProps = {
  name: string
}

export const ButtonChip = styled(Chip)<{ active?: boolean }>(({ theme, active = false }) => ({
  borderRadius: 8,
  flex: 1,
  width: '100%',
  cursor: 'pointer',
  ...(active ? {
    backgroundColor: theme.palette.primary.main
  } : {})
}))


ButtonChip.defaultProps = {
  variant: 'filled'
}

const StakedForToggleButton = ({ name }: StakedForToggleButtonProps) => {
  const { control } = useDFLForm()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={25}
      render={({ field }) => (
        <ButtonGroup onChange={field.onChange} />
      )}
    />
  );

}

export default memo(StakedForToggleButton);


const staked = [
  {
    name: '1D',
    value: DAY_IN_SECUND
  },
  {
    name: '7D',
    value: DAY_IN_SECUND * 7
  },
  {
    name: '30D',
    value: DAY_IN_SECUND * 30
  },
  {
    name: '1Y',
    value: DAY_IN_SECUND * 365
  },
  {
    name: '5Y',
    value: DAY_IN_SECUND * 365 * 5
  },
]

type ButtonGroupProps = {
  onChange: (amount: number) => void
}
export const ButtonGroup = ({ onChange }: ButtonGroupProps) => {
  const [percent, setPercent] = useState(DAY_IN_SECUND)

  const onHandleChange = useCallback((_event: any, value: any) => {
    if (value !== null) {
      const amount = value
      setPercent(value)
      onChange(amount)
    }
  }, [onChange, setPercent])

  return (
    <Box>
      <ToggleButtonGroup
        value={percent}
        exclusive
        onChange={onHandleChange}
        aria-label="text alignment"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          '& .MuiToggleButton-root': {
            flex: 1
          },
          '& .Mui-selected': {
            backgroundColor: 'transparent'
          },
          padding: {
            xs: 0.5, md: 1
          }
        }}
      >
        {
          staked?.map((st) => (
            <ToggleButton value={st.value} aria-label={st.name}>
              <ButtonChip active={percent === st.value} label={st.name} />
            </ToggleButton>
          ))
        }
      </ToggleButtonGroup>
    </Box>

  )
}


