import { ipcMain, IpcMainInvokeEvent } from "electron";
import {
  countOrders,
  createOrder,
  deleteOrder,
  deleteOrders,
  getOrder,
  getOrders,
  updateOrder,
  updateOrders,
} from "./order.service";
import { Prisma } from "../../../prisma/generated/client";
import OrderFindUniqueArgs = Prisma.OrderFindUniqueArgs;
import OrderFindManyArgs = Prisma.OrderFindManyArgs;
import OrderCountArgs = Prisma.OrderCountArgs;
import OrderCreateArgs = Prisma.OrderCreateArgs;
import OrderUpdateArgs = Prisma.OrderUpdateArgs;
import OrderDeleteArgs = Prisma.OrderDeleteArgs;
import OrderUpdateManyArgs = Prisma.OrderUpdateManyArgs;
import OrderDeleteManyArgs = Prisma.OrderDeleteManyArgs;

ipcMain.handle(
  "order/getMany",
  async (_event: IpcMainInvokeEvent, args: OrderFindManyArgs) => {
    return getOrders(args);
  }
);

ipcMain.handle(
  "order/getOne",
  async (_event: IpcMainInvokeEvent, args: OrderFindUniqueArgs) => {
    return getOrder(args);
  }
);

ipcMain.handle(
  "order/count",
  async (_event: IpcMainInvokeEvent, args: OrderCountArgs) => {
    return countOrders(args);
  }
);

ipcMain.handle(
  "order/create",
  async (_event: IpcMainInvokeEvent, args: OrderCreateArgs) => {
    return createOrder(args);
  }
);

ipcMain.handle(
  "order/update",
  async (_event: IpcMainInvokeEvent, args: OrderUpdateArgs) => {
    return updateOrder(args);
  }
);
ipcMain.handle(
  "order/updateMany",
  async (_event: IpcMainInvokeEvent, args: OrderUpdateManyArgs) => {
    return updateOrders(args);
  }
);

ipcMain.handle(
  "order/delete",
  async (_event: IpcMainInvokeEvent, args: OrderDeleteArgs) => {
    return deleteOrder(args);
  }
);
ipcMain.handle(
  "order/deleteMany",
  async (_event: IpcMainInvokeEvent, args: OrderDeleteManyArgs) => {
    return deleteOrders(args);
  }
);
