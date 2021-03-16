import { ipcMain, IpcMainInvokeEvent } from 'electron';
import orderService from './order.service';
import { Prisma } from '../../../prisma/generated/client';
import OrderFindUniqueArgs = Prisma.OrderFindUniqueArgs;
import OrderFindManyArgs = Prisma.OrderFindManyArgs;
import OrderCountArgs = Prisma.OrderCountArgs;
import OrderCreateArgs = Prisma.OrderCreateArgs;
import OrderUpdateArgs = Prisma.OrderUpdateArgs;
import OrderDeleteArgs = Prisma.OrderDeleteArgs;
import OrderUpdateManyArgs = Prisma.OrderUpdateManyArgs;
import OrderDeleteManyArgs = Prisma.OrderDeleteManyArgs;

export default {
    register: () => {
        ipcMain.handle(
            'order/getMany',
            async (_event: IpcMainInvokeEvent, args: OrderFindManyArgs) => {
                return orderService.getMany(args);
            }
        );

        ipcMain.handle(
            'order/getOne',
            async (_event: IpcMainInvokeEvent, args: OrderFindUniqueArgs) => {
                return orderService.getOne(args);
            }
        );

        ipcMain.handle(
            'order/count',
            async (_event: IpcMainInvokeEvent, args: OrderCountArgs) => {
                return orderService.count(args);
            }
        );

        ipcMain.handle(
            'order/create',
            async (_event: IpcMainInvokeEvent, args: OrderCreateArgs) => {
                return orderService.create(args);
            }
        );

        ipcMain.handle(
            'order/update',
            async (_event: IpcMainInvokeEvent, args: OrderUpdateArgs) => {
                return orderService.updateOne(args);
            }
        );
        ipcMain.handle(
            'order/updateMany',
            async (_event: IpcMainInvokeEvent, args: OrderUpdateManyArgs) => {
                return orderService.updateMany(args);
            }
        );

        ipcMain.handle(
            'order/delete',
            async (_event: IpcMainInvokeEvent, args: OrderDeleteArgs) => {
                return orderService.delete(args);
            }
        );
        ipcMain.handle(
            'order/deleteMany',
            async (_event: IpcMainInvokeEvent, args: OrderDeleteManyArgs) => {
                return orderService.deleteMany(args);
            }
        );
    },
};
