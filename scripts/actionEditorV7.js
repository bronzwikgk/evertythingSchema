function* createIndex() {
    let number = 1;
    while (true)
        yield number++;
}

const index = createIndex();

var actionEditor = {
    div:{
        contentEditable: true,
        class : 'actionEditor',
        id: 'actionEditor' + index.next().value,
        lineNumbers: true,
        innerText:"Write whatever you can think of...",
        //mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
        //output: ['self', 'output'],
        state: 'idle',
        style: 'min-height : 200px; width: 400px; border-top: 0px; padding: 21px; overflow: auto;',
        }
}

class entity {
    static create(input, output, key, value,callback,callbackClass) {
        if (operate.is(output).includes("HTML")) { //Only HTML creation
           
            var response = document.createElement(input);
             //console.log("create request for ",response)
            entity.set(input, response, 'id', input + index.next().value);
        }
       // console.log('created', response, input, output, key, value, callback, callbackClass);

//        operate.isNotEmpty(callback) ? conductor.conduct(response, output, '', '', callback, callbackClass) : null;
        

        if (operate.isNotEmpty(callback)) {

            var response = conductor.conduct(response, output, '', '', callback, callbackClass);
        }
//              console.log("create", response)

        return response;
    }
    static append(input, output, key, value, callback, callbackClass) {
   //  console.log('appending', input,output)

        if (operate.is(output).includes("HTML")) { //Only HTML creation
            var response = output.appendChild(input);
        }
//

   // console.log('appended',response)
        return response;
    }
    static set(input, output, key, value, callback, callbackClass) {
        if (operate.is(output).includes("HTML")) { //Only HTML creation
           console.log("setting",key, value,"in",output)
           if(operate.isIn(key,htmlAttributesList)){
            output.setAttribute(key,value)
           } else {

            var buffer = output;
            buffer[key] = input[key];
            buffer=output;

           }
           
        }
        return output;
    }

}

class conductor {
    //this function calls a callback function with a and b parameter. Conducted Routes have to be registered before else will throw error.
    //  on param = [ anyEvent ]
    static conduct(a, b, c, d, callback, callbackClass) {
    // console.log(a, b, callback)
        //eval(callbackClass.callback(a, b))
        var response = callbackClass[callback](a, b, c, d);
      //  console.log("conduct response",response)
        return response;
    }

    static conductForEachFlow(a, b, options) {


    }
}

class process { 
    static init(input, output,key,value ,callback, callbackClass) {
        operate.isNotEmpty(callback) ? conductor.conduct(input, output, '', '', callback, callbackClass) : null;
        
        // var ehhStyleSheet = entity.create('style', document.getElementsByTagName('head')[0],'','' ,'append', entity);
        // ehhStyleSheet.innerHTML = actionEditorCssRules;     
    }
    static iterateObj(input, output, key, value, callback, callbackClass) { 
        
        for (var key in input){ 
         //   console.log("found", key, input[key],typeof input[key]);
            if (operate.is(input[key]) === 'Object') {
                var buffer = entity.create(key,output,key,input[key]);
                process.iterateObj(input[key],buffer,key,input[key])
                entity.append(buffer,output);
                //console.log("appended Object",buffer,output)
            } else if (operate.is(input[key]) === 'Array') {
                console.log("found Array", key, input[key])
                var buffer = entity.create(key,output,key,input[key]);
                process.iterateArr(input[key],buffer,key,input[key])
                entity.append(buffer,output);

            } else if (operate.is(input[key]) == 'String' || operate.is(input[key]) == 'Boolean' ) {
              //  console.log("found property", key, input[key],typeof input[key])
                entity.set(input,output,key,input[key])
            }
            //console.log(callbackClass,callback)
            //   console.log(key, input[key])
            //var response = operate.isNotEmpty(callback) ? conductor.conduct(input, output, key, input[key], callback, callbackClass) : null;
            if (operate.isNotEmpty(callback)) {
                var response = conductor.conduct(input, output, key, input[key], callback, callbackClass);
              
            }
        }
      //  console.log("iterator respon", response);
        return response;
    }
    static iterateArr(input, output, key, value, callback, callbackClass) { 
        console.log("Iterating Array", input, output, key, value, callback, callbackClass);

        for (var i = 0; i < input.length; i++){

            if (operate.is(input[i]) === 'Object') {
                console.log("Object found in array", input[i]);
                var buffer = entity.create(input[i].name,output,key,value);
                process.iterateObj(input[i],buffer,key,value)
                entity.append(buffer,output);

            } else if (operate.is(input[i]) === 'Array') {
                console.log("found Array", key, input[key])
            } else if (operate.is(input[i]) == 'String') {
              //  console.log("found property, Set Attributes in output", key, input[key])
                entity.set(input,output,key,input[key])
            } else {

                console.log("stray found")
            }
            //console.log(callbackClass,callback)
            //   console.log(key, input[key])
            //var response = operate.isNotEmpty(callback) ? conductor.conduct(input, output, key, input[key], callback, callbackClass) : null;
            if (operate.isNotEmpty(callback)) { 

                var response = conductor.conduct(input, output, key, input[key], callback, callbackClass);
              
            }
        }
      //  console.log("iterator respon", response);
        return response;
    }
    static processRequest(request) {

      // console.log("processing req", request.input.name, request.output, request.callback);
        !operate.isNotEmpty(request.input.entity) ? isRequired() : null;
        if (!Object.keys(request.input).length) return;// if there's no keys, then the call returns undefined
        switch (request.input?.constructor) {
            case Object:
                var buffer = conductor.conduct(request.input.entity, request.output, '', '', request.callback, request.callbackClass);
                var response = process.iterateObj(request.input, buffer, '', '', 'set', entity);
            case Array:
              //  process.iterateArr(request.input, output, key, value, callback);
            case String:
            //  process.processString(input, output, callback);
            default:
            // return
        }
      //  return output;
        
        
        console.log(buffer)
       // console.log("response",response)
       return response;
    }


}


