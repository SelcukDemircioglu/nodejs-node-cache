# nodejs node-cache express rest api
 node js  node-cache  rest api

   [express](https://www.npmjs.com/package/express) 
   [body-parser](https://www.npmjs.com/package/body-parser) 
   [node-cache](https://www.npmjs.com/package/node-cache)  
   [nodemon](https://www.npmjs.com/package/nodemon)  
    
  <p aling="center" >
api settings  </p> 


```jsx

const express = require("express");
const bodyParser = require("body-parser");


 //service api 
const app = express();


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//http or https 
var http = require('http');

//create http  or https server
const httpServer = http.createServer(app);

app.get("/GetList", cache.get,controllers.findAll,cache.set(60)); //60 => seconds after delete cache

app.post("/Add",controllers.add,cache.clear);
  

!İMP ---------- src/cache.js--------------->
const get=(req, res, next)=>{
  const url = getUrlFromRequest(req)
  const content = cache.get(url)
  if (content) {
    return res.status(200).send(content)
  }
  return next()
}

const set=(duration)=>(req, res, next)=> {
  const url = getUrlFromRequest(req)
  cache.set(url, res.locals.data,duration)
}
We don't add next() in the set method because now the query is complete
----------------------------------------------

```

 <p aling="center" >
    According to the incoming request, it first looks at the cache, returns if any, otherwise it 
    continues to query and cache for 60 seconds with the cache.set(60) method at the end.
  </p>


 <div   >
    <img src="https://github.com/SelcukDemircioglu/nodejs-node-cache/blob/master/img/1.png">
    <img src="https://github.com/SelcukDemircioglu/nodejs-node-cache/blob/master/img/2.png">
    <img src="https://github.com/SelcukDemircioglu/nodejs-node-cache/blob/master/img/3.png">
    <img src="https://github.com/SelcukDemircioglu/nodejs-node-cache/blob/master/img/4.png">
    <img src="https://github.com/SelcukDemircioglu/nodejs-node-cache/blob/master/img/5.png">
    <img src="https://github.com/SelcukDemircioglu/nodejs-node-cache/blob/master/img/6.png">
  </div>

 [node-cache func models edit](https://dev.to/vigzmv/a-simple-cache-invalidation-strategy-part-2-4al)  