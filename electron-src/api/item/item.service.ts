import { Item, Prisma } from '../../../prisma/generated/client';
import prisma from '../../prisma-client';
import ItemFindManyArgs = Prisma.ItemFindManyArgs;
import ItemFindUniqueArgs = Prisma.ItemFindUniqueArgs;
import ItemCountArgs = Prisma.ItemCountArgs;
import ItemCreateArgs = Prisma.ItemCreateArgs;
import ItemUpdateArgs = Prisma.ItemUpdateArgs;
import ItemDeleteArgs = Prisma.ItemDeleteArgs;
import ItemUpdateManyArgs = Prisma.ItemUpdateManyArgs;
import BatchPayload = Prisma.BatchPayload;
import ItemDeleteManyArgs = Prisma.ItemDeleteManyArgs;

export default {
    getMany: async (options: ItemFindManyArgs): Promise<Item[]> => {
        try {
            return await prisma.item.findMany(options);
        } catch (e) {
            return [];
        }
    },
    getOne: async (options: ItemFindUniqueArgs): Promise<Item | null> => {
        try {
            return await prisma.item.findUnique(options);
        } catch (e) {
            console.log(e);
            return null;
        }
    },
    count: async (options: ItemCountArgs): Promise<number> => {
        return prisma.item.count(options);
    },
    create: async (options: ItemCreateArgs): Promise<Item> => {
        return prisma.item.create(options);
    },
    updateOne: async (options: ItemUpdateArgs): Promise<Item | null> => {
        try {
            return await prisma.item.update(options);
        } catch (e) {
            return null;
        }
    },
    updateMany: async (options: ItemUpdateManyArgs): Promise<BatchPayload> => {
        try {
            return await prisma.item.updateMany(options);
        } catch (e) {
            return {
                count: 0,
            };
        }
    },
    delete: async (options: ItemDeleteArgs): Promise<Item | null> => {
        try {
            return await prisma.item.delete(options);
        } catch (e) {
            return null;
        }
    },
    deleteMany: async (options: ItemDeleteManyArgs): Promise<BatchPayload> => {
        try {
            return prisma.item.deleteMany(options);
        } catch (e) {
            return {
                count: 0,
            };
        }
    },
};
