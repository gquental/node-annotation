var fs = require('fs');

/**
 * Class responsible for reading the contents of a file in the system
 * and retrieving it's content
 *
 * @constructor
 */
var FileReader = function() {

}

/**
 * Function that will retrieve the content of a choosen path and return it's
 * contents through a callback
 *
 * @param {string} path
 * @param {function} callback
 */
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