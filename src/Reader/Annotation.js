var AnnotationReader = function() {
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

    this.ignoredLocalNamespaces = [
        'Class', 'Method', 'Property'
    ];
}

AnnotationReader.prototype.parse = function() {

}

module.exports = AnnotationReader;
