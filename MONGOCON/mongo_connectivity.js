require("dotenv").config();// as i created an .env file specified with my ATLASURI and port
const mongoose=require('mongoose');// used to make connection to the mongodb 
const express=require('express');
const app=express();
app.use(express.json());
const port=process.env.PORT //getting the port name specified in my .env file
mongoose.connect(process.env.ATLAS_URI/*connecting to the db using atlas specified in .env*/).then(()=>console.log("CONNECTED TO DB TRAINING")).catch((ERR)=>console.log("ERROR CONNECTION",ERR));
const userschema= new mongoose.Schema({
  /*USERID:{
    type:Number,
    required:true,
  }
    this is the userid */
  _id:{
    type:Number,
    required:true,
  },
  USERNAME:{
    type:String,
    required:true,
  },
  PASSWORD:{
    type:String,
    required:true,
  },
  });

const usermodel=mongoose.model("usermodel",userschema);

app.post('/INSERTONE',(req,res)=>
{
  const data=req.body;
  usermodel.create(data)
  .then((added_data)=>
  {
    console.log(`INSERTED DATA : ${added_data}`)
    res.end("DATA INSERTED")
  })
  .catch((err)=>
  {
      console.log(`error arrised: \n ${err}`)
  });
  
});

app.post('/INSERTMANY',(req,res)=>
{
  const data=req.body;
  usermodel.insertMany(data)
  .then((added_data)=>
  {
    console.log(`INSERTED DATA : ${added_data}`)
    res.end("DATA INSERTED")
  })
  .catch((err)=>
  {
      console.log(`error arrised: \n ${err}`)
  });
  
});

app.get('/VIEWALL/',(req,res)=>
{
  usermodel.find()
  .then((all_data)=>
    {
      res.json(all_data)
    })
  .catch((err)=>
    {
      console.log(`ERROR: \n ${err}`)
    });
})

app.get('/VIEWONE/:id',(req,res)=>
{
  const uid=parseInt(req.params.id);
  /*
  usermodel.findOne({USERID:uid}).then((specifed_data)=>res.json(specifed_data)).catch((err)=>console.log(`ERROR:\n${err}`));
  findone is used as mongodb i need to get the detail of s=the specified user using their USERID not id specified by the mongodb
  */
  usermodel.findById(uid)
  .then((specifed_data)=>
    {
      res.json(specifed_data);
    })
  .catch((err)=>
    {
      console.log(`ERROR:\n${err}`);
      res.end("ERROR ARRISED");
    })

});

app.delete('/DELETEONE/:id',(req,res)=>
{
  const uid=parseInt(req.params.id);
  usermodel.findByIdAndDelete(uid)
  .then((deleted_data)=>
  {
    console.log(deleted_data);
    res.end("DATA DELETED")
  })
  .catch((err)=>
  {
    console.log(err);
    res.end(`AN ERROR ARRISED VERIFY CONSOLE`);
  })
});

app.delete('/DELETEALL',(req,res)=>
{
  const uid=parseInt(req.params.id);
  usermodel.deleteMany({})/*passing empty object to delete all*/
  .then((deleted_data)=>
  {
    console.log(deleted_data);
    res.end("DATA DELETED")
  })
  .catch((err)=>
  {
    console.log(err);
    res.end(`AN ERROR ARRISED VERIFY CONSOLE`);
  })
});

app.put('/UPDATE/:id',(req,res)=>
{
  const uid=parseInt(req.params.id);
  const {USERNAME,PASSWORD}=req.body;
  usermodel.findByIdAndUpdate(uid,
    {$set:{USERNAME:USERNAME,PASSWORD:PASSWORD}}
  )
  .then((updated_data)=>
  {
    console.log(`UPDATED DATA:${updated_data}`);
    res.end("DATA UPDATED");
  })
  .catch((err)=>
  {
    console.log(`ERROR:\n ${err}`);
  })
  
})
app.listen(port,()=>
{
  console.log(`http://localhost:${port}`);
});
