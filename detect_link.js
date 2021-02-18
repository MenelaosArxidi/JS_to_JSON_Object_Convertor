// The showLinkedObjPosition will return an array containing the two index from the linked objects inside the main object.  

function showLinkedObjPositions(obj) {

    const allObj = [];
    const allPotitions = [];
    
    const allKeys = Object.keys(obj);
    for (let i=0; i<allKeys.length; i++) {
        if (typeof obj[allKeys[i]] === "object") {
            allObj.push(obj[allKeys[i]]);
            allPotitions.push(i);     
        };
    };

    const objValues = Object.values(allObj);
    objValueKeys = [];
    objValues.forEach(pre =>{objValueKeys.push(Object.keys(pre))});
    
    const justKeys = removeArrays(objValueKeys);

    const linkTesterKey = doubleKey(justKeys);

    const listOfObj = [];
    const positions = [];

    for (let i=0; i<allObj.length; i++) {
        if (allObj[i][linkTesterKey]) {
            listOfObj.push(allObj[i]);
            positions.push(allPotitions[i]);
        };
    };
    
    const linkedObj = [];
    const linkPositions = [];

    for (let i=0; i<listOfObj.length; i++) {        
        listOfObj[i][linkTesterKey] =listOfObj[i][linkTesterKey] + "something else";
        for (let x=0; x<listOfObj.length; x++) {
            if (listOfObj[i][linkTesterKey] === listOfObj[x][linkTesterKey] && !linkedObj.includes(listOfObj[i]) && i!=x) {
                linkedObj.push(listOfObj[i]);
                //linkPositions.push([listOfObj[i], positions[i]]);
                //linkPositions.push([listOfObj[x], positions[x]]);
                linkPositions.push(positions[i]);
                linkPositions.push(positions[x]);
            };
        };
    };
    for (let i=0; i<listOfObj.length; i++) {        
        listOfObj[i][linkTesterKey] = listOfObj[i][linkTesterKey].replace("something else", "");
    };

    return linkPositions;
};

function removeArrays(anArray) {
    
    const returnArray = [];

    anArray.forEach(nestedArray => {
        if (nestedArray.length === 1) {
            nestedArray.forEach(element => {            
                returnArray.push(element);
            });    
        } else {
            returnArray.push(nestedArray);
        }        
    })
    
    return returnArray;
};

// The doubleKey function is temporary used only for two linked items. Its functionallity is to return a single key witch is common betwen the linked objects.

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

module.exports = showLinkedObjPositions;

// Testing below...

/*const test = {
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

console.log(showLinkedObjPosition(test))*/