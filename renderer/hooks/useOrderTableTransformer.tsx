import { SanitizedOrder } from '../../electron-src/api/order/order.types';
import { useEffect, useState } from 'react';

export type OrderTableTransformerProps = {
    orders: SanitizedOrder[];
};

export type StringNumberUnion = string | number | undefined;

//transform Sanitized Order Into an Object usable by the enhanced table
const transform = (orders: SanitizedOrder[]) => {
    const output: StringNumberUnion[][] = [];

    orders.forEach((order) => {
        output.push([
            order.id,
            order.orderedDate?.toDateString(),
            order.isCompleted ? 'Completed' : 'Incomplete',
            order.orderItems.length,
        ]);
    });

    return output;
};

const useOrderTableTransformer = ({ orders }: OrderTableTransformerProps) => {
    const [transformedOrders, setTransformedOrders] = useState<
        StringNumberUnion[][]
    >([]);

    useEffect(() => {
        setTransformedOrders(transform(orders));
    }, [orders]);

    return transformedOrders;
};

export default useOrderTableTransformer;
