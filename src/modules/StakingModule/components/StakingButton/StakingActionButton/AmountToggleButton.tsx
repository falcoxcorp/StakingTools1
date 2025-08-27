import { memo, useCallback, useMemo, useState } from 'react'
import { Controller } from 'react-hook-form';
import { useDFLForm } from '../../../../../components/FormFields';
import { styled, Chip, Box, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useTranslation } from 'react-i18next';


type AmountToggleButtonProps = {
  name: string
  balance: number
  amount: number
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


/* const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '10%',
  },
  {
    value: 20,
    label: '20%',
  },
  {
    value: 40,
    label: '40%',
  },
  {
    value: 60,
    label: '60%',
  },
  {
    value: 80,
    label: '80%',
  },
  {
    value: 100,
    label: '100%',
  },
];

function valuetext(value: number) {
  return `${value}%`;
} */

ButtonChip.defaultProps = {
  variant: 'filled'
}

const AmountToggleButton = ({ name, balance, amount }: AmountToggleButtonProps) => {
  const { control } = useDFLForm()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={25}
      render={({ field }) => (
        <ButtonGroup onChange={field.onChange} amountTotal={balance} amountCurrent={amount} />

      )}
    />
  );

}

export default memo(AmountToggleButton);


type ButtonGroupProps = {
  onChange: (amount: number) => void,
  amountTotal: number
  amountCurrent: number
}
export const ButtonGroup = ({ onChange, amountTotal, amountCurrent }: ButtonGroupProps) => {
  const { t } = useTranslation()
  const current = useMemo(() => (amountCurrent * 100) / amountTotal, [amountTotal, amountCurrent])
  const [percent, setPercent] = useState(current)
  const onHandleChange = useCallback((_event: any, value: any) => {
    if (value !== null) {
      const amount = (amountTotal * value) / 100
      setPercent(value)
      onChange(amount)
    }
  }, [onChange, amountTotal, setPercent])
  return (
    <Box>
      {/*   <Slider
        aria-label="Always visible"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={5}
        marks={marks}
        valueLabelDisplay="on"
        onChange={onHandleChange}
      /> */}

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
          }
        }}
      >
        <ToggleButton value={25} aria-label="25">
          <ButtonChip active={current === 25} label={'25%'} />
        </ToggleButton>
        <ToggleButton value={50} aria-label="50">
          <ButtonChip active={current === 50} label={'50%'} />
        </ToggleButton>
        <ToggleButton value={75} aria-label="75">
          <ButtonChip active={current === 75} label={'75%'} />
        </ToggleButton>
        <ToggleButton value={100} aria-label="100">
          <ButtonChip active={current === 100} label={t('max')} />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>

  )
}