var Annotation = function() {

}

Annotation.prototype.parse = function(dataString, callback) {
    var commands = this.matchComments(dataString);

    callback(commands);
}

Annotation.prototype.matchComments = function(dataString) {
    var regex   = /\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+/g;
    var matches = [];

    while (match = this.getMatches(regex, dataString)) {
        matches.push(match[0].replace(/(\*|[\r\n\s])/g, ''));
    }

    var commands = this.parseCommands(matches);

    return commands;
}

Annotation.prototype.getMatches = function(regex, dataString) {
    var result = regex.exec(dataString);

    if (result) {
        return result;
    }

    return false;
}

Annotation.prototype.parseCommands = function(commands) {
    var commandList = [];

    for (var i in commands) {
        var subCommands = commands[i].split(';');
        for (var j in subCommands) {
            var regex = /@(.*)\((.*)\)/g;

            while (match = this.getMatches(regex, subCommands[j])) {
               var value = (match[2]) ? match[2] : false;

               var obj = JSON.parse('{"'+match[1]+'":'+value+'}');

               commandList.push(obj);
            }
        }
    }

    return commandList;
}

module.exports = Annotation;