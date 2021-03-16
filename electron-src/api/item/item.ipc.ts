import { ipcMain, IpcMainInvokeEvent } from 'electron';
import itemService from './item.service';
import { Prisma } from '../../../prisma/generated/client';
import ItemFindUniqueArgs = Prisma.ItemFindUniqueArgs;
import ItemFindManyArgs = Prisma.ItemFindManyArgs;
import ItemCountArgs = Prisma.ItemCountArgs;
import ItemCreateArgs = Prisma.ItemCreateArgs;
import ItemUpdateArgs = Prisma.ItemUpdateArgs;
import ItemDeleteArgs = Prisma.ItemDeleteArgs;
import ItemUpdateManyArgs = Prisma.ItemUpdateManyArgs;
import ItemDeleteManyArgs = Prisma.ItemDeleteManyArgs;

export default {
    register: () => {
        ipcMain.handle(
            'item/getMany',
            async (_event: IpcMainInvokeEvent, args: ItemFindManyArgs) => {
                return itemService.getMany(args);
            }
        );

        ipcMain.handle(
            'item/getOne',
            async (_event: IpcMainInvokeEvent, args: ItemFindUniqueArgs) => {
                return itemService.getOne(args);
            }
        );

        ipcMain.handle(
            'item/count',
            async (_event: IpcMainInvokeEvent, args: ItemCountArgs) => {
                return itemService.count(args);
            }
        );

        ipcMain.handle(
            'item/create',
            async (_event: IpcMainInvokeEvent, args: ItemCreateArgs) => {
                return itemService.create(args);
            }
        );

        ipcMain.handle(
            'item/update',
            async (_event: IpcMainInvokeEvent, args: ItemUpdateArgs) => {
                return itemService.updateOne(args);
            }
        );

        ipcMain.handle(
            'item/updateMany',
            async (_event: IpcMainInvokeEvent, args: ItemUpdateManyArgs) => {
                return itemService.updateMany(args);
            }
        );

        ipcMain.handle(
            'item/delete',
            async (_event: IpcMainInvokeEvent, args: ItemDeleteArgs) => {
                return itemService.delete(args);
            }
        );
        ipcMain.handle(
            'item/deleteMany',
            async (_event: IpcMainInvokeEvent, args: ItemDeleteManyArgs) => {
                return itemService.deleteMany(args);
            }
        );
    },
};
