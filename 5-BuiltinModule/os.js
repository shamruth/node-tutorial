const os=require('os')

//to gain info about user
const user=os.userInfo()
console.log(user)
//alternative
console.log(os.userInfo())

//method that returns the uptime of the system in seconds
console.log(`The total UPTIME OF SYSTEM IS ${os.uptime()} SECONDS`)
//just for better understanding
console.log(`UPTIME IN MINUTES ${(os.uptime()/60)}`)
console.log(`UPTIME IN HOURS ${((os.uptime()/60)/60)}`)
console.log(`UPTIME IN DAYS ${(((os.uptime()/60)/60))/24}`)

//other methods for an over view
const osinfodict =
{
    name:os.type(),//returns os name
    release:os.release(),//returns the release version
    totalMem:os.totalmem(),//returns total available memory
    freemem:os.freemem(),//returns available free memory
}
console.log(osinfodict)