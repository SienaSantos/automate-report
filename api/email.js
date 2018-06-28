var sendgrid = require('@sendgrid/mail')(process.env.SENDGRID_API_KEY);
var sgMail = require('sendgrid').mail;

var fs = require('fs')


module.exports = {

  sendEmailGeneral: function(email,subject, body){
    var file = fs.readFileSync('../automate-report/reports/labcash/data.xlsx');
    var base64File = new Buffer(file).toString('base64');
    // console.log('base64File ', base64File);
    console.log('sending email...')
    // const emailContent = {
    //   personalizations : [{
    //     to : [{
    //       email : email,
    //       name : 'Siena Santos'
    //     }]
    //   }],
    //   from : [{
    //     email : 'testing@siena.com',
    //     name : "Siena Testing"
    //   }],
    //   attachments : [{
    //     content : base64File,
    //     type : 'application/vnd.ms-excel',
    //     fileName : 'Lab Cash Sample.xlsx'
    //   }],
    //   html:     body
    // };
    // sendgrid
    //   .send(emailContent)
    //   .then((res)=>{
    //     console.log('email res ', res )
    //   })
    //   .catch((err)=>{
    //     console.log('email err ', err)
    //   })

    var request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON(),
    });

    sg.API(request, function(err, response) {
      console.log(response.statusCode);
      console.log(response.body);
      console.log(response.headers);
    });

    sendgrid.send({
      personalizations : [{
        to : [{
          email : email,
          name : 'Siena Santos'
        }]
      }],
      from : [{
        email : 'testing@siena.com',
        name : "Siena Testing"
      }],
      html:     body,
      attachments : [{
        content : base64File,
        type : 'application/vnd.ms-excel',
        fileName : 'Lab Cash Sample.xlsx'
      }]
    }, function(err, json) {
      if (err) {
        console.log(err);
        return { message: 'failed', data : err }
      } else {
        console.log(json);
        return { message: 'success', data : json }
      }
    });
  },

}
