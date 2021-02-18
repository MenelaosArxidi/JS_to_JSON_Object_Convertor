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
const wrongTest = JSON.parse(JSON.stringify(test2));
console.log(wrongTest);

console.log(showLinkedObjPositions(test2));

const rightTest = jsonConverter(test2);
console.log(rightTest);
//rightTest.randObj2.anotherPro = "even more amazing"
rightTest.obj2.foo = "happens";
wrongTest.obj2.foo = "happens";
console.log(rightTest);
console.log(wrongTest);