// https://www.javascripttutorial.net/javascript-logical-operators/
// https://www.javascripttutorial.net/es-next/javascript-optional-chaining-operator/
// https://www.javascripttutorial.net/javascript-ternary-operator/
// https://frontstuff.io/build-a-simple-validator-service-in-javascript
// defaultOutput = { output: 'self', when: 'onTrue' };

function modeIndicator() { 
    if (input === "{") {
        //create a range.This position being starter
        //set RangeType to Object;
        //Intitiate ObjectRuleModel;
        //add reflection to editor;
        // update editor

    
    }
    if (input === "[") { 
//create a range.This position being starter
        //set RangeType to Object;
        //Intitiate ObjectRuleModel;
        //add reflection to editor;
        // update editor
    }



}



// function onEveryEntity1(a, b, callback) { 
//     a.every(function (element) { callback(element, b); });
// }


class process {
    static onEveryEntity(a, b, callback) {
        a.every(function (element) { callback(element, b); });

    }
}

class operate {
       
       //arr.every(callback(element[, index[, array]])[, thisArg])
    static onEvery1(a, b, callback) { console.log(arguments); return a.every(function (value) { return operate.isIn(value, b); }); 
        
    }
            //returs the data Type of the input.
    static is(argA) {
        console.log(arguments);

        return Object.getPrototypeOf(argA).constructor.name;
    }
    static isString(argA) { return typeof argA === 'string' ? true : false }
    // operate to check if the input is not null or undefined to be added
    static isEmpty(argA) { return Object.keys(argA).length === 0 ? true : false }
    static isNotEmpty(argA) { return argA !== '' && argA !== null && typeof argA !== 'undefined' ? true : false }
    /**
     * returns if the input is a key/value in the object options.argB
     * @param {*} argA
     * @param {*} argB  is required to be not empty
     * 
     */
    static isIn(argA, argB) { console.log("a", argA, "b,", argB); return argB.indexOf(argA) > -1 ? true : false; }
    //curently works only for string numbers
    static isEqualStrict(argA, argB) { console.log("a", argA, "b,", argB); return argA === argB ? true : false; }
    //for array's one sided value existence check, return true if each element of a is present in b
   
    static isInt(argA) { return Number.isInteger(argA); }
    static isNumber(argA) { return Number.parseFloat(argA).toString() !== 'NaN' }
    static isGreaterThan(argA, argB) { return argA > argB ? true : false }
    static isGreaterthanOrEqual(argA, argB){ return argA => argB ? true : false }
    static isSmallerthan(argA, argB) { return argA < argB ? true : false }
    static isSmallerthanOrEqual(argA, argB) { return argA <= argB ? true : false }
    static instanceof(argA, argB) { return console.log("work in process"); }
    static isSame(argA, argB) { return console.log("work in process"); }
    static hasAllof(argA, argB) { console.log(arguments); return argA.every(function (value) { return operate.isIn(value, argB); }); }
    static isInRange(argA, argB) { console.log(arguments); return argA.every(function (value) { return operate.isGreaterthanOrEqual(value, argB.min) && operate.isSmallerthanOrEqual(value, argB.max) ; }); }
}

var inputObjA = {
    "schema": {
        "field": {
            "input": "string",
            "lable": "A field"
        }
    },
    "form": [
        {
            "key": "field"
        },
        {
            "button": "submit",
            "lable": "Submit"
        }
    ]
}


var inputObjB = {
    "schema": {
        "field": {
            "input": "string",
            "lable": "A field"
        }
    },
    "form": [
        {
            "key": "field"
        },
        {
            "button": "submit",
            "lable": "Submit"
        }
    ]
}


nonWordCharList = '/\\()"\':,.;<>~!@#$%^&*|+=[]{}`?-…';

var inputA = ['html', 'richText', 'json', 'css', 'javascript'];
var inputB = ['html', 'richText', 'json', 'css', 'javascript'];
var inputStringA = "hello";
var inputStringB = "hello";
//output = operate.hasAllof(inputA, inputB);


let numbers = [1, 3, 5,15];

let range = {
    min: 0,
    max: 15
};

let isInRange = numbers.every(function (e) { return e >= this.min && e <= this.max; }, range);
//console.log(isInRange)
output = operate.isInRange(numbers, range);
console.log(output);