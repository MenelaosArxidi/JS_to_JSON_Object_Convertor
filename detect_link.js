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



const objValues = Object.values(allObj);
console.log(objValues);
objValueKeys = [];
objValues.forEach(pre =>{objValueKeys.push(Object.keys(pre))});
console.log(objValueKeys);


function removeArrays(anArray) {
    returnArray = []
    anArray.forEach(nestedArray => {
        if (nestedArray.length === 1) {
            nestedArray.forEach(element => {            
                console.log(element);
                returnArray.push(element);
            });    
        } else {
            returnArray.push(nestedArray);
        };        
    });
    return returnArray
};

justKeys = removeArrays(objValueKeys);
console.log(justKeys);



function doubleKey(listOfKeys) {
    let item = ""
    listOfKeys.forEach(key => {
        listOfKeys.forEach(key2 => {
            if (key === key2 && key != item) {
                item = key;
            }
        })
    })
    return item;
};

console.log(doubleKey(justKeys))

const linkTesterKey = doubleKey(justKeys); 




for (let i=0; i<allObj.length; i++) {
    if (allObj[i][linkTesterKey]) {
        listOfObj.push(allObj[i]);
        positions.push(allPotitions[i]);
    }
}    



for (let i=0; i<listOfObj.length; i++) {        
    listOfObj[i][linkTesterKey] =listOfObj[i][linkTesterKey] + "something else";
    console.log(listOfObj[i])
    for (let x=0; x<listOfObj.length; x++) {
        console.log(listOfObj[x][linkTesterKey]);
        if (listOfObj[i][linkTesterKey] === listOfObj[x][linkTesterKey] && !linkedObj.includes(listOfObj[i]) && i!=x) {
            linkedObj.push(listOfObj[i]);
            linkPositions.push([listOfObj[i], positions[i]]);
            linkPositions.push([listOfObj[x], positions[x]]);
        }
    }
}



console.log(linkedObj);
console.log(linkPositions);