import { DataProvider } from "react-admin";

type GetListParams = {
  pagination: {
    page: number;
    perPage: number;
  };
  sort: {
    field: string;
    order: string;
  };
};

type GetOneParams = {
  id: number | string;
};

type GetManyParams = {
  ids: (number | string)[];
};
type GetManyReferenceParams = {
  target: string;
  id: number | string;
  filter: object;
  pagination: {
    page: number;
    perPage: number;
  };
  sort: {
    field: string;
    order: string;
  };
};

type CreateParams = {
  data: any;
};

type UpdateParams = {
  id: number | string;
  data: any;
};

type UpdateManyParams = {
  ids: (number | string)[];
  data: any;
};

type DeleteParams = {
  id: number | string;
};

type DeleteManyParams = {
  ids: (number | string)[];
};

const IpcApiProvider: DataProvider = {
  getList: async (resource: string, params: GetListParams) => {
    const channel = `${resource}/getMany`;
    const countChannel = `${resource}/count`;
    const options = {
      orderBy: {
        [params.sort.field]: params.sort.order.toLowerCase(),
      },
      take: params.pagination.perPage,
      skip: params.pagination.perPage * (params.pagination.page - 1),
    };
    const items = await global.ipcRenderer.invoke(channel, options);
    const count = await global.ipcRenderer.invoke(countChannel, {});
    return {
      data: items,
      total: count,
    };
  },
  getOne: async (resource: string, params: GetOneParams) => {
    const channel = `${resource}/getOne`;
    const id = typeof params.id === "string" ? parseInt(params.id) : params.id;
    const options = {
      where: {
        id: id,
      },
    };
    const item = await global.ipcRenderer.invoke(channel, options);
    return {
      data: item,
    };
  },
  getMany: async (resource: string, params: GetManyParams) => {
    const channel = `${resource}/getMany`;
    const ids = params.ids.map((id) =>
      typeof id === "string" ? parseInt(id) : id
    );
    const options = {
      where: {
        id: {
          in: ids,
        },
      },
    };
    const items = await global.ipcRenderer.invoke(channel, options);
    return {
      data: items,
    };
  },
  getManyReference: async (
    resource: string,
    params: GetManyReferenceParams
  ) => {
    const channel = `${resource}/getMany`;
    const countChannel = `${resource}/count`;
    const options = {
      where: params.filter,
      orderBy: {
        [params.sort.field]: params.sort.order.toLowerCase(),
      },
      take: params.pagination.perPage,
      skip: params.pagination.perPage * (params.pagination.page - 1),
    };
    const items = await global.ipcRenderer.invoke(channel, options);
    const count = await global.ipcRenderer.invoke(countChannel, {
      where: options.where,
    });
    return {
      data: items,
      total: count,
    };
  },
  create: async (resource: string, params: CreateParams) => {
    const channel = `${resource}/create`;
    const options = {
      data: params.data,
    };
    const item = await global.ipcRenderer.invoke(channel, options);
    return { data: item };
  },
  update: async (resource: string, params: UpdateParams) => {
    const channel = `${resource}/update`;
    const id = typeof params.id === "string" ? parseInt(params.id) : params.id;
    const options = {
      data: {
        ...params.data,
      },
      where: {
        id: id,
      },
    };
    const item = await global.ipcRenderer.invoke(channel, options);
    return { data: item };
  },
  updateMany: async (resource: string, params: UpdateManyParams) => {
    const channel = `${resource}/updateMany`;
    const ids = params.ids.map((id) =>
      typeof id === "string" ? parseInt(id) : id
    );
    const options = {
      where: {
        id: {
          in: ids,
        },
      },
      data: params.data,
    };
    await global.ipcRenderer.invoke(channel, options);
    return { data: params.ids };
  },
  delete: async (resource: string, params: DeleteParams) => {
    const channel = `${resource}/delete`;
    const id = typeof params.id === "string" ? parseInt(params.id) : params.id;
    const options = {
      where: {
        id: id,
      },
    };

    const item = await global.ipcRenderer.invoke(channel, options);
    return { data: item };
  },
  deleteMany: async (resource: string, params: DeleteManyParams) => {
    const channel = `${resource}/deleteMany`;
    const ids = params.ids.map((id) =>
      typeof id === "string" ? parseInt(id) : id
    );
    const options = {
      where: {
        id: {
          in: ids,
        },
      },
    };
    await global.ipcRenderer.invoke(channel, options);
    return { data: params.ids };
  },
};

export default IpcApiProvider;
