import http from 'http'
const server = http.createServer((req, res) => {
    if (req.url === '/api/products') {
        res.end(JSON.stringify({
            id: 1,
            name: 'Mobile',
            price: 24000,
            rating: 4.5,
            review: 200,
        }))
    }
    else { 
        res.statuscode(404);
        res.end();
    }

})
server.listen(3000 , ()=>console.log('prg4 is runnning.....'))