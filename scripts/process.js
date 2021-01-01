
class Entity1 { 
    constructor(input, output) {
        this.id = "ehhId" + index.next().value;
        this.name = {
            value: null,
            operate : ['isString', 'isNotEmpty']
        };
        this.name = input;
        this.output = {
            output: null,
            operate: ['isHTML','isNotEmpty']
        }
    }  
    
    create(input, output, key, value) { 
       
        if (operator.onEvery1(output, output, this.output.operate)) {
          
            output = document.createElement(input); 
            output.name = this.name;
            console.log(output)
            return output;
        }
        return false;
    }
}

class process {
    
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

                var currentNode = entity.create(key, output, key, input[key]);
                //  console.log("recived from create",currentNode)
                processSchema.iterate(input[key], currentNode, key, input[key]);

                processSchema.appendChild(currentNode, output);

            } else if (operate.is(input[key]) === 'Array') {

                var currentNode = entity.create(key, output, key, input[key]);
                //  console.log("recived from create", currentNode)

                processSchema.iterate(input[key], currentNode, key, input[key]);
                processSchema.appendChild(currentNode, output);


            } else if (operate.is(input[key]) === 'String' || operate.is(input[key]) === 'Function' || operate.is(input[key]) === 'Boolean') {
                //   console.log("create req property object", key, input[key])
                var currentNode = entity.create(key, output, key, input[key]);

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

                var currentNode = entity.create(key, output, input[i], input[i]);
                //console.log("recived from create",currentNode)
                processSchema.iterate(input[i], currentNode, key, input[i]);

                processSchema.appendChild(currentNode, output);

            } else if (operate.is(input[i]) === 'Array') {
                //  console.log("found Object in array", input[i])
            } else if (operate.is(input[i]) === 'String' || operate.is(input[i]) === 'Function' || operate.is(input[i]) === 'Boolean') {
                var currentNode = entity.create(key, output, input[i], input[i]);
                processSchema.appendChild(currentNode, output);
            } else {
            }
            //            console.log(input[i], operate.is(input[i]));
            //   processSchema.setAppendEntity(input[i], output, input[i]);


        }



        return output;


    }
    //Filters allowed Keys [array] from a raw object.
    static filter(allowed, raw,callback) {

        if (!response) { var response = {} };
        console.log(allowed, response)
        for (var key in raw) {
            if (operate.isEqualStrict(operate.isIn(key, allowed), true)) {
                response[key] = raw[key];
            }
        }
        return response;
    }


}
//this function finds a key inside an object. Not recursivly.

class dataHelper { 
    static unique() { }
    
    static conduct(callback, trigger, a, b) {
        callback.call(a, b);
    }
 

    static find(entity, keyTofind) {
    console.log("finding", keyTofind, "in", entity);
    var result = Object.keys(entity).filter(function (key, index, self) { return !key.indexOf(keyTofind); }); return result;
}
}

const raw = { item1: { prop: '1' }, item2: { prop: '2' }, item3: { prop: '3' } };
const body = document.getElementsByTagName('body')[0];
//console.log(body);

const requestedKeys = ['attributes', 'tagName', 'childNodes', 'nodeType'];






// var output = process.filter(requestedKeys, body);
// console.log(JSON.stringify(output));
