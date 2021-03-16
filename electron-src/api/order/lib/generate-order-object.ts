import { OrderWithAllRelations, SanitizedOrder } from '../order.types';

export interface GeneratedOrderObject extends OrderWithAllRelations {
    total: number;
}

export const sanitizeOrder = (order: OrderWithAllRelations): SanitizedOrder => {
    let total = 0;
    order.orderItems.forEach((i) => {
        total += i.rate * i.orderedQty;
    });
    return {
        ...order,
        total,
    };
};

export const sanitizeOrders = (
    orders: OrderWithAllRelations[]
): SanitizedOrder[] => {
    return orders.map((o) => sanitizeOrder(o));
};
