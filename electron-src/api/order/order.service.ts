import { Order, Prisma, PrismaClient } from "../../../prisma/generated/client";
import OrderFindManyArgs = Prisma.OrderFindManyArgs;
import OrderFindUniqueArgs = Prisma.OrderFindUniqueArgs;
import OrderCountArgs = Prisma.OrderCountArgs;
import OrderCreateArgs = Prisma.OrderCreateArgs;
import OrderUpdateArgs = Prisma.OrderUpdateArgs;
import OrderDeleteArgs = Prisma.OrderDeleteArgs;
import BatchPayload = Prisma.BatchPayload;
import OrderUpdateManyArgs = Prisma.OrderUpdateManyArgs;
import OrderDeleteManyArgs = Prisma.OrderDeleteManyArgs;

const prisma = new PrismaClient();

export const getOrders = async (
  options: OrderFindManyArgs
): Promise<Order[]> => {
  return prisma.order.findMany(options);
};

export const getOrder = async (
  options: OrderFindUniqueArgs
): Promise<Order | null> => {
  return prisma.order.findUnique(options);
};

export const countOrders = (options: OrderCountArgs): Promise<number> => {
  return prisma.order.count(options);
};

export const createOrder = (options: OrderCreateArgs): Promise<Order> => {
  return prisma.order.create(options);
};

export const updateOrder = (options: OrderUpdateArgs): Promise<Order> => {
  return prisma.order.update(options);
};

export const updateOrders = (
  options: OrderUpdateManyArgs
): Promise<BatchPayload> => {
  return prisma.order.updateMany(options);
};

export const deleteOrder = (options: OrderDeleteArgs): Promise<Order> => {
  return prisma.order.delete(options);
};
export const deleteOrders = (
  options: OrderDeleteManyArgs
): Promise<BatchPayload> => {
  return prisma.order.deleteMany(options);
};
