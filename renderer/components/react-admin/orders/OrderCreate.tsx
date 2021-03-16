import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useState } from 'react';

const OrderCreate: React.FC = (props) => {
    const [orderedDate, setOrderedDate] = useState<Date | null>();

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    value={orderedDate}
                    onChange={(e) => setOrderedDate(e)}
                />
                <h2>Order items</h2>
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default OrderCreate;
