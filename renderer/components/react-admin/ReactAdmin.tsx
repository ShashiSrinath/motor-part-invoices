import { Admin, Resource } from 'react-admin';
import IpcApiProvider from '../../lib/IpcApiProvider/IpcApiProvider';
import {} from './items/index';
import Items from './items';
import Orders from './orders';

const ReactAdmin = () => {
    return (
        <Admin title="My Custom Admin" dataProvider={IpcApiProvider}>
            <Resource
                name={'item'}
                list={Items.ItemList}
                create={Items.ItemCreate}
                edit={Items.ItemEdit}
                show={Items.ItemShow}
            />
            <Resource
                name={'order'}
                list={Orders.OrderList}
                create={Orders.OrderCreate}
                edit={Orders.OrderEdit}
                show={Orders.OrderShow}
            />
        </Admin>
    );
};

export default ReactAdmin;
