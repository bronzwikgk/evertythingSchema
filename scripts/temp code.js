
//https://www.javascripttutorial.net/es-next/javascript-nullish-coalescing-operator/
//  leftExpression ?? rightExpression

//basic operate syntax usnig teranry operator.

//condition ? expression_1 : expression_2;
//var age = 19;
//var canDrive = age > 16 ? 'yes' : 'no';


// https://www.javascripttutorial.net/es-next/javascript-optional-chaining-operator/
/**
 * The optional chaining operator (?.) returns undefined instead of throwing an error if you attempt to access a property of an null or undefined object: obj ?. property.
* Combine the optional chaining operator (?.) with the nullish coalescing operator (??) to assign a default value.
* Use functionName ?. (args) to avoid explicitly checking if the functionName is not undefined or null before invoking it.
 */
{
    let user = getUser(-1);
    let avatar = user?.profile?.avatar;

    let defaultProfile = { default: '/default.png', language: 'English' };
    let user = getUser(2);
    let profile = user?.profile ?? defaultProfile;
    functionName?.(args)

}

function requiredArg() {
    throw new Error('The argument is required');
}


function add(x = requiredArg(), y = requiredArg()) {
    return x + y;
}
console.log(add);



/**
 * this operator class function does an array of operations from operator and operate class while using logical operator
 * it takes the followsing arguments.
 *  this.operator = ["and/Every","or/some","not"]
 * this.input = [[operate.method(input,options.output.self)]]
 * this.output = [ { self = [true,false] },{ value =[input, argB] },{ callback =[[(ifTrue) callback;], [(ifTrue) callback;]]}]
 * this class might be merged with operate class
 */

class operator {
    constructor(operator, ifTrueCallBack, ifFalseCallback) {
        this.defaultOperation = operate.is(isArray, input, options.output.ifTrueCallback('continue'))
        this.OperationSetName = Operation.name,
            this.Operation = this.operate.typeofOperation(input, options);
        this.actionIfTrue = ifTrueCallback;
        this.actionIfFalse = ifFalseCallback(...arguments,);
        this.options = { autoStart = true }
    }
}


function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
}


//https://github.com/google/data-layer-helper
//https://sites.google.com/site/scriptsexamples/custom-methods/2d-arrays-library


//return true if all items are the same in two unordered Array need to add a return of mismatch values as option.
function compareTwoArray_(arr1, arr2) {
    arr1.sort();
    arr2.sort();
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}


function checkHeaders(allHeaders, headersPassed, requiredHeaders) {

    if (!requiredHeaders.every(iteme => headersPassed.includes(items))) return false;
    if (!headersPassed.every(iteme => allHeaders.includes(items))) return false;
    return true;

}

// Returns if a value is a string
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

// Returns if a value is really a number
function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}




// Returns if a value is an array
function isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
}

// ES5 actually has a method for this (ie9+)
//Array.isArray(value);

// Returns if a value is a function
function isFunction(value) {
    return typeof value === 'function';
}



// // Returns if a value is an object
// function isObject (value) {
// return value && typeof value === 'object' && value.constructor === Object;
// }



// Returns if a value is null
function isNull(value) {
    return value === null;
}

// Returns if a value is undefined
function isUndefined(value) {
    return typeof value === 'undefined';
}

// Returns if a value is a boolean
function isBoolean(value) {
    return typeof value === 'boolean';
}



// Returns if a value is a regexp
function isRegExp(value) {
    return value && typeof value === 'object' && value.constructor === RegExp;
}


// Returns if value is an error object
function isError(value) {
    return value instanceof Error && typeof value.message !== 'undefined';
}

// Returns if value is a date object
function isDate(value) {
    return value instanceof Date;
}


//Returns if the value is a Prototyp
function isPrototype(value) {
    console.log(Object.getPrototypeOf(value) === prototype1);
}


// Returns if a Symbol
function isSymbol(value) {
    return typeof value === 'symbol';
}


//this function finds a key inside an object. Not recursivly.
console.log("dataHelpers on")
function find(entity, keyTofind) {
    console.log("finding", keyTofind, "in", entity);
    var result = Object.keys(entity).filter(function (key, index, self) {
        return !key.indexOf(keyTofind);
    });
    return result;
}


async function start() {
    /**
     * Setup a new engine
     */
    const engine = new Engine()

    /**
     * Create a rule
     */
    engine.addRule({
        // define the 'conditions' for when "hello world" should display
        conditions: {
            all: [{
                fact: 'displayMessage',
                operator: 'equal',
                value: true
            }]
        },
        // define the 'event' that will fire when the condition evaluates truthy
        event: {
            type: 'message',
            params: {
                data: 'hello-world!'
            }
        }
    })

    /**
     * Define a 'displayMessage' as a constant value
     * Fact values do NOT need to be known at engine runtime; see the
     * 03-dynamic-facts.js example for how to pull in data asynchronously during runtime
     */
    const facts = { displayMessage: true }

    // engine.run() evaluates the rule using the facts provided
    const { events } = await engine.run(facts)

    events.map(event => console.log(event.params.data.green))
}



//https://www.fourmilab.ch/cellab/manual/ruledef-js.html

// "{
// // define the 'conditions' for when ""hello world"" should display
// conditions: {
//     all: [{
//         fact: 'displayMessage',
//         operator: 'equal',
//         value: true
//     }]
// },
// // define the 'event' that will fire when the condition evaluates truthy
// event: {
//     type: 'message',
//         params: {
//         data: 'hello-world!'
//     }
// }
//     }"
