const products = [
    {
        id: 1,
        name: "board",
        qty: 3,
        price: 250
    },
    {
        id: 2,
        name: "pen",
        qty: 12,
        price: 200
    }
];

let nextId = 3;

export const getAllProducts = () => {
    return products;
};

export const addProduct = (item) => {
    item.id = nextId;
    nextId++;

    products.push(item);

    return item;
};

export const deleteProduct = (pid) => {

    const item = products.findIndex((prd) => prd.id === pid);

    if (item == -1) {
        return false;
    }

    products.splice(item, 1);

    console.log("products remaining :", products);

    return true;
};

export const updateProduct = (pid, updateItem) => {

    const item = products.findIndex((prd) => prd.id === pid);

    if (item == -1) {
        return false;
    }

    updateItem.id = pid;

    products[item] = updateItem;

    return updateItem;
};

export const getProductById = (pid) => {

    const item = products.findIndex((prd) => prd.id === pid);

    if (item == -1) {
        return false;
    }

    return products[item];
};