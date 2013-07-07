#node-annotation - 0.1

This is the first early release for this library. It's purpose is to add annotations support to JavaScript, were you will be able to relate
commands to your class, method or property, based on the comments of your file.

##How it Works

To the lib work properly in this version, you will need to write your comments like the example below:

```javascript
/**
 * annotationName(annotationValue);
 */
```

Each annotation should follow this structure, where a name must be defined (it can be any name, unless isn't a reserved one). Also
there is some predefined annotationsName that will automatically insert annotations in one of the namespaces of the library.

Those predefined names are: **Class**, **Method** and **Property**, and as you can imagine, it is used to define what annotations belongs
to the class, properties and so on.

*It's important to notice the presence of (**;**) ... this is needed to split all the annotations correctly, even when there is just one.*

###Annotation Value

The annotation value should be a valid type of JavaScript or a JSON object.

##Example Usage

```javascript
var annotation = require('annotation');

annotation(fullFilePath, function(AnnotationReader) {
    //get annotations related to the class
    console.log(AnnotationReader.getClassAnnotations());

    //get annotations related to the method test
    console.log(AnnotationReader.getMethodAnnotations('test'));

    //get annotations related to the property test
    console.log(AnnotationReader.getPropertyAnnotations('test'));
});
```

Example of the commented file:

```javascript
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
```