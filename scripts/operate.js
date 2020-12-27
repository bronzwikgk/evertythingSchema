// https://www.javascripttutorial.net/javascript-logical-operators/
// https://www.javascripttutorial.net/es-next/javascript-optional-chaining-operator/
// https://www.javascripttutorial.net/javascript-ternary-operator/
// https://frontstuff.io/build-a-simple-validator-service-in-javascript

class operate {
       
    defaultOutput = { output: 'self', when: 'onTrue' };

    /**
     * returns the output in the option parameter or default = dataType of the object;
     */
    static is(input,options) { 
        return Object.getPrototypeOf(input).constructor.name;//entity.__proto__.constructor.name
    }
    // operate to check if the input is not null or undefined to be added
    static isEmpty(input) {
        return Object.keys(input).length === 0 ? true : false
    }
    static isNotEmpty(input) { 
        return value !== '' && value !== null && typeof value !== 'undefined' ? true : false
    }
    /**
     * returns if the unput is a key/value in the object options.argB
     * @param {*} input 
     * @param {*} options.argB  is required to be not empty
     * 
     */
    static isIn(input, options) {
        return Object.keys(option.argB).indexOf(input) > -1 ? true : false;
    }
    static isEqual(argA, options) {
        return argA === options.argB ? true : false;
    }
    static hasAllof(a, b) {

    }

    static isInt(input){ 
    return Number.isInteger(value);
    }

    static isNumber(factValue) {
        return Number.parseFloat(factValue).toString() !== 'NaN'
    }
}
