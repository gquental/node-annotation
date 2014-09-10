var AnnotationParser = function() {

}

AnnotationParser.prototype.parse = function(dataString, callback) {
    var comments = this.matchComments(dataString);

    callback(comments);
}

AnnotationParser.prototype.matchComments = function(dataString) {
    var regex   = /\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+/g;
    var matches = [];

    while (match = this.getMatches(regex, dataString)) {
        if (match) {
            matches.push(match[0].replace(/([\r\n\s])/g, ''));
        }
    }

    var comments = this.parseComments(matches);

    return comments;
}

AnnotationParser.prototype.getMatches = function(regex, dataString) {
    var result = regex.exec(dataString);

    if (result) {
        return result;
    }

    return false;
}

AnnotationParser.prototype.parseComments = function(comments) {
    var commentList = [];

    for (var i in comments) {
        var subComments = comments[i].split(';');
        for (var j in subComments) {
            var regex = /@(.*)\((.*)\)/g;

            while (match = this.getMatches(regex, subComments[j])) {
                if (match) {
                    var value = (match[2]) ? match[2] : false;

                    var obj = {
                        "key": match[1],
                        "value": JSON.parse(value)
                    };

                    commentList.push(obj);
                }
            }
        }
    }

    return commentList;
}

module.exports = AnnotationParser;