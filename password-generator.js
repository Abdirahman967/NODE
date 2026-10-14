// Task 4: generate a random password with the generate-password package
const generator = require("generate-password");

function generateRandomPassword() {
  return generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    strict: true, // at least one character from each enabled pool
  });
}

const password = generateRandomPassword();
console.log("Generated password:", password);
