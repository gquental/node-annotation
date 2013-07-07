var annotation = require('./../index');

annotation(__dirname+'/testclass.js', function(AnnotationReader) {
    console.log(AnnotationReader.getClassAnnotations());

    console.log(AnnotationReader.getMethodAnnotations('test'));

    console.log(AnnotationReader.getPropertyAnnotations('test'));
});