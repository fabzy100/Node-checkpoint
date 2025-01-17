// password-generator.js
const generatePassword = require('generate-password');

function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 10,
        numbers: true,
        uppercase: true,
        lowercase: true,
        symbols: true,
        excludeSimilarCharacters: true
    });
    console.log('Generated Password:', password);
}

generateRandomPassword();