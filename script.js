function jsSonCon(obj) {
    const obJS = {};
    const obJSon = JSON.parse(JSON.stringify(obJS));
    return Object.assign(obJSon, obj);
    //return obJSon;
};




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

//console.log(test);
//console.log(jsSonCon(test));
test.randObj.anotherPro = "super amazing";
//console.log(test);
//console.log(jsSonCon(test));




const test2 = {
    str: '<script>var a = 0 > 1</script>',
    num: 3.1415,
    bool: true,
    nil: null,
    undef: undefined,
    obj: { foo: 'bar' },
    arr: [1, '2'],
    regexp: /^test?$/,
    date: new Date(),
    buffer: new Buffer('data'),
    set: new Set([1, 2, 3]),
    map: new Map([['a', 1],['b', 2]])
}

jSonObj = jsSonCon(test2);
simpleSon = JSON.parse(JSON.stringify(test2));
//console.log(jSonObj);
//console.log(test2);
//console.log(simpleSon);
