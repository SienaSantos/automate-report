var mssql = require('mssql');
var logger = require('../logger').Logger
require('dotenv').config();

//this is your mssql creds
console.log('process env ', process.env.MSDB_USER)
var sqlConfig = {
  user: process.env.MSDB_USER,
  password: process.env.MSDB_PASSWORD,
  server: process.env.MSDB_SERVER,    // don't add tcp & port number
  database: process.env.MSDB_NAME,
  options: {
    encrypt: true
  }
}


var generateLabCash = function(cb){
  console.log('generating lab cash');

  // this will connect to your database
  mssql.connect(sqlConfig, function (err) {
    var request = new mssql.Request();
      if (err) console.log('connectiong error: ', err);
      else {
        request.query(`select * from user1 where role = '3'`, function (err, result) {
          if (err) {
            var result = { 'status': 'failed',  'result': err }
            logger.error(`Generating Lab Cash: ${result.status} - ${result.result}`)
            cb(result)
            mssql.close();
          }
          else{
            var result = { 'status': 'success',  'result': result.recordset }
            logger.info(`Generating Lab Cash: ${result.status}`)
            cb(result);
            mssql.close();
          }
        });
      }
  });

}

module.exports = {
  generateLabCash: generateLabCash
}
