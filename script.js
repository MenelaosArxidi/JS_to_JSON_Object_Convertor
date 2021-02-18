const showLinkedObjPositions = require("./detect_link.js");

function jsonConverter(obj) {
    
    const jSonObj = {};
    const linkedPositions = showLinkedObjPositions(obj)
    
    const allKeys = Object.keys(obj);
    const objValues = Object.values(obj);

    const linkedObjectJSon = JSON.parse(JSON.stringify(obj[allKeys[linkedPositions[0]]]));

    for (let i=0; i<allKeys.length; i++) {
        jSonObj[allKeys[i]] = objValues[i];
        if (!linkedPositions.includes(i)) {
            jSonObj[allKeys[i]] = JSON.parse(JSON.stringify(obj[allKeys[i]]));
        } else {
            jSonObj[allKeys[i]] = linkedObjectJSon;
        }    
    }
    return jSonObj;
}

//EVERYTHING BELOW THIS POINT ARE JUST FOR TESTING





const test = {
    someProp: "asdasd",
    /*randomFun() {
        return "test"
    },*/
    randObj: {
        anotherPro: "amazing"
    },

    numbers: [1, 2, 3, 5] 
};
test.randObj2 = test.randObj;


const test2 = {
    str: '<script>var a = 0 > 1</script>',
    num: 3.1415,
    bool: true,
    //nil: null,
    //undef: undefined,
    obj: { foo: 'bar'/*, undef: undefined*/},
    arr: [1, '2'],
    regexp: /^test?$/,
    date: new Date(),
    buffer: new Buffer('data'),
    set: new Set([1, 2, 3]),
    map: new Map([['a', 1],['b', 2]])
}
test2.obj2 = test2.obj;

console.log(test2);
const wrongtest2 = JSON.parse(JSON.stringify(test2));
console.log(wrongtest2);

console.log(showLinkedObjPositions(test2));

const peos = jsonConverter(test2);
console.log(peos);
//peos.randObj2.anotherPro = "even more amazing"
peos.obj2.foo = "happens";
wrongtest2.obj2.foo = "happens";
console.log(peos);
console.log(wrongtest2);














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