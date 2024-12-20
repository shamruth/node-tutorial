const numberarray=require('./numbers')
const number1=numberarray.array[0]//here we call the variable array using the object numberarray
const number2=numberarray.array[1]
function addition(num1,num2)
{
    console.log(`Sum of the value is ${num1+num2}`)
}
addition(number1,number2)
// we didn't export anything