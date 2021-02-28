import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
  Filter,
  SearchInput,
  TextInput,
  EditButton,
  ShowButton,
  DeleteButton,
} from "react-admin";

const PostFilter: React.FC = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
    <TextInput source="name" />
    <TextInput source="partNo" />
  </Filter>
);

const ItemList: React.FC = (props) => (
  <List {...props} filters={<PostFilter />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="orderedDate" />
      <TextField source="amount" />
      <BooleanField source="hasReceived" />
      <BooleanField source="payed" />
      <NumberField source="rate" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default ItemList;
