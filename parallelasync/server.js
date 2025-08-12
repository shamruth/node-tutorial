const express=require('express');
app=express();
app.use(express.json());
datacontroller=require("./controller/data_fetch_cont");
app.get('/parallelasync',async(req,res)=>
{
    try
    {
        [userprofile,continuewatching,recomendation]=await Promise.all([datacontroller.fetchUserProfile(),datacontroller.fetchContinueWatchin(),datacontroller.fetchRecomendation()]);
        res.json({userprofile,continuewatching,recomendation})
    }
    catch(error)
    {
        console.error(error);
    }
})
app.listen(3000,()=>console.log("http://localhost:3000/parallelasync"));