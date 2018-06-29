require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var fs = require('fs')
console.log('env ', process.env.SENDGRID_API_KEY);


module.exports = {

  sendEmailGeneral: function(email,subject, body, cb){
    console.log('processing email...please wait')

    var file = fs.readFileSync('../automate-report/reports/labcash/data.xlsx');
    var base64File = new Buffer(file).toString('base64');

    const msg = {
      personalizations:[{
        to : [{ email: 'sienasantos18@gmail.com', name: 'Siena Santos'}]
      }],
      from: 'lordsmobile@siena.com',
      subject: subject,
      text: 'and easy to do anywhere, even with Node.js',
      html: body,
      attachments : [{
         content : base64File,
         type : 'application/vnd.ms-excel',
         fileName : 'Lab Cash Sample.xlsx'
       }]
    };

    sgMail.send(msg, function(err, response){
      if(err) console.log('err' ,err)
      cb(response)
    });

  },

}
