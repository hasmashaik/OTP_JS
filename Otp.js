function generateOtp(length){
let otp=''
for(let i=0;i<=length-1;i++){
    otp +=Math.floor(Math.random() * 10)/* Math.floor(): This function rounds the number down to the nearest whole number. So, if the result of Math.random() * 10 is 8.76, Math.floor() will turn it into 8.*/
}                                       /* Math.random(): This generates a random decimal number between 0 and 1. For example, it could be something like 0.234 or 0.876.*/
return otp;
}

console.log(generateOtp(5))