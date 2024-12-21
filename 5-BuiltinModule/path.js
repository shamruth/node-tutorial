/* path module in node js is very useffull in identifiying the path of our application or any files or folder
this is important because we run our application in different enviroinment so it will be much more usefull to know those path*/
const path= require('path')
//console.log(path)  it gives all the methods that this built in module holds
console.log(path.sep)// returns an / this are used to seperate the path
const absolute_path=path.resolve(__dirname)
console.log(absolute_path)// return the location where the current folder exist with the directory name
/* let us create an subfloder inside a subfolder to store an file.txt*/
const filepath=path.join('sub1','sub22','file.txt')
console.log(filepath)
const basename=path.basename(filepath)//returns the ending location in the filepath
console.log(basename)
const abspath=path.resolve(__dirname,'node-tutorial','5-BuiltinModule','sub1','sub2','file.txt')
console.log(abspath)