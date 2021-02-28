import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";

const OrderCreate: React.FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="partNo" />
      <NumberInput source="rate" />
    </SimpleForm>
  </Create>
);

export default OrderCreate;
