import { Stack, Typography } from '@mui/material';
import { memo, FC } from 'react'
import { FormTextField, FormTextFieldProps } from '../../../../components/FormFields';
import { onConvertSupply } from '../../../../utils/number';


type FormTextFieldSupplyProps= FormTextFieldProps & {
  supply?: number
}

const FormTextFieldSupply: FC<FormTextFieldSupplyProps> = ({ supply= 0, ...props }: FormTextFieldSupplyProps) => {


  return (
    <Stack direction='row' gap={1} alignItems={'center'}>
      <FormTextField {...props}  />
      <Typography width={300} fontWeight={800}>{`≈ ${onConvertSupply(supply)}`}</Typography>
    </Stack>
  );

}

export default memo(FormTextFieldSupply);