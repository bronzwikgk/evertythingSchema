
class validate {
    static isEqual(a, b, key, value) {
        return a === b ? true : false;
    }
    static isEmpty(a) {
        return Object.keys(obj).length === 0 ? true : false;
    }
    static isOneof(a, b, key, value) {
        //  console.log(a,b)
        return b.indexOf(a) > -1 ? true : false;
    }
    static hasAllof(a, b) {

    }
    static isNumber(factValue) {
        return Number.parseFloat(factValue).toString() !== 'NaN'
    }

}
class validation {
    constructor(typeofValidation, input, options) {
        this.defaultValidation = validate.is(isEmpty, input, options.output.ifFalseCallback('continue')),
            this.typeofValidation = typeofValidation,
            this.name = typeofValidation,
            this.input = input,
            this.options = options,
            this.options.validateAgainst = options.validateAgainst,
            this.options.output,
        }
}

class validationSet {
    and = every;
    or = some;
    constructor(validation, ifTrueCallBack, ifFalseCallback) {
        this.defaultValidation = validate.is(isArray, input, options.output.ifTrueCallback('continue'))
        this.validationSetName = validation.name,
            this.validation = this.validate.typeofValidation(input, options);
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