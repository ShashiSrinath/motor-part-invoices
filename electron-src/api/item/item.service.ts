import { Item, Prisma, PrismaClient } from "../../../prisma/generated/client";
import ItemFindManyArgs = Prisma.ItemFindManyArgs;
import ItemFindUniqueArgs = Prisma.ItemFindUniqueArgs;
import ItemCountArgs = Prisma.ItemCountArgs;
import ItemCreateArgs = Prisma.ItemCreateArgs;
import ItemUpdateArgs = Prisma.ItemUpdateArgs;
import ItemDeleteArgs = Prisma.ItemDeleteArgs;
import ItemUpdateManyArgs = Prisma.ItemUpdateManyArgs;
import BatchPayload = Prisma.BatchPayload;
import ItemDeleteManyArgs = Prisma.ItemDeleteManyArgs;

const prisma = new PrismaClient();

export const getItems = async (options: ItemFindManyArgs): Promise<Item[]> => {
  return prisma.item.findMany(options);
};

export const getItem = async (
  options: ItemFindUniqueArgs
): Promise<Item | null> => {
  return prisma.item.findUnique(options);
};

export const countItems = (options: ItemCountArgs): Promise<number> => {
  return prisma.item.count(options);
};

export const createItem = (options: ItemCreateArgs): Promise<Item> => {
  return prisma.item.create(options);
};

export const updateItem = (options: ItemUpdateArgs): Promise<Item> => {
  return prisma.item.update(options);
};

export const updateItems = (
  options: ItemUpdateManyArgs
): Promise<BatchPayload> => {
  return prisma.item.updateMany(options);
};

export const deleteItem = (options: ItemDeleteArgs): Promise<Item> => {
  return prisma.item.delete(options);
};
export const deleteItems = (
  options: ItemDeleteManyArgs
): Promise<BatchPayload> => {
  return prisma.item.deleteMany(options);
};
