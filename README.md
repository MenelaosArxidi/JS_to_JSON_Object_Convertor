## JS to JSON Object Convertor is a tool for converting a javascript object to a JSON object without losing any information.


 [script.js](https://github.com/MenelaosArxidi/JS_to_JSON_Object_Convertor/blob/main/detect_link.js) contains the final function `jsonConverter` witch makes the convertion from the javascript object, given as an argument, to the JSON object that will be returned.


 [detect_link.js](https://github.com/MenelaosArxidi/JS_to_JSON_Object_Convertor/blob/main/script.js) contains functions that helps `jsonConverter` to work propertly. More specific the exported function `showLinkedObjPositions` detects the linked objects inside the main javascript object and returns their position in order.
 The positions of the linked elemets are needed for `jsonConverter` to know witch objects should handled diffrently than the rest not linked objects.