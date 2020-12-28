// This creates an index which when called with sytax of createIndex.next().value will give you an index new value.
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
            operate : ['isString', 'isNotEmpty']
        };
        this.name = input;
        this.output = {
            output: null,
            operate : ['isHtml','isNotEmpty']
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

console.log(output)

class process extends Entity{
    

    static iterate(input, output, key, value, callback) {

        if (!Object.keys(input).length) return;// if there's no keys, then the call returns undefined
        switch (input?.constructor) {
            case Object:
                processSchema.iterateObj(input, output, key, value);
            case Array:
                processSchema.iterateArr(input, output, key, value);
            case String:
            //processSchema.processString(input, output);
            default:
            // return
        }
        return output;
    }
    static iterateObj(input, output, key, value, callback) {

        for (var key in input) {
            if (operate.is(input[key]) === 'Object') {

                // console.log("creating fieldSet object", key, input[key])

                var currentNode = processSchema.create(key, output, key, input[key]);
                //  console.log("recived from create",currentNode)
                processSchema.iterate(input[key], currentNode, key, input[key]);

                processSchema.appendChild(currentNode, output);

            } else if (operate.is(input[key]) === 'Array') {

                var currentNode = processSchema.create(key, output, key, input[key]);
                //  console.log("recived from create", currentNode)

                processSchema.iterate(input[key], currentNode, key, input[key]);
                processSchema.appendChild(currentNode, output);


            } else if (operate.is(input[key]) === 'String' || operate.is(input[key]) === 'Function' || operate.is(input[key]) === 'Boolean') {
                //   console.log("create req property object", key, input[key])
                var currentNode = processSchema.create(key, output, key, input[key]);

                if (processSchema.validate(input[key], supportedType, key, input[key], "isOneOf")) {
                    currentNode.setAttribute("type", input[key]);
                }
                processSchema.appendChild(currentNode, output);
            } else {
                console.log("strays", input, key, value)
            }

        }
        return output;
    }
    static iterateArr(input, output, key, value, callback) {

        for (var i = 0; i < input.length; i++) {
            if (operate.is(input[i]) === 'Object') {
                // console.log("found Object in array", input[i],output)

                var currentNode = processSchema.create(key, output, input[i], input[i]);
                //console.log("recived from create",currentNode)
                processSchema.iterate(input[i], currentNode, key, input[i]);

                processSchema.appendChild(currentNode, output);

            } else if (operate.is(input[i]) === 'Array') {
                //  console.log("found Object in array", input[i])
            } else if (operate.is(input[i]) === 'String' || operate.is(input[i]) === 'Function' || operate.is(input[i]) === 'Boolean') {
                var currentNode = processSchema.create(key, output, input[i], input[i]);
                processSchema.appendChild(currentNode, output);
            } else {
            }
            //            console.log(input[i], operate.is(input[i]));
            //   processSchema.setAppendEntity(input[i], output, input[i]);


        }



        return output;


    }





}




