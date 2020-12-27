
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


class operate extends operator {

    static isEqual(argA,options) {
        return argA === options.argB ? true : false;
    }
    static isEmpty(a) {
        return Object.keys(obj).length === 0 ? true : false;
    }
    static isOneof(a, b, key, value) {
        /**
         * 
         */
        //  console.log(a,b)
        return b.indexOf(a) > -1 ? true : false;
    }
    static hasAllof(a, b) {

    }
    static isNumber(factValue) {
        return Number.parseFloat(factValue).toString() !== 'NaN'
    }
}


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
