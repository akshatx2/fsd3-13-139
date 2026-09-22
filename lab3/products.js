const products = [
    {
        id: 1, 
        name: "board",
        qty: 3 ,
        price: 250 
    },
    {
        id: 2,
        name: "pen",
        qty: 12,
        price: 200 
    },
]
let nextId = 3;
export const getAllProducts = () => { 
    return products;
}
export const addProduct = (item) => { 
    item.id = nextId;
    nextId++;
    products.push(item);
    return item;
}