// "this function as like other function returns either of the 4 types of output. requested in the option parameter argument. 
// 1. Self[True / false] : returns the output of the method called
// 2. value[a / b] : returns either of the argument
// 3. if (True) : callback[a / b],
//     4. if (False) : callback[a / b]"




class operationSet {
    and = every;
    or = some;
    constructor(Operation, ifTrueCallBack, ifFalseCallback) {
        this.defaultOperation = operate.is(isArray, input, options.output.ifTrueCallback('continue'))
        this.OperationSetName = Operation.name,
        this.Operation = this.operate.typeofOperation(input, options);
        this.actionIfTrue = ifTrueCallback;
        this.actionIfFalse = ifFalseCallback(...arguments,);
        this.options = { autoStart = true }
    }

}

class operator extends operationSet {
    constructor(typeofOperation, input, options) {
        this.defaultOperation = operate.isEmpty(input, options.output.ifFalseCallback('continue')),
            this.typeofOperation = typeofOperation,
            this.name = typeofOperation,
            this.inputArg = input,
            options.argB = argB,
            options.output.outputType = {
                operate.isOneof(
                    [{ "self": [true, false] }],
                    [{ "value": [argA, argB] }],
                    [{ "ifTrue": callback() }],
                    [{ "ifFalse": callback() }]
            }
    }
}
    
class operate extends operator {

    static isEqual(a, b, key, value) {
        return a === b ? true : false;
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

// start()

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