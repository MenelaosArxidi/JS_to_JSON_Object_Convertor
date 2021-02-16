const test = {
    someProp: "asdasd",
    randomFun() {
        return "test"
    },
    randObj: {
        anotherPro: "amazing"
    },

    randObj3: {
        anotherPro3: "amazing3"
    },

    randObj4: {
        anotherPro2: "amazing2"
    },

    randObj5: {
        anotherPro1: "amazing1"
    },

    numbers: [1, 2, 3, 5] 
};
test.randObj2 = test.randObj;



const testKeys = Object.keys(test);
console.log(testKeys);

allObj = [];
allPotitions = [];
listOfObj = [];
positions = [];
linkedObj = [];
linkPositions = [];
for (let i=0; i<testKeys.length; i++) {
    console.log(typeof test[testKeys[i]]);
    if (typeof test[testKeys[i]] === "object") {
        allObj.push(test[testKeys[i]]);
        allPotitions.push(i);        
    }
}    
for (let i=0; i<allObj.length; i++) {
//listOfObj.forEach(key => {
    if (allObj[i]["anotherPro"]) {
        listOfObj.push(allObj[i]);
        positions.push(allPotitions[i]);
    }
}    
for (let i=0; i<listOfObj.length; i++) {        
    listOfObj[i]["anotherPro"] = "something else";
    console.log(listOfObj[i])
    for (let x=0; x<listOfObj.length; x++) {
    //listOfObj.forEach(key2 => {
        console.log(listOfObj[x]["anotherPro"]);
        if (listOfObj[i]["anotherPro"] === listOfObj[x]["anotherPro"] && !linkedObj.includes(listOfObj[i]) && i!=x) {
            linkedObj.push(listOfObj[i]);
            linkPositions.push([listOfObj[i], positions[i]]);
            linkPositions.push([listOfObj[x], positions[x]]);
        }
    }//)
}//)



console.log(linkedObj);
console.log(linkPositions);