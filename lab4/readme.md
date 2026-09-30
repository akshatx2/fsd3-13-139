## Express

1. create project folder
2. goto project and open terminal
3. execute `npm init -y`
4. install `npm i nodemon -D`
5. open package.json
   a. change `"type": "module"`
   b. update script {
   `"start": "node prg1.js",`
   `"dev": "nodemon prg1.js"`
   }
6. create prg1.js in folder
7. add `folderName/node_modules` in `.gitignore`

**"send"** - send function is used to return back content to the client, it may be HTML, JSON, HTML file, plain file, text file.
we can also add status code with status function, it can be chained with send function

## MAP

* this function is used to iterate any array, it must return new array

```js
array.map((item)=>{
   return
})

array.map((item)=>())
```

* In first syntax we have to use explicit return keyword whereas in syntax 2 does not require

```js
const {p1,p2,...rest} = product
log(rest)
```

* Exclude number of properties from any JSON object

## Search

* To search any item in JSON array we use find method, it will return `null` on unsuccessful or object on successful

```js
array.find((item)=>item.id===id);
```
