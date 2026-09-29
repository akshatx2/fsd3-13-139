import express from 'express';
const app = express();
// request goes here
app.get("/", (req, res) => {
    res.send("<h1>Hello Express</h1>")
})
app.get("/about", (req, res) => {
    res.end("<h2>About us Page</h2>");
});
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
app.get("/products", (req, res) => {
    res.status(200).send(products);
});

app.use((req, res) => {
    res.status(404).send("<h1>Page not found</h1>");
});
// always listen at last
app.listen(3333, () => console.log("prg1 is running at 3333"));;