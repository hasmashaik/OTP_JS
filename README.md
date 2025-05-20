OTP Generator (JavaScript)
This is a simple JavaScript function to generate a numeric One-Time Password (OTP) of any specified length.
How It Works
Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive).

Multiplying it by 10 gives a number between 0 and 9.999....

Math.floor() then rounds it down to the nearest whole number, resulting in an integer from 0 to 9.

The loop repeats this process for the given length, appending each digit to the OTP string.
Use Cases
User authentication

Password recovery

Secure short-term access codes

🔐 Note
This function generates a numeric OTP and is not cryptographically secure. For high-security applications, consider using more robust methods.
