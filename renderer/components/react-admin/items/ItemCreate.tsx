import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const ItemCreate: React.FC = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="partNo" />
            <NumberInput source="rate" />
        </SimpleForm>
    </Create>
);

export default ItemCreate;
