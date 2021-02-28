import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

const ItemCreate: React.FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="partNo" />
      <NumberInput source="rate" />
    </SimpleForm>
  </Edit>
);

export default ItemCreate;
