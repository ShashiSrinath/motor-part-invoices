interface OrderFilterQuery extends Record<string, any> {
    itemsPerPage: string;
    page: string;
    id?: string;
    incompleteOnly: string;
    orderedDateGt?: string;
    orderedDateLt?: string;
}

interface OrderFilterQueryValidated extends Record<string, any> {
    itemsPerPage: number;
    page: number;
    id?: number;
    incompleteOnly: boolean;
    orderedDateGt?: Date;
    orderedDateLt?: Date;
}

const DEFAULT_ORDER_QUERY = {
    itemsPerPage: 10,
    page: 1,
    incompleteOnly: false,
};

export default {
    transformOrders: (
        query: OrderFilterQuery
    ): { output: OrderFilterQueryValidated; errArray: string[] } => {
        const output: OrderFilterQueryValidated = {
            ...DEFAULT_ORDER_QUERY,
        };

        const errArray = [];

        if (query.id) {
            try {
                output.id = parseInt(query.id);
            } catch (e) {
                errArray.push('Invalid parameter id');
            }
        }

        if (query.itemsPerPage) {
            try {
                output.itemsPerPage = parseInt(query.itemsPerPage);
            } catch (e) {
                errArray.push('Invalid parameter itemsPerPage');
            }
        }

        if (query.page) {
            try {
                output.page = parseInt(query.page);
            } catch (e) {
                errArray.push('Invalid parameter page');
            }
        }

        if (query.orderedDateGt) {
            try {
                output.orderedDateGt = new Date(query.orderedDateGt);
            } catch (e) {
                errArray.push('Invalid parameter orderedDateGt');
            }
        }

        if (query.orderedDateLt) {
            try {
                output.orderedDateLt = new Date(query.orderedDateLt);
            } catch (e) {
                errArray.push('Invalid parameter orderedDateLt');
            }
        }

        return { output, errArray };
    },
};
