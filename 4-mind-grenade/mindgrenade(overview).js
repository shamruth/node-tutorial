/*
mind grenade is nothing but when we call an function or( execute an function) 
in an module we do not need to export those function we can automatically use the function using require in the module where we needed it*/
const number1=100
const number2=100
function addition(num1,num2)
{
    console.log(`Sum of the value is ${num1+num2}`)
}
addition(number1,number2)