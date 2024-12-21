const{readFile,writeFile}=require('fs')
console.log("starting to write")
writeFile('./asyncfile/FILE.txt',"IN ASYNC TYPE WE USE CALLBACK FUNCTION THAT TELLS WHAT IS THER ERROR",{flag:'a'},(err,write)=>
{
    if(err)
    {
        console.log(err)
    }
    //call back of read from the file
    console.log("starting to read")
    readFile('./asyncfile/FILE.txt','utf8',(err,read1)=>
        {
            if(err)
            {
                console.log(err)
                return
            }
            //console.log(read1)
            console.log("starting to read 2")
            readFile('./asyncfile/FILE.txt','utf8',(err,read1)=>
                {
                    if(err)
                    {
                        console.log(err)
                        return
                    }
                    //console.log(read1)
                })
                console.log("COMPLETED")
        })
        console.log("OVERALL COMPLETION")
})
console.log("task asssigned completed")
