import { Order, Prisma, PrismaClient } from '../../../prisma/generated/client';
import OrderFindManyArgs = Prisma.OrderFindManyArgs;
import OrderFindUniqueArgs = Prisma.OrderFindUniqueArgs;
import OrderCountArgs = Prisma.OrderCountArgs;
import OrderCreateArgs = Prisma.OrderCreateArgs;
import OrderUpdateArgs = Prisma.OrderUpdateArgs;
import OrderDeleteArgs = Prisma.OrderDeleteArgs;
import BatchPayload = Prisma.BatchPayload;
import OrderUpdateManyArgs = Prisma.OrderUpdateManyArgs;
import OrderDeleteManyArgs = Prisma.OrderDeleteManyArgs;
import { OrderWithAllRelations, SanitizedOrder } from './order.types';
import { sanitizeOrder, sanitizeOrders } from './lib/generate-order-object';

const prisma = new PrismaClient();

export default {
    getMany: async (
        options: OrderFindManyArgs
    ): Promise<OrderWithAllRelations[]> => {
        options = {
            ...options,
            include: {
                orderItems: true,
                shippings: true,
            },
        };

        const orders = ((await prisma.order.findMany(
            options
        )) as unknown) as OrderWithAllRelations[];
        return sanitizeOrders(orders);
    },

    getOne: async (
        options: OrderFindUniqueArgs
    ): Promise<SanitizedOrder | null> => {
        options = {
            ...options,
            include: {
                orderItems: true,
                shippings: true,
            },
        };

        const order = ((await prisma.order.findUnique(
            options
        )) as unknown) as OrderWithAllRelations;

        if (order) return sanitizeOrder(order);
        else return null;
    },

    count: async (options: OrderCountArgs): Promise<number> => {
        return prisma.order.count(options);
    },

    create: async (options: OrderCreateArgs): Promise<SanitizedOrder> => {
        options = {
            ...options,
            include: {
                orderItems: true,
                shippings: true,
            },
        };
        return sanitizeOrder(
            ((await prisma.order.create(
                options
            )) as unknown) as OrderWithAllRelations
        );
    },

    updateOne: async (
        options: OrderUpdateArgs
    ): Promise<OrderWithAllRelations> => {
        options = {
            ...options,
            include: {
                orderItems: true,
                shippings: true,
            },
        };

        return sanitizeOrder(
            ((await prisma.order.update(
                options
            )) as unknown) as OrderWithAllRelations
        );
    },

    updateMany: async (options: OrderUpdateManyArgs): Promise<BatchPayload> => {
        return prisma.order.updateMany(options);
    },

    delete: async (options: OrderDeleteArgs): Promise<Order> => {
        return prisma.order.delete(options);
    },
    deleteMany: async (options: OrderDeleteManyArgs): Promise<BatchPayload> => {
        return prisma.order.deleteMany(options);
    },
};
