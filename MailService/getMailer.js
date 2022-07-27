//require file mail');

const mailer = require('./mailer.js');
mailer.sendMail('Sk110tda@gmail.com', 'Sk101tda@gmail.com', 'NO Attachments', 'Text Here',null);
let attachments = [
    {
        filename: 'logo.png',
        path: './logo.png'
    }   
]
mailer.sendMail('Sk110tda@gmail.com', 'Sk101tda@gmail.com', 'Yes Attachments', 'Text Here',attachments);