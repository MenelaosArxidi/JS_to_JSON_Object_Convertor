const showLinkedObjPositions = require("./detect_link.js");

function jsSonCon(obj) {
    const obJS = {};
    const obJSon = JSON.parse(JSON.stringify(obJS));
    return Object.assign(obJSon, obj);
    //return obJSon;
};

function jsonConverter(obj) {
    
    const jSonObj = {};
    const linkedPositions = showLinkedObjPositions(obj)
    
    const allKeys = Object.keys(obj);
    const objValues = Object.values(obj);

    for (let i=0; i<allKeys.length; i++) {
        if (!linkedPositions.includes(i)) {
            jSonObj[allKeys[i]] = objValues[i]
            //jSonObj.allKeys[i] = JSON.parse(JSON.stringify(jSonObj.allKeys[i]))
        } else {

        }
        
        
    }
    const newjSonObj = JSON.parse(JSON.stringify(jSonObj))
    return newjSonObj;

}







const test = {
    someProp: "asdasd",
    randomFun() {
        return "test"
    },
    randObj: {
        anotherPro: "amazing"
    },

    numbers: [1, 2, 3, 5] 
};
test.randObj2 = test.randObj;


console.log(showLinkedObjPositions(test));

const peos = jsonConverter(test);
//peos.randObj2 = "skata"

console.log(peos);







//EVERYTHING BELOW THIS POINT ARE JUST FOR TESTING





/*console.log(test);
//console.log(jsSonCon(test));
JSON.parse(JSON.stringify(test.randObj));
//test.randObj.anotherPro = "super amazing";
console.log(test);
//console.log(jsSonCon(test));






const test2 = {
    str: '<script>var a = 0 > 1</script>',
    num: 3.1415,
    bool: true,
    nil: null,
    undef: undefined,
    obj: { foo: 'bar', undef: undefined},
    arr: [1, '2'],
    regexp: /^test?$/,
    date: new Date(),
    buffer: new Buffer('data'),
    set: new Set([1, 2, 3]),
    map: new Map([['a', 1],['b', 2]])
}

jSonObj = jsSonCon(test2);
simpleSon = JSON.parse(JSON.stringify(test2));
console.log(jSonObj);
console.log(test2);
console.log(simpleSon);
JSON.parse(JSON.stringify(jSonObj.obj));
console.log(jSonObj);

jsSonCon.toSource();*/