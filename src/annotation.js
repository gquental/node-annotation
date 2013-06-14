var FileReader = require('./Reader/FileReader.js');
var Annotation = require('./Parser/Annotation.js');

var fileReader = new FileReader();
var annotationParser = new Annotation();

var annotation = function(path, callback) {

    fileReader.read(path, function(err, result) {
        if (!err) {
            annotationParser.parse(result, function(commands) {
                callback(commands);
            });
        }
    });
}

module.exports = annotation;