import { memo, useMemo } from 'react'
import { Typography, TypographyProps } from "@mui/material";
import { defaultLocale } from "../NumberValue/NumberValue";

type CurrencyValueProps = TypographyProps & {
    value: number | string,
    locale?: string
    currency?: string
}

const CurrencyValue = ({
    value, locale, currency, fontSize = 'inherit',
    fontWeight = 'inherit', ...props
}: CurrencyValueProps) => {


    const currencyValue = useMemo(() => {
        let formatter = new Intl.NumberFormat(locale || defaultLocale, {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'code'
        });
        return formatter.format(Number(value)).replace(/USD/, '').trim();
    }, [locale, value])

    return (
        <Typography {...props} fontSize={fontSize} fontWeight={fontWeight} >
            {
                currencyValue
            }
            <span>&nbsp;{currency}</span>
        </Typography>
    );
}

export default memo(CurrencyValue);