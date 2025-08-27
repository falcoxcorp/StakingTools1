//@ts-nocheck
import { memo, ReactNode } from "react";
import FormLabel, { useFormLabel } from "../FormLabel";
import { StyledFieldProps } from "../styledField";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import { MuiTextFieldDarkField } from "../Text/TextField";
import Typography from '@mui/material/Typography'
import { Box } from "@mui/material";

export type DatePickerFieldProps = Omit<DatePickerProps, 'renderInput'> & StyledFieldProps & {
    size?: 'small' | 'medium',
    error?: boolean,
    required?: boolean,
    helperText?: ReactNode,
};

const DatePickerField = ({ label, dark, size, error, helperText, ...props }: DatePickerFieldProps) => {
    const { label: inputLabel, formLabel } = useFormLabel(label, dark);
    return (
        <FormLabel label={formLabel} required={props.required}>
            <DatePicker sx={{ width: '100%' }} label={inputLabel}
                {...props}
                renderInput={(params) => <MuiTextFieldDarkField
                    dark={dark} {...params} size={size}
                    error={error}
                    helperText={helperText}
                    fullWidth />} />
            {helperText && <Box sx={{ margin: '3px 14px 0 14px' }}>
                <Typography variant="caption" color={error ? 'error' : 'none'}>{helperText}</Typography>
            </Box>}
        </FormLabel>
    );
};

export default memo(DatePickerField);
