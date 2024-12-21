const{readFile,writeFile}=require('fs')
writeFile('./asyncfile/FILE.txt',"IN ASYNC TYPE WE USE CALLBACK FUNCTION THAT TELLS WHAT IS THER ERROR",{flag:'a'},(err,write)=>
{
    if(err)
    {
        console.log(err)
    }
    // a call back executes after the if
})
readFile('./asyncfile/FILE.txt','utf8',(err,read1)=>
{
    if(err)
    {
        console.log(err)
        return
    }
    console.log(read1)
})