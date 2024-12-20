const welcome = (name) =>
    {
        console.log(`WELCOME TO OUR WEBSITE ${name}`)//we have to use backticks to work with format specifier A.K.A interpolation in nodejs
    }
module.exports=welcome

//exporting the whole function