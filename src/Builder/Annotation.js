var AnnotationBuilder = function(comments) {
    this.ignoredGlobalNamespaces = [
        'abstract', 'access', 'alias', 'augments', 'author', 'borrows',
        'callback', 'classdesc', 'constant', 'constructor', 'constructs',
        'copyright', 'default', 'deprecated', 'desc', 'enum', 'event',
        'example', 'exports', 'external', 'file', 'fires', 'global',
        'ignore', 'inner', 'instance', 'kind', 'lends', 'license',
        'link', 'member', 'memberof', 'method', 'mixes', 'mixin',
        'module', 'name', 'namespace', 'param', 'private', 'property',
        'protected', 'public', 'readonly', 'requires', 'returns', 'see',
        'since', 'static', 'summary', 'this', 'throws', 'todo', 'tutorial',
        'type', 'typedef', 'variation', 'version'
    ];

    this.comments = {
        "class": [],
        "methods": {},
        "properties": {},
        "other": []
    };

    this.commentArrayReference = this.comments.other;

    this.buildComments(comments);

    return this.comments;
}

AnnotationBuilder.prototype.buildComments = function(comments) {
    for (var i in comments) {
        var comment = comments[i];

        if (this.ignoredGlobalNamespaces.indexOf(comment.key) > -1) {
            continue;
        }

        if (comment.key == 'Class') {
            this.commentArrayReference = this.comments.class;
            continue;
        }

        if (comment.key == "Method") {
            this.createMethod(comment.value);
            continue;
        }

        if (comment.key == "Property") {
            this.createProperty(comment.value);
            continue;
        }

        this.commentArrayReference.push(comment);
    }
}

AnnotationBuilder.prototype.createMethod = function(name) {
    if (!this.comments.methods[name]) {
        this.comments.methods[name] = [];
    }

    this.commentArrayReference = this.comments.methods[name];
}

AnnotationBuilder.prototype.createProperty = function(name) {
    if (!this.comments.properties[name]) {
        this.comments.properties[name] = [];
    }

    this.commentArrayReference = this.comments.properties[name];
}

module.exports = AnnotationBuilder;