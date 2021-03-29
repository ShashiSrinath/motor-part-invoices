import {
    Button,
    ButtonGroup,
    createStyles,
    Grid,
    makeStyles,
    TextField,
    Theme,
} from '@material-ui/core';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DayjsUtils from '@date-io/dayjs';
import React from 'react';
import { animated, useTransition } from 'react-spring';

export type OrderFiltersProps = {
    filters: Record<string, any>;
    setFilters: React.Dispatch<React.SetStateAction<Record<string, any>>>;
    show: boolean;
};

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        root: {
            marginTop: '20px',
            marginBottom: '20px',
        },
        orderStatusContainer: {
            marginBottom: '20px',
        },
    })
);

const AnimatedElement: React.FC<{ show: boolean }> = ({ children, show }) => {
    const transitions = useTransition(show, {
        from: {
            position: 'absolute',
            x: +1000,
            y: -50,
            opacity: 0,
            zIndex: 1,
            width: '1%',
            height: '1%',
        },
        enter: {
            position: 'relative',
            x: 0,
            y: 0,
            opacity: 1,
            width: '100%',
            height: '100%',
        },
        leave: {
            position: 'absolute',
            x: +1000,
            y: -50,
            opacity: 0,
            zIndex: -1,
            width: '1%',
            height: '1%',
        },
    });

    return transitions(
        (style, item) =>
            // @ts-ignore
            !item || <animated.div style={style}>{children}</animated.div>
    );
};

const OrderFilters: React.FC<OrderFiltersProps> = ({
    filters,
    setFilters,
    show,
}) => {
    const classes = useStyles();

    return (
        <AnimatedElement show={show}>
            <Grid
                container
                className={classes.root}
                data-testid={'filter-container'}
            >
                <Grid
                    container
                    justify={'center'}
                    className={classes.orderStatusContainer}
                >
                    <Grid item>
                        <ButtonGroup disableElevation size="small">
                            <Button color={'secondary'} variant={'contained'}>
                                All Orders (123)
                            </Button>
                            <Button>Incomplete Orders (2)</Button>
                            <Button>Completed Orders (121)</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
                <MuiPickersUtilsProvider utils={DayjsUtils}>
                    <Grid
                        container
                        justify={'space-around'}
                        alignItems={'center'}
                    >
                        <Grid item>
                            <TextField
                                id="search-text"
                                label="Search by id"
                                variant="outlined"
                                color={'primary'}
                                size={'small'}
                            />
                        </Grid>
                        <Grid item>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant={'inline'}
                                        format="DD/MM/YYYY"
                                        margin="normal"
                                        label="From Date"
                                        onChange={(d) => {
                                            if (d)
                                                setFilters({
                                                    ...filters,
                                                    orderedDateGt: d.toISOString(),
                                                });
                                        }}
                                        value={filters.orderedDateGt}
                                    />
                                </Grid>
                                <Grid item>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant={'inline'}
                                        format="DD/MM/YYYY"
                                        margin="normal"
                                        label="To Date"
                                        onChange={(d) => {
                                            if (d)
                                                setFilters({
                                                    ...filters,
                                                    orderedDateLt: d.toISOString(),
                                                });
                                        }}
                                        value={filters.orderedDateLt}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MuiPickersUtilsProvider>
            </Grid>
        </AnimatedElement>
    );
};

export default OrderFilters;
