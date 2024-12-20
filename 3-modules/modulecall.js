//use of ./ is must before specifiying the location
const usernames=require('./username')
const message=require('./welcome')
//collecting the information exported by different module

//console.log(usernames) before alternative exports being added
/*----------output-----------------
{
  user1: 'SURESH',
  user2: 'RAMESH',
  user3: 'SHAMRUTH',
  user4: 'SHARVESH'
}
  ------------------*/
message('ramu')//passing the new value to the welcome module
message(usernames.user1)//we use the respective object to access the value inside it
message(usernames.user2)
message(usernames.user3)
message(usernames.user4)

// console.log(usernames) after adding alternative module exports
/*-------------output-----------------
{
  user1: 'SURESH',
  user2: 'RAMESH',
  user3: 'SHAMRUTH',
  user4: 'SHARVESH',
  array: [ 'position 0', 'position 1' ],
  firstnum: { rnum1: 50, rnum2: 100 }
}
  */