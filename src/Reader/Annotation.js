var AnnotationBuilder = require('./../Builder/Annotation');

var AnnotationReader = function(comments) {
    this.comments = new AnnotationBuilder(comments);
}

AnnotationReader.prototype.getClassAnnotations = function() {
    return [].concat(this.comments.class);
}

AnnotationReader.prototype.getMethodAnnotations = function(name) {
    if (!this.comments.methods[name]) {
        throw new Error('The method ' + name + ' was not found between the comments');
    }

    return [].concat(this.comments.methods[name]);
}

AnnotationReader.prototype.getPropertyAnnotations = function(name) {
    if (!this.comments.properties[name]) {
        throw new Error('The property ' + name + ' was not found between the comments');
    }

    return [].concat(this.comments.properties[name]);
}

module.exports = AnnotationReader;
