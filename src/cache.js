const NodeCache = require('node-cache')

// stdTTL: time to live in seconds for every generated cache element.
const cache = new NodeCache({ stdTTL: 24*60*60 })

function getUrlFromRequest(req) {
  const url = req.protocol + '://' + req.headers.host + req.originalUrl
  return url
}

//duration time to live in seconds for every generated cache element if null  default time
const set=(duration)=>(req, res, next)=> {
  const url = getUrlFromRequest(req)
  cache.set(url, res.locals.data,duration)
}

const get=(req, res, next)=>{
  const url = getUrlFromRequest(req)
  const content = cache.get(url)
  if (content) {
    return res.status(200).send(content)
  }
  return next()
}

const clear=(req, res, next)=> {
    cache.keys(function(err, keys) {
        if (!err) {
             
            let resourceUrl = req.baseUrl;
            const resourceKeys = keys.filter(k => k.includes(resourceUrl));

            cache.del(resourceKeys);
        }
    });
    return next();
}

module.exports = { get, set,clear }