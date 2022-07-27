const nodemailer = require('nodemailer');


function createTransPorterObject() {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sk110tda@gmail.com',
            pass: 'wzikrbyxpquiohaz',
        }
    });
    return transporter;
}

function CreateMailObject(from, to, subject, text, attachments) {

    if (attachments) {
        const mailOptions = {

            from: from,
            to: to,
            subject: subject,
            text: text,
            attachments: attachments
        }
        return mailOptions;

    } else {
        const mailOptions = {

            from: from,
            to: to,
            subject: subject,
            text: text
        }
        return mailOptions;
    }
}


module.exports.sendMail = function (from, to, subject, text,attachments) {
    mailOptions = CreateMailObject(from, to, subject, text,attachments);
    createTransPorterObject().sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('Emal sent: ' + info.response);
        }

    });
}