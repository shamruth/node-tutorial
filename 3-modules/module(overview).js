//EVERY js file is a module
//to pass anything from one module to another module we use module.exports= {object we are passing}
//to acquire the passed value we use varial=require("./file name")
const welcome = (name) =>
{
    console.log(`WELCOME TO OUR WEBSITE ${name}`)//we have to use backticks to work with format specifier A.K.A interpolation in nodejs
}
welcome("priya")
// we are splitting the above program into modules