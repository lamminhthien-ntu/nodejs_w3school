var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user : 'minhthienmap@gmail.com',
        pass : 'MinhThien2000a'
    }
});

var mailOptions = {
    from: 'minhthienmap@gmail.com',
    to: 'thien.lm.60cntt@ntu.edu.vn',
    subject: 'Sending Email using Node.js',
    text: 'That was simple'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
})