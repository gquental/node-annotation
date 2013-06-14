/**
 *
 * @shouldBeImported();
 * @parse(
 *     {
 *      "hehe": "test",
 *      "foo": {
 *          "value": "bar"
 *      }
 *     }
 * );
 */
var ClassFoo = function() {

}

/**
 * @testing("test");
 */
ClassFoo.prototype.test = function() {}
