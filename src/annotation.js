var AnnotationReader = require('./Reader/Annotation.js');
var AnnotationParser = require('./Parser/Annotation.js');
var FileReader       = require('./Reader/File.js');

var fileReader = new FileReader();
var annotationParser = new AnnotationParser();

var annotation = function(path, callback) {

    fileReader.read(path, function(err, result) {
        if (err) {
            console.log(err);
        }

        annotationParser.parse(result, function(comments) {
            callback(new AnnotationReader(comments));
        });
    });
}

module.exports = annotation;