// https://www.javascripttutorial.net/javascript-logical-operators/
// https://www.javascripttutorial.net/es-next/javascript-optional-chaining-operator/
// https://www.javascripttutorial.net/javascript-ternary-operator/
// https://frontstuff.io/build-a-simple-validator-service-in-javascript
function* createIndex() {
    let number = 1;
    while (true)
        yield number++;
}

const index = createIndex();

class Entity {

    constructor(input, output) {
        this.id = "ehhId" + index.next().value;
        this.name = {
            value: null,
            operate: ['isString', 'isNotEmpty']
        };
        this.name = input;
        this.output = {
            output: null,
            operate: ['isHtml', 'isNotEmpty']
        }
    }

    create(input, output, key, value) {
        console.log(this.output.operate)
        if (operator.onEvery1(input, output, this.output.operate)) {

            output.output = document.createElement(input);
            // console.log(output);
            return true;
        }
        return false;


        if (operate.is(output).includes("HTML")) { //Only HTML creation
            //    console.log("got request for  from create", input, output, key, value)
            if (operate.is(value) === 'Object') {//An object property generates a fieldset, i.e. a <fieldset> element.
                //   console.log("creating div object", key, value)
                var nwEle = document.createElement("div");
                nwEle.className = input;
                //  nwEle.className = "createdFromObject";
            } else if (operate.is(value) === 'Array') {
                var nwEle = document.createElement(input);
                nwEle.className = "createdFromArrayProperty";

            } else if (operate.is(value) === 'String' || operate.is(value) === 'Boolean') {
                //     console.log("create Request property for ", input, output, key, value, formElements.indexOf(input))
                if (formElements.indexOf(input) < 0) { //check if the input is a formElement by crosschecking in the define array.
                    var nwEle = document.createElement("div");
                    nwEle.className = input;
                    // console.log("divElement", nwEle);
                } else {

                    //    console.log("create Request property for ", input, output, key, value, formElements.indexOf(input))
                    var nwEle = document.createElement(input);
                    nwEle.className = "createdFromStringProperty";
                    var content = document.createTextNode(value);
                    nwEle.appendChild(content);
                    //  nwEle.setAttribute("value", key);
                    //    console.log("formElement", nwEle);

                }
            } else {
                console.log("strays")
            }
            // console.log("new element from create",nwEle)
            return nwEle;
        }
    }
}

var temp = new Entity("yo", inputElement);
output = temp.create("yo", inputElement);

class operator {
    //    //arr.every(callback(element[, index[, array]])[, thisArg])
    static onEvery1(a, b, callbacks) {
        console.log(callbacks)

        return callbacks.every(function (callback) {
            console.log(self)

            return operate.callback(a, b);
        });
    }

}

class operate {
    // operate to check if the input is not null or undefined to be added
    static isEmpty(argA) { return Object.keys(argA).length === 0 ? true : false }
    static isNotEmpty(argA) { return argA !== '' && argA !== null && typeof argA !== 'undefined' ? true : false }
    //returs the data Type of the input.
    static is(argA) { return Object.getPrototypeOf(argA).constructor.name; }
    static isInt(argA) { return Number.isInteger(argA); }
    static isNumber(argA) { return Number.parseFloat(argA).toString() !== 'NaN' }
    static isString(argA) { return typeof argA === 'string' ? true : false }
    /**
     * returns if the input is a key/value in the object options.argB
     * @param {*} argA
     * @param {*} argB  is required to be not empty
     * 
     */
    static isIn(argA, argB) { return argB.indexOf(argA) > -1 ? true : false; }
    //curently works only for string numbers
    static isEqualStrict(argA, argB) { return argA === argB ? true : false; }
    //for array's one sided value existence check, return true if each element of a is present in b
    static isGreaterThan(argA, argB) { return argA > argB ? true : false }
    static isGreaterthanOrEqual(argA, argB) { return argA => argB ? true : false }
    static isSmallerthan(argA, argB) { return argA < argB ? true : false }
    static isSmallerthanOrEqual(argA, argB) { return argA <= argB ? true : false }
    static instanceof(argA, argB) { return console.log("work in process"); }
    //validate 2 Object, with key's and values
    static isSameObject(argA, argB) {

        return console.log("work in process");
    }
    //check if argB has all the keys from argA // only for array.
    static hasAllof(argA, argB) { return argA.every(function (value) { console.log(value, argB); return operate.isIn(value, argB) }); }
 
    static isHTML(argA) { return operate.is(argA).includes("HTML") }
    // Returns if a value is null
   

}



inputElement = document.createElement("form");
//console.log(isInRange)
output = operate.isHTML(inputElement, inputB);
//console.log(output);
//console.log(inputElement)