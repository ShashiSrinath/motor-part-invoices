import { NumberField, Show, SimpleShowLayout, TextField } from "react-admin";

const ItemShow: React.FC = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="partNo" />
      <NumberField source="rate" />
    </SimpleShowLayout>
  </Show>
);

export default ItemShow;
