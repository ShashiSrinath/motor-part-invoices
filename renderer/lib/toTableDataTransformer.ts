import { OrderWithAllRelations } from '../../electron-src/api/order/order.types';

export default {
    transformOrders: (
        data: OrderWithAllRelations[]
    ): [number, string | undefined, string, string][] => {
        return data.map((d) => {
            const isCompleted = d.isCompleted ? 'Complete' : 'Incomplete';
            let orderedItems = 0;
            let receivedItems = 0;

            d.orderItems?.forEach((i) => {
                orderedItems += i.orderedQty;
                receivedItems += i.receivedQty || 0;
            });

            return [
                d.id,
                d.orderedDate?.toLocaleDateString(),
                isCompleted,
                `${receivedItems} / ${orderedItems}`,
            ];
        });
    },
};
