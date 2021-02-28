import { ipcMain, IpcMainInvokeEvent } from "electron";
import {
  countItems,
  createItem,
  deleteItem,
  deleteItems,
  getItem,
  getItems,
  updateItem,
  updateItems,
} from "./item.service";
import { Prisma } from "../../../prisma/generated/client";
import ItemFindUniqueArgs = Prisma.ItemFindUniqueArgs;
import ItemFindManyArgs = Prisma.ItemFindManyArgs;
import ItemCountArgs = Prisma.ItemCountArgs;
import ItemCreateArgs = Prisma.ItemCreateArgs;
import ItemUpdateArgs = Prisma.ItemUpdateArgs;
import ItemDeleteArgs = Prisma.ItemDeleteArgs;
import ItemUpdateManyArgs = Prisma.ItemUpdateManyArgs;
import ItemDeleteManyArgs = Prisma.ItemDeleteManyArgs;

ipcMain.handle(
  "item/getMany",
  async (_event: IpcMainInvokeEvent, args: ItemFindManyArgs) => {
    return getItems(args);
  }
);

ipcMain.handle(
  "item/getOne",
  async (_event: IpcMainInvokeEvent, args: ItemFindUniqueArgs) => {
    return getItem(args);
  }
);

ipcMain.handle(
  "item/count",
  async (_event: IpcMainInvokeEvent, args: ItemCountArgs) => {
    return countItems(args);
  }
);

ipcMain.handle(
  "item/create",
  async (_event: IpcMainInvokeEvent, args: ItemCreateArgs) => {
    return createItem(args);
  }
);

ipcMain.handle(
  "item/update",
  async (_event: IpcMainInvokeEvent, args: ItemUpdateArgs) => {
    return updateItem(args);
  }
);

ipcMain.handle(
  "item/updateMany",
  async (_event: IpcMainInvokeEvent, args: ItemUpdateManyArgs) => {
    return updateItems(args);
  }
);

ipcMain.handle(
  "item/delete",
  async (_event: IpcMainInvokeEvent, args: ItemDeleteArgs) => {
    return deleteItem(args);
  }
);
ipcMain.handle(
  "item/deleteMany",
  async (_event: IpcMainInvokeEvent, args: ItemDeleteManyArgs) => {
    return deleteItems(args);
  }
);
