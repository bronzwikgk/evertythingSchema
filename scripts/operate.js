// https://www.javascripttutorial.net/javascript-logical-operators/
// https://www.javascripttutorial.net/es-next/javascript-optional-chaining-operator/
// https://www.javascripttutorial.net/javascript-ternary-operator/
// https://frontstuff.io/build-a-simple-validator-service-in-javascript
// defaultOutput = { output: 'self', when: 'onTrue' };

// static modeIndicator() { 
//     if (input === "{") {
//         //create a range.This position being starter
//         //set RangeType to Object;
//         //Intitiate ObjectRuleModel;
//         //add reflection to editor;
//         // update editor

    
//     }
//     if (input === "[") { 
// //create a range.This position being starter
//         //set RangeType to Object;
//         //Intitiate ObjectRuleModel;
//         //add reflection to editor;
//         // update editor
//     }



// }



// // static onEveryEntity1(a, b, callback) { 
// //     a.every(static (element) { callback(element, b); });
// // }


// //https://github.com/google/data-layer-helper
// //https://sites.google.com/site/scriptsexamples/custom-methods/2d-arrays-library



// class process {
//     static onEveryEntity(a, b, callback) {
//         a.every(static (element) { callback(element, b); });

//     }
// }

class operate {
       
    //    //arr.every(callback(element[, index[, array]])[, thisArg])
    // static onEvery1(a, b, callback) { console.log(arguments); return a.every(static (value) { return operate.isIn(value, b); }); 
        
    // }
    // operate to check if the input is not null or undefined to be added
    static isEmpty(argA) { return Object.keys(argA).length === 0 ? true : false }
    static isNotEmpty(argA) { return argA !== '' && argA !== null && typeof argA !== 'undefined' ? true : false }
            //returs the data Type of the input.
    static is(argA) {return Object.getPrototypeOf(argA).constructor.name; }
    static isInt(argA) { return Number.isInteger(argA); }
    static isNumber(argA) { return Number.parseFloat(argA).toString() !== 'NaN' }
    static isString(argA) { return typeof argA === 'string' ? true : false }
    /**
     * returns if the input is a key/value in the object options.argB
     * @param {*} argA
     * @param {*} argB  is required to be not empty
     * 
     */
    static isIn(argA, argB) {return argB.indexOf(argA) > -1 ? true : false; }
    //curently works only for string numbers
    static isEqualStrict(argA, argB) {return argA === argB ? true : false; }
    //for array's one sided value existence check, return true if each element of a is present in b
    static isGreaterThan(argA, argB) { return argA > argB ? true : false }
    static isGreaterthanOrEqual(argA, argB){ return argA => argB ? true : false }
    static isSmallerthan(argA, argB) { return argA < argB ? true : false }
    static isSmallerthanOrEqual(argA, argB) { return argA <= argB ? true : false }
    static instanceof(argA, argB) { return console.log("work in process"); }
    //validate 2 Object, with key's and values
    static isSameObject(argA, argB) {
        
        return console.log("work in process");
    }
    //check if argB has all the keys from argA // only for array.
    static hasAllof(argA, argB) { return argA.every(function (value) { console.log(value, argB); return operate.isIn(value, argB)}); }
    static arrayIncludes(argA, argB) { return argA.includes(function (value) { return operate.isIn(value, argB); }); }
    //Check for bothArgument to be Number and Integer to be added.
    static isInRangeNumbers(argA, argB) { return argA.every(function (value) { return operate.isGreaterthanOrEqual(value, argB.min) && operate.isSmallerthanOrEqual(value, argB.max); }); }
   //return true if all items are the same in two unordered Array need to add a return of mismatch values as option.
    static isSameArray(argA, argB) {
        argA.sort(); argB.sort(); if (argA.length !== argB.length) return false;
        for (let i = 0; i < argA.length; i++) { if (argA[i] !== argB[i]) return false;} return true;
    }
    // Returns if a value is really a number
    static isNumber(argA) { return typeof argA === 'number' && isFinite(argA); }
    // Returns if a value is an array
    static isArray(value) { return value && Array.isArray(value) && typeof value === 'object' && value.constructor === Array; }
    // Returns if a value is a static
    static isstatic(value) { return typeof value === 'static'; }
    // Returns if a value is an object
    static isObject(value) { return value && typeof value === 'object' && value.constructor === Object; }
    // Returns if a value is null
    static isNull(value) { return value === null; }
    // Returns if a value is undefined 
    static isUndefined(value) { return typeof value === 'undefined'; }
    // Returns if a value is a boolean 
    static isBoolean(value) { return typeof value === 'boolean'; }
    //Returns if a value is a regexp
    static isRegExp(value) { return value && typeof value === 'object' && value.constructor === RegExp; }
    // Returns if value is an error object
    static isError(value) { return value instanceof Error && typeof value.message !== 'undefined'; }
    // Returns if value is a date object
    static isDate(value) { return value instanceof Date; }
    //Returns if the value is a Prototyp
    static isPrototype(value) { console.log(Object.getPrototypeOf(value) === prototype1); }
    // Returns if a Symbol
    static isSymbol(value) { return typeof value === 'symbol'; }
    //This function validates a valid Url, Returns True or false
    static isValidUrl(string) { try { new URL(string); } catch (_) { return false; } return true; }
    static isValidJSONString(str) { try { JSON.parse(str); } catch (e) { return false; } return true; }
    /**
     *  * Returns true if the given test value is an array containing at least one object; false otherwise.
     * */
    static isObjectArray_(test) {
        for (var i = 0; i < test.length; i++) {
            if (isObject_(test[i])) {
                return true;
            }
        }
        return false;
    }
    static isChild(argA, argB) { }
    static isParent(argA, argB) { }

}


//console.log(isInRange)
output = operate.isSameArray(inputA, inputB);
console.log(output);
console.log(inputElement)