function* createIndex() {
    let number = 1;
    while (true)
        yield number++;
}

const index = createIndex();


actionEditor = document.createElement('div', { id: "actionEditor" })
   //var actionEditorCss =  { 'min - height': '200px'; width: 400px; border - top: 0px; padding: 21px; overflow: auto;box - shadow: 20px 20px 60px #d3d3d3, -20px - 20px 60px #ffffff;}
actionEditorAttributes = {
    contentEditable: true,
    class : 'actionEditor',
    id: 'actionEditor' + index.next().value,
    lineNumbers: true,
    mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
    output: ['self', 'output'],
    state: 'idle'
    }

var actionEditorCssRules = ".actionEditor { min-height: 200px; width: 400px; border-top: 0px; padding: 21px; overflow: auto;  }"+
    ".actionEditor:focus { background: #fafdfd; border-radius: .5rem; resize: both; outline: none; border-top:0px; box-shadow: rgb(211, 211, 211) 20px 20px 60px, rgb(255, 255, 255) -20px -20px 60px;}"

function setStyle(objId, propertyObject) {
    var elem = document.getElementById(objId);
    for (var property in propertyObject)
        elem.style[property] = propertyObject[property];
}
//Object.assign(yourelement.style, { fontsize: "12px", left: "200px", top: "100px" });
class entity {
    static create(input, output, key, value,callback,callbackClass) {
        if (operate.is(output).includes("HTML")) { //Only HTML creation
           // console.log("create request for ",input)
            var response = document.createElement(input);
          //  entity.set(input, response, "", "", 'id', input + index.next().value);
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
         //   console.log("setting",input,"in",output)
           // Object.assign(output,input);
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
        process.iterate(actionEditorAttributes, input,'','', 'set', entity);
       var ehhStyleSheet = entity.create('style', document.getElementsByTagName('head')[0],'','' ,'append', entity);
        ehhStyleSheet.innerHTML = actionEditorCssRules;  
        
    }
  
    static iterate(input, output, key, value, callback, callbackClass) { 
        
        for (var key in input) { 
            if (operate.is(input[key]) === 'Object') { 
                console.log("found Object", key, input[key])
            } else if (operate.is(input[key]) === 'Array') {
                console.log("found Array", key, input[key])
            } else if (operate.is(input[key]) === 'string') {
                console.log("found string", key, input[key])
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
                var response = process.iterate(request.input, buffer, '', '', 'set', entity);
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
window.onload = process.init(actionEditor,ehhApp,'','','append',entity);
document.getElementsByTagName('body')[0].appendChild(ehhApp);
//currentStyleSheet = document.styleSheets[1];
//console.log(JSON.stringify(currentStyleSheet.rules[2].cssText));
var responseReq = process.processRequest(request);
ehhApp.appendChild(responseReq);
console.log("output", responseReq)
//const [start, end] = getSelectionOffset(container)


function tempo(params) {
    console.log("iam ")
  //  console.log("caretPosition", document.caretPositionFromPoint(clientX, clientY));
    /* Place the caret at the beginning of an  actionEditor.block */

   var content = actionEditor1.innerText;
    console.log(content.length);
    actionEditor1.setSelectionRange(content.length, content.length+1)
   // selection = window.getSelection();
   // console.log(selection,'selection')
    //moveCursorToEnd(actionEditor1);
    //var caretPosition = document.caretRangeFromPoint();
    //console.log(caretPosition);
   // window.getSelection().collapse(actionEditor1, 0);
  
}

window.onload = focusOnEntity();


function moveCursorToEnd(el) {
    if (typeof el.selectionStart == "number") {
        console.log(el.selectionStart)
        el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
    }
}

function focusOnEntity() {
    var entity = document.getElementById('actionEditor1');
    entity.focus();
   
}