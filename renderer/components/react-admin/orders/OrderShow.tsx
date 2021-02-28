import { NumberField, Show, SimpleShowLayout, TextField } from "react-admin";

const OrderShow: React.FC = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="partNo" />
      <NumberField source="rate" />
    </SimpleShowLayout>
  </Show>
);

export default OrderShow;
