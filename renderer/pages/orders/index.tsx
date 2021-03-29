import React, { useEffect, useState } from 'react';
import { Prisma } from '../../../prisma/generated/client';
import { OrderWithAllRelations } from '../../../electron-src/api/order/order.types';
import {
    Button,
    createStyles,
    Grid,
    makeStyles,
    Theme,
    Typography,
} from '@material-ui/core';
import PostAddTwoToneIcon from '@material-ui/icons/PostAddTwoTone';
import FilterListTwoToneIcon from '@material-ui/icons/FilterListTwoTone';
import Link from 'next/link';
import BasePageLayout from '../../layouts/BasePageLayout';
import queryTransformer from '../../lib/queryTransformer';
import { useQueryFilter } from '../../hooks/useQueryFilter';
import EnhancedTable from '../../components/EnhancedTable/EnhancedTable';
import OrderFilters from '../../components/Order/OrderFilters';
import toTableDataTransformer from '../../lib/toTableDataTransformer';

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        root: {
            padding: '20px',
        },
    })
);

const OrdersPage: React.FC = () => {
    const classes = useStyles();

    const [orders, setOrders] = useState<{
        total: number;
        data: [number, string | undefined, string, string][];
    }>({ total: 0, data: [] });

    const { filters, setFilters } = useQueryFilter(
        queryTransformer.transformOrders
    );

    const [showFilters, setShowFilters] = useState(false);

    //fetch orders on query change
    useEffect(() => {
        const args: Prisma.OrderFindManyArgs = {
            include: {
                orderItems: true,
                shippings: true,
            },
            where: {},
            skip: filters.itemsPerPage * (filters.page - 1),
            take: filters.itemsPerPage,
        };

        if (filters.id) {
            args.where = {
                ...args.where,
                id: {
                    equals: filters.id,
                },
            };
        }

        if (filters.incompleteOnly) {
            args.where = {
                ...args.where,
                isCompleted: false,
            };
        }

        if (filters.orderedDateGt) {
            args.where = {
                ...args.where,
                orderedDate: {
                    gte: filters.orderedDateGt,
                },
            };
        }

        if (filters.orderedDateLt) {
            args.where = {
                ...args.where,
                orderedDate: {
                    gte: filters.orderedDateLt,
                },
            };
        }

        const fetchOrders = async () => {
            const orders: OrderWithAllRelations[] = await global.ipcRenderer.invoke(
                'order/getMany',
                args
            );
            const orderCount = await global.ipcRenderer.invoke('order/count', {
                where: args.where,
            });

            setOrders({
                total: orderCount,
                data: toTableDataTransformer.transformOrders(orders),
            });
        };

        fetchOrders();
    }, [filters]);

    return (
        <BasePageLayout title={'Orders'}>
            <div className={classes.root}>
                <Grid container justify={'space-between'} alignItems={'center'}>
                    <Grid item>
                        <Typography variant="h3" color={'textPrimary'}>
                            Orders
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Button
                                    size={'medium'}
                                    variant={
                                        showFilters ? 'contained' : 'outlined'
                                    }
                                    color={'secondary'}
                                    startIcon={<FilterListTwoToneIcon />}
                                    data-testid={'btn-filters'}
                                    onClick={() =>
                                        setShowFilters(
                                            (showFilters) => !showFilters
                                        )
                                    }
                                >
                                    Filters
                                </Button>
                            </Grid>
                            <Grid item>
                                <Link href={'orders/create'}>
                                    <Button
                                        variant={'contained'}
                                        color={'primary'}
                                        startIcon={<PostAddTwoToneIcon />}
                                    >
                                        Create New Order
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <OrderFilters
                    filters={filters}
                    setFilters={setFilters}
                    show={showFilters}
                />
                <EnhancedTable
                    headings={['ID', 'Ordered Date', 'Status', 'Items']}
                    data={orders.data}
                    count={orders.total}
                />
            </div>
        </BasePageLayout>
    );
};

export default OrdersPage;
