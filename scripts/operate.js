//https://www.javascripttutorial.net/javascript-logical-operators/
//https://www.javascripttutorial.net/es-next/javascript-optional-chaining-operator/
//https://www.javascripttutorial.net/javascript-ternary-operator/



class operate {
   
    defaultOutput = self;
    /**
     * returns the output in the option parameter or default = dataType of the object;
     */
    static is(input,options) { 
        return Object.getPrototypeOf(input).constructor.name;//entity.__proto__.constructor.name
    }
    // operate to check if the input is not null or undefined to be added
    static isEmpty(input) { 
        return typeof input != 'undefined' && Object.keys(input).length === 0 ? true : false
    }
    /**
     * returns if the unput is a key/value in the object options.argB
     * @param {*} input 
     * @param {*} options.argB  is required to be not empty
     * 
     */
    static isIn(input,options) {
        return input in options.argB
    }




}