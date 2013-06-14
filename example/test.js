var annotation = require('./../index');

annotation(__dirname+'/testclass.js', function(commands) {
    console.log(commands);
});