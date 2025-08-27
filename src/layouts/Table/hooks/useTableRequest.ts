import { useMemo } from "react";
import { useTable } from "../contexts/TableContext";
import { useTablePagination } from "./useTablePagination";
import { useTableSearch } from "./useTableSearch";


export const useTableRequest = (queryFunction: ((params: any, config: any) => Promise<any>), config?: any) => {
    const { order } = useTable();

    const { query } = useTableSearch();
    const { page, rowsPerPage } = useTablePagination();

    /* const filtersObj = useMemo(() => {
        const defaultFilter = filters && FilterFactory.factory(filters);
        const viewFilter = tableFilter && FilterFactory.factory(tableFilter);
        let finalFilter = viewFilter || defaultFilter || {}

        if (defaultFilter && viewFilter)
            finalFilter = FilterFactory.add(defaultFilter, viewFilter);

        if (urlFilterObj)
            finalFilter = FilterFactory.add(finalFilter, urlFilterObj);

        return finalFilter;
    }, [filters, tableFilter, urlFilterObj]); */

    return useMemo(() => {
        const payload = {
            search: query,
            page: page + 1,
            size: rowsPerPage,
            filters: {},
            sort: {
                [order.orderBy]: order.order
            }
        }
        const fetch = () => queryFunction(payload, config);
        return {
            queryKey: payload,
            filters: {},
            search: query,
            fetch
        }
    }, [query, {}, page, rowsPerPage, order.orderBy, order.order, queryFunction, config]);

}