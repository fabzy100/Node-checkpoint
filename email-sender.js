// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'azfab54@gmail.com', // Replace with your email
        pass: 'arsenalo100' // Replace with your email password
    }
});

// Setup email data
let mailOptions = {
    from: 'azfab54@gmail.com', // sender address
    to: 'faborode22@gmail.com', // list of receivers
    subject: 'Hello from Node.js', // Subject line
    text: 'Hello World!', // plain text body
    html: '<b>Hello World!</b>' // html body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});