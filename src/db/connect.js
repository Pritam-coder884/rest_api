const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://sibu1:2001@studentregistrationclus.6mgazyf.mongodb.net/?retryWrites=true&w=majority",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`Mongodb Database is connected to the cluster in mongo db atlas`);
}).catch((err)=>{
    console.log("No connection");
})
