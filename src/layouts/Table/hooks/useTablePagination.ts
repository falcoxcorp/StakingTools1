import { useCallback, ChangeEvent } from 'react';
import { useSearchParams } from "react-router-dom";
import { parseNumber } from '../../../utils/utils-func/parseNumber';
import { useSearchParamsChange } from '../../../hooks/useParamsLink';



export const useTablePagination = () => {
    let [searchParams] = useSearchParams();
    let { update } = useSearchParamsChange();
    const page = parseNumber(searchParams.get("page"), 0);
    const rowsPerPage = parseNumber(searchParams.get("size"), 5);

    // @ts-ignore
    const onPageChange = useCallback((event: unknown, newPage: number) => {
        update({ page: newPage.toString() })
    }, [update]);

    const onRowsPerPageChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const size = parseInt(event.target.value, 5).toString();
        update({ page: "0", size })
    }, [searchParams]);

    return {
        page: page,
        rowsPerPage: rowsPerPage,
        onPageChange,
        onRowsPerPageChange
    }
}