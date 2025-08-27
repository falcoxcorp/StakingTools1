import { memo, useMemo } from 'react'
import dateFormat from 'date-fns/format'
import { es } from 'date-fns/locale'

type DateProps = {
    value?: number | Date | string,
    now?: boolean
    format?: string
    defaultValue?: any
}

const DateValue = ({ value, now, format, defaultValue }: DateProps) => {

    const date = useMemo(() => (now && !value) ? new Date() : (typeof value === "string" ? new Date(value) : value),
        [now, value])

    if (!date) return <>{defaultValue || '-'}</>


    return (
        <>
            {
                dateFormat(date, format || 'PP', {
                    // @ts-ignore
                    locale: es
                })
            }
        </>
    );
}

export default memo(DateValue);