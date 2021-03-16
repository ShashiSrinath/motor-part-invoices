import { Prisma } from '../../../prisma/generated/client';

export type OrderWithAllRelations = Prisma.OrderGetPayload<{
    include: {
        shippings: true;
        orderItems: true;
    };
}>;

export interface SanitizedOrder extends OrderWithAllRelations {
    total: number;
}
