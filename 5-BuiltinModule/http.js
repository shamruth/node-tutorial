const http=require('http')
/*const server=http.createServer(
    (req,res)=>{
        res.write("WELCOME ODIMAAGAA")
        res.end()
    })*/
/*considering the above approach we directly used createServer() method with
two argument request,response where when the we listen to the server it only sends
the write response ("WELCOME ODIMAAGAA") we must end the response only then it will be displayed*/


/*const server=http.createServer((req,res)=>
{
    if(req.url==='/')//req.url is used to denote where the user goes in website '/' means homepage
    {
        res.write("WELCOME TO HOME PAGE")
    }
    if(req.url==='/about')
    {
        res.write("WELCOME TO ABOUT PAGE")
    }
    res.end()
})*/
/*USING HTML CODE*/
const server=http.createServer((req,res)=>
{
    if(req.url=="/")
    {
        res.write(`
            <h1>WELCOME TO HOME PAGE</h1>
            <a href="/about">about</a>
            `)
    }
    else if(req.url=='/about')
    {
        res.end(`
            <h1>WELCOME TO ABOUT PAGE</h1>
            <p>THIS IS ABOUT US WE DELIVER MORE THAN YOU EXCEPT</p>
            <a href='/'>goto home</a>`)
    }
    res.end//we use this end for homepage
})
server.listen(500)
//visit server at http://localhost:5000/