import { render, waitFor, screen } from '@testing-library/react';
import OrdersPage from '../../pages/orders';
import * as nextRouter from 'next/router';

const ORDERS = [
    {
        id: '1',
        orderedDate: new Date('2020-01-01'),
        isCompleted: false,
        orderedItems: Array(100),
    },
    {
        id: '2',
        orderedDate: new Date('2020-01-02'),
        isCompleted: true,
        orderedItems: Array(20),
    },
    {
        id: '3',
        orderedDate: new Date('2020-01-03'),
        isCompleted: false,
        orderedItems: Array(13),
    },
];

beforeAll(() => {
    // mocking ipc renderer
    global.ipcRenderer = {
        ...global.ipcRenderer,
        invoke: jest.fn(async (channel, _args) => {
            switch (channel) {
                case 'order/getMany':
                    return ORDERS;
                case 'order/count':
                    return ORDERS.length;
            }
        }),
    };

    // @ts-ignore
    nextRouter.useRouter = jest.fn(() => ({
        route: '/',
        query: '',
        prefetch: jest.fn(async () => {}),
    }));
});

it('should call the ipcRenderer.invoke method twice on mount', async function () {
    await waitFor(() => {
        render(<OrdersPage />);
    });

    await waitFor(() => {
        expect(global.ipcRenderer.invoke).toBeCalledTimes(2);
    });
});

it('should fetch the list of orders on mount', async function () {
    await waitFor(() => {
        render(<OrdersPage />);
    });

    await waitFor(() => {
        expect(global.ipcRenderer.invoke).toHaveBeenNthCalledWith(
            1,
            'order/getMany',
            {
                include: {
                    orderItems: true,
                    shippings: true,
                },
                skip: 0,
                take: 10,
                where: {},
            }
        );

        expect(global.ipcRenderer.invoke).toHaveBeenNthCalledWith(
            2,
            'order/count',
            {
                where: {},
            }
        );
    });
});

it('should hide the filters on load', async function () {
    await waitFor(() => {
        render(<OrdersPage />);
    });
    const filterContainer = screen.queryByTestId('filter-container');
    expect(filterContainer).toBeFalsy();
});

it('should toggle the filters on filters click', async function () {
    await waitFor(() => {
        render(<OrdersPage />);
    });

    await waitFor(() => {
        screen.getByTestId('btn-filters').click();
    });

    const filterContainer = screen.queryByTestId('filter-container');
    expect(filterContainer).toBeTruthy();
});
