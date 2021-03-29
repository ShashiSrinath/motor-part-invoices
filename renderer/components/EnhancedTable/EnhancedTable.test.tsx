import { render } from '@testing-library/react';
import EnhancedTable from './EnhancedTable';

const headings = ['he1', 'he2', 'he3'];
const data = [
    ['1', '2020-1-12', 'completed', '122/ 22'],
    ['2', '2020-3-14', 'completed', '1/ 222'],
    ['3', '2020-2-21', 'completed', '33/ 42'],
    ['4', '2020-5-05', 'incomplete', '11/ 22'],
];

it('displays the table headings', () => {
    const { queryByText } = render(
        <EnhancedTable headings={headings} data={data} />
    );

    expect(queryByText('he1')).toBeTruthy();
    expect(queryByText('he2')).toBeTruthy();
    expect(queryByText('he3')).toBeTruthy();
});

it('should display table rows', () => {
    const { queryByText } = render(
        <EnhancedTable headings={headings} data={data} />
    );

    expect(queryByText('2020-1-12')).toBeTruthy();
    expect(queryByText('33/ 42')).toBeTruthy();
    expect(queryByText('11/ 22')).toBeTruthy();
});
