
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


const unqueArray = Array.from(new Set("input"));

const items = [1, false, "Devsage", 3.14]

//const items = Infinity;
class Iterator {
    constructor(Array) { this.Array = Array, this.index = 0 }
    hasNext() { console.log(this.Array); return this.index < this.Array.length }
    next() { return this.Array[this.index++] }
}

// const iter = new Iterator(items)
// console.log(items)
// console.log(iter.hasNext())

// while(iter.hasNext())
//   console.log(iter.next())

// console.log(iter.hasNext())



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





function checkHeaders(allHeaders, headersPassed, requiredHeaders) {

    if (!requiredHeaders.every(iteme => headersPassed.includes(items))) return false;
    if (!headersPassed.every(iteme => allHeaders.includes(items))) return false;
    return true;

}


console.log("dataHelpers on")




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
