import { Admin, Resource } from "react-admin";
import IpcApiProvider from "../../lib/IpcApiProvider/IpcApiProvider";
import {} from "./items/index";
import Items from "./items";

const ReactAdmin = () => {
  return (
    <Admin title="My Custom Admin" dataProvider={IpcApiProvider}>
      <Resource
        name={"item"}
        list={Items.ItemList}
        create={Items.ItemCreate}
        edit={Items.ItemEdit}
        show={Items.ItemShow}
      />
    </Admin>
  );
};

export default ReactAdmin;
