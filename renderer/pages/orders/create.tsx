import {
    createStyles,
    Grid,
    makeStyles,
    Theme,
    Typography,
} from '@material-ui/core';
import DayjsUtils from '@date-io/dayjs';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import React, { useState } from 'react';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import BasePageLayout from '../../layouts/BasePageLayout';

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        root: {
            padding: '20px',
        },
        mainTitle: {
            marginBottom: '30px',
        },
    })
);

const CreateOrderPage: React.FC = () => {
    const classes = useStyles();

    const [orderedDate, setOrderedDate] = useState(() => {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    });

    return (
        <BasePageLayout title={'Create an order'}>
            <Grid container className={classes.root}>
                <Grid item sm={12}>
                    <Typography
                        variant={'h2'}
                        color={'textPrimary'}
                        className={classes.mainTitle}
                    >
                        Create an Order
                    </Typography>
                </Grid>
                <Grid item>
                    <MuiPickersUtilsProvider utils={DayjsUtils}>
                        <KeyboardDatePicker
                            size={'medium'}
                            data-testid={'ordered-date-input'}
                            disableToolbar
                            variant={'inline'}
                            format="DD-MM-YYYY"
                            margin="normal"
                            label="Ordered Date"
                            onChange={(val: MaterialUiPickersDate) => {
                                setOrderedDate(val ? val.toDate() : new Date());
                            }}
                            value={orderedDate}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item>
                    <Typography variant={'h4'} color={'textSecondary'}>
                        Add Items
                    </Typography>
                </Grid>
            </Grid>
        </BasePageLayout>
    );
};

export default CreateOrderPage;
