var fs = require('fs');

var FileReader = function() {

}

FileReader.prototype.read = function(path, callback) {
    fs.exists(path, function(exists) {
        if (exists) {
            fs.readFile(path, function(err, data) {
                if (err) {
                    callback(err, null);
                }

                callback(null, data.toString());
            });
        }
    });
}

module.exports = FileReader;