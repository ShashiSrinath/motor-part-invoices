import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';

const useStyles = makeStyles({
    tableHeading: {
        fontWeight: 'bold',
    },
});

export type EnhancedTableProps = {
    headings: string[];
    data: any[][];
    count?: number;
};

const EnhancedTable: React.FC<EnhancedTableProps> = ({
    headings,
    data,
    count,
}) => {
    const classes = useStyles();

    return (
        <TableContainer>
            <Table>
                <TableHead className={classes.tableHeading}>
                    <TableRow>
                        {headings.map((heading) => (
                            <TableCell key={heading}>{heading}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            {row.map((cell, index) => (
                                <TableCell key={index}>{cell}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            count : {count}
        </TableContainer>
    );
};

export default EnhancedTable;
