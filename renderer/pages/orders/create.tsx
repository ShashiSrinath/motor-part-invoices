import { Grid } from '@material-ui/core';
import DayjsUtils from '@date-io/dayjs';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import React, { useState } from 'react';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

const CreateOrderPage: React.FC = () => {
    const [orderedDate, setOrderedDate] = useState(() => {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    });

    return (
        <Grid container>
            <Grid item>
                <MuiPickersUtilsProvider utils={DayjsUtils}>
                    <KeyboardDatePicker
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
        </Grid>
    );
};

export default CreateOrderPage;
