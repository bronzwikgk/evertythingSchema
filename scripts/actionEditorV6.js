let editor = {
    tagName : 'div',
    id: 'actionEditor',
    theme: 'light',
    mimeMode: 'text',
    output:'self'
}

var intitRequest = {
    div: {
    title: 'toolbar',
    class: 'toolbar',
    id: 'toolbar',
     div: [
        { "button": "add" },
        { "button": "delete"},
        { "button": "save" }
    ]
}
}


function isRequired() {
    console.log("isRequired");
    return;
}

function init(input, output,callback) { 
    process.iterate(input, output,callback);
}

class entity { 
    static create(input, output, callback) { 
        if (operate.is(output).includes("HTML")) { //Only HTML creation
            var response = document.createElement(input);
        }
       // console.log('created',response)
        return response;
    }
    static append(input, output, callback) {
        if (operate.is(output).includes("HTML")) { //Only HTML creation
            var response = output.appendChild(input);
        }
        // console.log('created',response)
        return response;
    }
    static set(input, output,key,value, callback) {
        if (operate.is(output).includes("HTML")) { //Only HTML creation
            
            var response = output.setAttribute(key, value);
        }
        // console.log('created',response)
        return response;
    }


}


class process { 
    static iterate(input, output, key, value, callback) {
        !operate.isNotEmpty(input) ? isRequired() : null;
        if (!Object.keys(input).length) return;// if there's no keys, then the call returns undefined
        switch (input?.constructor) {
            case Object:
                process.iterateObj(input, output, key, value, callback);
            case Array:
                process.iterateArr(input, output, key, value, callback);
            case String:
              //  process.processString(input, output, callback);
            default:
            // return
        }
        return output;
    }
    
    static iterateObj(input, output, key, value, callback) {
        !operate.isNotEmpty(input) ? isRequired() : null;

        for (var key in input) {
            
            if (operate.is(input[key]) === 'Object') {  // console.log("iterating", operate.is(output), key, input[key])
       
              var currentEntity = entity.create(key, output,callback);
                console.log("recived from create", currentEntity);
                process.iterate(input[key], currentEntity, key, input[key]);
                entity.append(currentEntity, output);
                console.log(output)
            } else if (operate.is(input[key]) === 'Array') {

                var currentEntity = entity.create(key, output, key, input[key]);
                //  console.log("recived from create", currentNode)

              process.iterateArr(input[key], currentEntity, key, input[key]);
              //  entity.append(currentEntity, output);


            } else if (operate.is(input[key]) === 'String' || operate.is(input[key]) === 'Function' || operate.is(input[key]) === 'Boolean') {
               
                console.log("create req property object", output, key, input[key])
                
                var currentProperty = entity.set(key, output, key, input[key]);

                // if (process.validate(input[key], supportedType, key, input[key], "isOneOf")) {
                //     currentNode.setAttribute("type", input[key]);
                // }
              //  entity.append(currentNode, output);
            } else {
               // console.log("strays", input, key, value)
            }

        }
        return output;
    }
    static iterateArr(input, output, key, value, callback) {

        for (var i = 0; i < input.length; i++) {
            if (operate.is(input[i]) === 'Object') {
                console.log("found Object in array", input[i],output)

              //  var currentNode = entity.create(key, output, input[i], input[i]);
                //console.log("recived from create",currentNode)
             //   process.iterate(input[i], currentNode, key, input[i]);

              //  entity.append(currentNode, output);

            } else if (operate.is(input[i]) === 'Array') {
                //  console.log("found Object in array", input[i])
            } else if (operate.is(input[i]) === 'String' || operate.is(input[i]) === 'Function' || operate.is(input[i]) === 'Boolean') {
              
                console.log(input[i], operate.is(input[i]));
               
                var currentNode = entity.create(key, output, input[i], input[i]);
                entity.append(currentNode, output);
            } else {
            }
            //            
            //   process.setAppendEntity(input[i], output, input[i]);


        }



        return output;


    }

   
}
ehhApp = document.createElement('ehhOutput')

window.onload = init(intitRequest, ehhApp);

document.getElementsByTagName('body')[0].appendChild(ehhApp);