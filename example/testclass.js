/**
 * @Class();
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
    /**
     * @Property("test");
     * @test("test");
     * @type {string}
     */
    this.name = 'test';
}

/**
 * @Method("test");
 * @testing("test");
 */
ClassFoo.prototype.test = function() {}
