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



class Person {
    constructor() {
        this.name = {
            value: null,
            operate: ['isString', 'isNotEmpty']
        };
        this.age = {
            value: null,
            operate: ['isInt']
        };


    }


}


Person.prototype.set = function (value, key) {
    if (this.validator.validate(value, key.validator)) {
        key.value = value;
        return true;
    }
    return false;
};

Person.prototype.setName = function (name) {
    this.set(name, this.name);
};

Person.prototype.setAge = function (age) {
    this.set(age, this.age);
};
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
    static onEvery1(a, b, callback) { console.log(a, b); return a.every(function (value) { return operate.isIn(value, b); }); 
        
    }
            //returs the data Type of the input.
    static is(argA) { return Object.getPrototypeOf(argA).constructor.name; }
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
    static hasAllof(a, b) { console.log(a, b); return a.every(function (value) { return operate.isIn(value, b); }); }
    static isInt(argA) { return Number.isInteger(argA); }
    static isNumber(argA) { return Number.parseFloat(argA).toString() !== 'NaN' }
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
output = operate.isEqualStrict(inputStringA, inputStringB)
console.log(output);

