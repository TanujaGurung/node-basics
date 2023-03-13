var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host:'smtp.gmail.com',
  secure:false,
  auth: {
    user: 'tanuja.gurung449@gmail.com',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'tanuja.gurung449@gmail.com',
  to: 'tanuja.gurung449@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});