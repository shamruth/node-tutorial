const express=require('express');
const app=express();
app.use(express.json());
const get_json={
    "NAME":"SHAMRUTH"
}
const post_json=[];

app.post('/hii',(req,res)=>
{
    const data=req.body;
    console.log(data);
    post_json.push(data);
    res.send("TATA")
    console.log(post_json);
})
app.get('/',(req,res)=>
{
   // res.end(get_json);//if we send data as a chunck an error will be produced 
   res.send(JSON.stringify(get_json));// we send the data as string converted json file
})
app.listen(5050,()=>console.log("http://localhost:5050"))