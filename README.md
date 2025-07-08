# OTP Generator in JavaScript

This is a simple JavaScript function to generate numeric OTPs (One-Time Passwords) of any length.

## 📂 How to Use

1. Clone or download this repository.
2. Open the `index.js` file (or wherever you put the code).
3. Run it using Node.js or include it in your project.

## 📄 Example Code

```javascript
function generateOtp(length) {
  let otp = '';
  for (let i = 0; i <= length - 1; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}

console.log(generateOtp(5)); // Example output: 48291
💡 How It Works
Math.random() generates a random decimal between 0 and 1.

Math.random() * 10 gives a number between 0 and 9.999...

Math.floor() rounds it down to get a digit between 0 and 9.

The loop repeats for the given length to build the OTP.

 Requirements
Node.js installed (if running in terminal)
