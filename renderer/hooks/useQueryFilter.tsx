import { useEffect, useRef, useState } from 'react';
import { stringify as stringifyQuery } from 'query-string';
import { useRouter } from 'next/router';

export const useQueryFilter = (transformQuery: any) => {
    const isFirstRender = useRef(true);
    const router = useRouter();

    const _performQueryTransform = () => {
        const transformed = transformQuery(router.query);
        if (transformed.errArray.length > 0) {
            alert(transformed.errArray.toString());
        }

        return transformed.output;
    };

    const [filters, setFilters] = useState<Record<string, any>>(
        _performQueryTransform()
    );

    //update the url on filters change
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        const newQueryString = stringifyQuery(filters);
        router.push({
            pathname: router.pathname,
            query: newQueryString,
        });
    }, [filters]);

    return { filters, setFilters };
};
