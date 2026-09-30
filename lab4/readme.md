## Express

1. create project folder
2. goto project and open terminal
3. execute 'npm init -y'
4. install 'mpm i nodemon -D'
5. open package.json
   a. change 'type:module'
   b. update script {
   "start" : "node prg1.js",
   "dev" : "nodemon prg1.js"
   }
6. create prg1.js in folder
7. aqdd folderName/node_modules in .gitignore



"send"  - send function is used to revert back content to the client , it maybe html , JSON , htmlfile , plainfile , textfile
    we can also add status code with status function , it can be chained with sendd function



   ## MAP
   - this function is used to itertate any array, it must return new array
   ```
   array.map((item)=>{
      return 
   })

   array.map((item)=>())
   ```
   - In first syntax we have to use explicit return keyword whereas in synatx 2 does not require



   ```
      const{p1,p2,...rest}=product ;
      log(rest) ;
   ```
      - Exclude number of properties from any JSON object


      ## Search
      -To search any item in json array we use find method , it will return null on unsuccessful or object on succesful
      ```
      array.find((item)=>item.id===id) ;
      ```
