// This creates an index which when called with sytax of createIndex.next().value will give you an index new value.
function* createIndex() {
    let number = 1;
    while (true)
        yield number++;
}

const index = createIndex();

class Entity { 
    constructor(input,output) { 
        this.id = "ehhId" + index.next().value;
        this.name = input
    }

}

var temp = new Entity("yo", {});
console.log(temp)

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

const unqueArray = Array.from(new Set("input"));

const items = [1, false, "Devsage", 3.14]

//const items = Infinity;
class Iterator{
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

