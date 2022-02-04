exports.add=(req,res)=>{
    res.status(200).send("Cache clear >>> ");
}


exports.findAll=(req,res,next)=>{
    const data=[{key1:23423,key2:"32423423dsfsdf"}]
    res.status(200).send(data);
    res.locals.data=data;
    return next();
}