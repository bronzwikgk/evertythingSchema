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
    /**
     * returns if the unput is a key/value in an object
     * @param {*} input 
     * @param {*} options 
     * @param {*} argB 
     */
    static isEmpty(input,options.argB) {
        return input in options.argB
    }




}