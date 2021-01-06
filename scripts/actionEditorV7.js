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
        mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
        output: ['self', 'output'],
        state: 'idle',
        style: 'min-height : 200px; width: 400px; border-top: 0px; padding: 21px; overflow: auto;',
        },
        toolbar : {
            "topNav": [
                { "button": "new" },
                { "button": "new2" },
                { "button": "new3" }
            ]
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
           //console.log("setting",key, value,"in",output)
           var prop = {key,value};
            //Object.assign(output,prop);
            output.setAttribute(key, value);
        }
       // console.log('attribute Set', output)
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
             //   entity.set(input,output,key,input[key])
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

var requestEntity = {
    entity: 'input',
    class: 'toolBar',
    type: 'button',
    value: "do you like cheese"
}

var request = {
    input: requestEntity,
    output: document.getElementsByTagName('body')[0],
    callback: 'create',
    callbackClass: entity
}



ehhApp = document.createElement('ehhOutput');

//window.onload = process.init(actionEditor,ehhApp,'','','append',entity);
//document.getElementsByTagName('body')[0].appendChild(ehhApp);
//currentStyleSheet = document.styleSheets[1];
//console.log(JSON.stringify(currentStyleSheet.rules[2].cssText));
//var responseReq = process.processRequest(request);
//ehhApp.appendChild(responseReq);
//console.log("output", responseReq)
//const [start, end] = getSelectionOffset(container)


var tempReq = {
    div:{
        name: 'div',
        type: 'input',
        menu:{
            type:'div',
            name:'menu',
        }
    },
    ac2:{
        name: 'div',
        type: 'div',
        menu:{
            type:'div',
            name:'menu',
        }
    }
}
tempOut = document.createElement('div', { id: "tempOut" })



function test(){
b = process.iterateObj(inputObjA,tempOut);
document.getElementsByTagName('body')[0].appendChild(tempOut);
console.log(tempOut)
}


var inputObjA = {
    "schema": {
        "field": {
            "input": "string",
            "lable": "A field"
        }
    },
    "form": [
        {
            "key": "field"
        },
        {
            "button": "submit",
            "lable": "Submit"
        }
    ]
}


var inputObjB = {
    "schema": {
        "field": {
            "input": "string",
            "lable": "A field"
        }
    },
    "form": [
        {
            "key": "field"
        },
        {
            "button": "submit",
            "lable": "Submit"
        }
    ]
}


test();
// function tempo(params) {
//     console.log("iam ")
//   //  console.log("caretPosition", document.caretPositionFromPoint(clientX, clientY));
//     /* Place the caret at the beginning of an  actionEditor.block */

//    var content = actionEditor1.innerText;
//     console.log(content.length);
//     actionEditor1.setSelectionRange(content.length, content.length+1)
//    // selection = window.getSelection();
//    // console.log(selection,'selection')
//     //moveCursorToEnd(actionEditor1);
//     //var caretPosition = document.caretRangeFromPoint();
//     //console.log(caretPosition);
//    // window.getSelection().collapse(actionEditor1, 0);
  
// }

// window.onload = focusOnEntity();


// function moveCursorToEnd(el) {
//     if (typeof el.selectionStart == "number") {
//         console.log(el.selectionStart)
//         el.selectionStart = el.selectionEnd = el.value.length;
//     } else if (typeof el.createTextRange != "undefined") {
//         el.focus();
//         var range = el.createTextRange();
//         range.collapse(false);
//         range.select();
//     }
// }

// function focusOnEntity() {
//     var entity = document.getElementById('actionEditor1');
//     entity.focus();
   
// }