var fs = require('fs');

// next we'll want make our Logger object available
// to whatever file references it.
var Logger = exports.Logger = {};


// Create 3 sets of write streams for the 3 levels of logging we wish to do
// every time we get an error we'll append to our error streams, any debug message
// to our debug stream etc...

var infoStream, errorStream, debugStream;

//

// this functions checks if log file exists, else create new one

var createInfoLog = function (){
  fs.exists('./logs/info.txt', function(exists) {
    if (exists) {
      console.log('exists');
      infoStream = fs.readFile('logs/info.txt');
    } else {
      console.log('not exist');
      infoStream = fs.createWriteStream('logs/info.txt');
    }
  });
}



var createErrorLog = function (){
  fs.exists('./logs/error.txt', function(exists) {
    if (exists) {
      console.log('exists');
      errorStream = fs.readFile('logs/error.txt');
    } else {
      console.log('not exist');
      errorStream = fs.createWriteStream('logs/error.txt');
    }
  });
}

var createDebugLog = function (){
  fs.exists('./logs/debug.txt', function(exists) {
    if (exists) {
      console.log('exists');
      debugStream = fs.readFile('logs/debug.txt');
    } else {
      console.log('not exist');
      debugStream = fs.createWriteStream('logs/debug.txt');
    }
  });
}


createInfoLog()
createDebugLog()
createErrorLog()

// Finally we create 3 different functions
// each of which appends our given messages to
// their own log files along with the current date as an
// iso string and a \n newline character
Logger.info = function(msg) {
  var message = new Date().toISOString() + " : " + msg + "\n\n";
  infoStream.write(message);
};

Logger.debug = function(msg) {
  var message = new Date().toISOString() + " : " + msg + "\n\n";
  debugStream.write(message);
};

Logger.error = function(msg) {
  var message = new Date().toISOString() + " : " + msg + "\n\n";
  errorStream.write(message);
};
