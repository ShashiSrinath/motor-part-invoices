import toTableDataTransformer from './toTableDataTransformer';
import { OrderWithAllRelations } from '../../electron-src/api/order/order.types';

it('should transform order data correctly', function () {
    const ORDERS: OrderWithAllRelations[] = [
        {
            id: 1,
            orderedDate: new Date('1/1/2020'),
            isCompleted: false,
            orderItems: [],
            shippings: [],
        },
        {
            id: 2,
            orderedDate: new Date('2/1/2020'),
            isCompleted: true,
            orderItems: [],
            shippings: [],
        },
        {
            id: 3,
            orderedDate: new Date('3/1/2020'),
            isCompleted: false,
            orderItems: [],
            shippings: [],
        },
    ];

    const EXPECTED = [
        [1, '1/1/2020', 'Incomplete', '0 / 0'],
        [2, '2/1/2020', 'Complete', '0 / 0'],
        [3, '3/1/2020', 'Incomplete', '0 / 0'],
    ];

    expect(toTableDataTransformer.transformOrders(ORDERS)).toEqual(EXPECTED);
});
