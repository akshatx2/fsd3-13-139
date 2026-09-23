localhost - URL
127.0.0.1 - IP address

ctrl+c - stop the server

every request from client has a pair of{request , response}

## Node Package Manager (NPM)
used to install , run , uninstall any program/project and package 
-npm install <packageName>
-npm uninstall<packageName>


to use npm, the project must be npm project ,
to create npm project  we can use 

- npm init -y
- it creates a package.json file automatically
    package.json holds all the information related to install 
    packages from npm
- it also creates a folder node_modules automatically
- node_modules holds the package/library files
- generally we ignore the node_modules by . gitignore


Nodemon - it restart the server automatically when file changes to install 
. npm i nodemon- D
Note: -D flag will install this package as developer dependency 
- to execute any program, update 
the package.json file then start the server as 
<b>npm rundev</b>
- start -> it wi;; execute teh app on deployment 
- dev -> it will start server in development phase 
- res : it will return contents (json/html/plain) to the user/client 
- req : it will retrieve the information from client to the server 
- server send also statusCodes to the client , that indicats teh error/success message
## Status Codes
- 200 -> ok
- 201 -> Created
- 400 -> Bad request 
- 401 -> Unauthorized
- 403 -> forbidden 
- 404 -> Not found
-500 -> Internal server error

## Content Type
    - text/plain
    - text/html
    - application/json 
    - text/css 

the content type and status code can be send back to client by two ways

1. res.writeHead
2. res.setHeader
3. res.statusCode


## Response as html content
1. Res.end(any html content/tag)
2. html file 
    - Read by createReadStream
    - Pipe with res

## JSON(javascript object notation)
   - server returns data only not html content beacuse html content will be written by frontend developer the data is in json format 
    - json always stores data in key-value pairs enclosed by {} array can be stored by [] one pair of {} will represent one object and its property will be seperated by ','

    example 
    {
        id: 1 ,
        name: 'Mobile' ,
        priced : 24000
        rating: 4.5 ,
        review: 200 ,
    }



    ## Headers 
    - Headers are used to tell clients the type of data send by the server it maybe html file,json file, plain text file , css file any tokens(for login)
    1. text/plain -> text file
    2. text/html -> html contents/file
    3. application/json -> json contents/file
    4. text?css -> stylesheet 
    5. application/form-data -> for uploading file
    6.application/auth ->





## For GET
- No parameter passed to the srver when we recieve all items 


## For POST
- To add record , we pass the value from body section in JSON format of api tester  

## For DELETE
- To delete any product we pass the parameter that is id of the product from url

## For UPDATE (put/patch)
- we pass ID from url and data to update from body  
