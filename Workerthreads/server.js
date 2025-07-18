const express=require('express');
const app=express();
const {Worker}=require('worker_threads');

let counter=1;

setInterval(()=>{
    counter++
    console.log(`every 1 second counter updates ${counter}`)
}
,1000);
app.get('/main',(req,res)=>
{
    setTimeout(()=>
    {
        res.send(`website loads with the delay of 2 seconds:${counter}`)
    },2000)
    
})

app.get('/heavy',(req,res)=>
{
    const worker=new Worker('./worker.js')
    worker.on('message',(data)=>
    {
        res.send(data);
    })
})
app.listen(3030,()=>
{
    console.log(`server is running in http://localhost:3030`)
})