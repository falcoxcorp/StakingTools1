import {useCallback} from 'react';
import { useSearchParamsChange } from '../../../hooks/useParamsLink';


export const useTableSearch = () => {
    let {update, value: query} = useSearchParamsChange("q");

    const setQuery = useCallback((value: string) => {
        let removedField: string | undefined = undefined;
        const params: any = {};

        if (!value)
            removedField = 'q'
        else
            params.q = value;

        params.page = '0';

        update(params, removedField);
    }, [update]);

    return {
        query,
        setQuery,
    }
}