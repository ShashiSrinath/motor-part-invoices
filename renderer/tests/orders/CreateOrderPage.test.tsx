import { render, screen, waitFor } from '@testing-library/react';
import CreateOrderPage from '../../pages/orders/create';
import dayjs from 'dayjs';

it('should show the main title', async function () {
    await waitFor(() => {
        render(<CreateOrderPage />);
    });

    expect(screen.queryByText('Create an Order')).toBeTruthy();
});

describe('ordered date element', () => {
    it('should render', async function () {
        await waitFor(() => {
            render(<CreateOrderPage />);
        });

        expect(screen.queryByTestId('ordered-date-input')).toBeTruthy();
    });

    it('should show the current date on load', async function () {
        await waitFor(() => {
            render(<CreateOrderPage />);
        });

        const orderedDateElement: any = screen.queryByTestId(
            'ordered-date-input'
        );

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        expect(orderedDateElement.children[1].children[0].value).toBe(
            dayjs().format('DD-MM-YYYY')
        );
    });
});
