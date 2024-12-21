//In fs module there are two types we see synchronous here
// we pass two function that are readFileSynch and writeFileSync that perform read and write operations
const{readFileSync,writeFileSync}=require('fs')
const read_first=readFileSync('./syncfiles/read1.txt','utf8')//the second one is encodeing and default is hesadecimal buffer
const read_second=readFileSync('./syncfiles/read2.txt','utf8')
console.log(read_first)
console.log(read_second)
writeFileSync
(
    "./syncfiles/writefile.txt","THIS IS THE WRITEFILE"
)// it write the value if file already exist it over write it
writeFileSync
(
    "./syncfiles/writefileappend.txt",`THIS IS THE WRITEFILE! ${read_first} ${read_second}`,{flag:'a'}
)//we use flag 'a' to append the file content if file already exist