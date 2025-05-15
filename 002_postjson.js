const express=require('express');
const app=express();
app.use(express.json());

const post_json=[];

app.post('/INSERT',(req,res)=>
{
    const data=req.body;//JSON.parse(req.body) we are not required to use this as we already used the middleware express.json() 
    post_json.push(data);
    res.end(`THE DATA HAS BEEN INSERTED TO THE ARRAY`)
    console.log(post_json);
});

app.get('/GETALL',(req,res)=>
{
   // I FOUND THAT IN POST MAN IF I KEEP ANY ONE OF THE JSON OBJECT WITHOUT COMMENTING THE OUTPUT GET DISPLAYED NEED TO ASK WHY?!!!
   // res.end(get_json);//if we send data as a chunck an error will be produced
   res.header('Content-Type','application/json') 
   res.json(post_json);// we send the data as string converted json file
   
});
app.get('/GETFOR/:id',(req,res)=>
{
    const USERID = parseInt(req.params.id);
    for(i=0;i<post_json.length;i++)
    {
        if(post_json[i].USERID===USERID)
        {
            res.json(post_json[i]);
        }
       /* else
            res.end("NO DATA FOUND WITH SPECIFIED USERID")*/ //USING ELSE THROWS ERROR THAT IS SERVER BEING CALLEDOFF FOR NUMBER OFF TIME WHEN VALUE IS NOT THERE
    }
    console.log(post_json);
})
// "/:" act as a place holder for the id passing is the url now :id is the NAMESPACE TO request parameter passed in the url
app.put('/UPDATEFOR/:id',(req,res)=>
{
    const USERID = parseInt(req.params.id);//yesterday i have been using string as id for the whole time but no i need to convert the parameter to integer since i will be passing integer as paramater
    const {USERNAME,PASSWORD}=req.body; 
    post_json.forEach(element => {
            if(element.USERID===USERID)
            {
                if(USERNAME)
                {
                    element.USERNAME=USERNAME;
                }
                if(PASSWORD)
                {
                    element.PASSWORD=PASSWORD;
                }
            }
        });
        res.end(`UPDATED VALUE FOR USERID:${USERID}  \n  
            NEW USERNAME ${USERNAME} \n
            NEW PASSWORD ${PASSWORD}`);
    console.log(post_json);
    
});
//IF PATCH IS ALONE USED TO UPDATE SPECIFIC VALUE DOES MY LOGIC TO PUT IS WRONG?!! NEED TO VERIFY
app.patch('/CHANGEFOR/:id',(req,res)=>
{
    const USERID=parseInt(req.params.id);
    const{USERNAME,PASSWORD}=req.body;
    post_json.forEach((dict)=>
    {
        if(dict.USERID===USERID)
        {
            if(USERNAME)
            {
                dict.USERNAME=USERNAME;
            }
            else if(PASSWORD)
            {
                dict.PASSWORD=PASSWORD;
            }
        }
    })
    res.end("VALUE PATCHED SUCCESSFULLY");
    console.log(post_json);
})
app.delete('/DELETEFOR/:id',(req,res)=>
{
    const USERID=parseInt(req.params.id);
    for (i=0;i<post_json.length;i++)
    {
        if(post_json[i].USERID===USERID)
        {
            post_json.splice(i,1);//splice takes two values
        }
    }
    console.log(post_json);
    res.end("VALUE DELETED");
});

app.listen(5050,()=>console.log("http://localhost:5050"));

/* DOUBTS ARRISED
1.res.end(get_json); //if we send data as a chunck an error will be produced
    NEED TO USE res.json() AUTOMATICALLY CONVERTS CHUNK DATA INTO BUFFER OF JSON

 2.AN ERROR EXIST HERE I DUNNO WHAT TO DO WHEN I CALL IN GET METHOD AN ERROR HAS BEEN THROWN HERE
    IS THIS ERROR OCCURS DUE TO USAGE OF SAME ENDPOINTS FOR ALL METHOD?
    
   // it shows output once i use post then i use get or cant say clearly but get shows output some time in 
   // I FOUND THAT IN POST MAN IF I KEEP ANY ONE OF THE JSON OBJECT WITHOUT COMMENTING THE OUTPUT GET DISPLAYED NEED TO ASK WHY?!!!

 if(req.url==='/:id')
    {
        const USERID=parseInt(Request.params.id)
        {
            for(i=0;i<post_json.length;i++)
            {
                if(post_json[i].USERID===USERID)
                {
                    res.json(post_json[i]);
                }
                else
                {
                    res.end("NO USERS IS SPECIFIED IN THE USERID");
                }
            }
        }
    }
    else
    {
        res.json(post_json);
    }

*/
