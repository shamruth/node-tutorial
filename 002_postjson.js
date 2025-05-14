const express=require('express');
const app=express();
app.use(express.json());

const post_json=[];

app.post('/',(req,res)=>
{
    const data=req.body;//JSON.parse(req.body) we are not required to use this as we already used the middleware express.json() 
    post_json.push(data);
    res.end(`THE DATA HAS BEEN INSERTED TO THE ARRAY`)
    console.log(post_json);
});

app.get('/',(req,res)=>
{
    /*AN ERROR EXIST HERE I DUNNO WHAT TO DO WHEN I CALL IN GET METHOD AN ERROR HAS BEEN THROWN HERE
    IS THIS ERROR OCCURS DUE TO USAGE OF SAME ENDPOINTS FOR ALL METHOD?
    */
   // it shows output once i use post then i use get or cant say clearly but get shows output some time in 
   // I FOUND THAT IN POST MAN IF I KEEP ANY ONE OF THE JSON OBJECT WITHOUT COMMENTING THE OUTPUT GET DISPLAYED NEED TO ASK WHY?!!!
   // res.end(get_json);//if we send data as a chunck an error will be produced
   res.header('Content-Type','application/json') 
   res.json(post_json);// we send the data as string converted json file
   
});
// "/:" act as a place holder for the id passing is the url now :id is the NAMESPACE TO request parameter passed in the url
app.put('/:id',(req,res)=>
{
    const USERID = req.params.id;
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

app.delete('/:id',(req,res)=>
{
    const USERID=req.params.id;
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
