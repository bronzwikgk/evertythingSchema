var actionEditor = {
    actionEditorBlock:{
        name:'div',
        contentEditable: true,
        class : 'actionEditor-block',
        id: 'actionEditor-block',
        lineNumbers: true,
        innerText:"Write whatever you can think of...",
        //mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
        //output: ['self', 'output'],
        state: 'idle',
        style: 'min-height : 200px; width: 400px; border-top: 0px; padding: 21px; overflow: auto;',
        },
    toolBar:[
        {   name:'button',
            type: 'div',
            'innerText':'add',
            'id':'add',
            'onclick' : 'console.log("addButtonClicked")'
        },
        {   name:'button',
            type: 'div',
            'innerText':'BTN',
            'onclick' : 'console.log("i was clicked")'
        },
        {   name:'button',
            type: 'button',
            'innerText':'BTN',
            'onclick' : 'console.log("i was clicked")'
        },
        {   name:'button',
            type: 'button',
            'innerText':'BTN',
            'onclick' : 'console.log("i was clicked")'
        },
        {   name:'button',
            type: 'button',
            'innerText':'BTN',
            'onclick' : 'console.log("i was clicked")'
        },
        
    ]
}
var htmlAttributesList = [ 'name','label','onclick','lineNumbers', 'class','id','text','title','content','value','type']

function deepIterate(source,target ) {
   // if (typeof target !== 'object' || typeof source !== 'object') return false; // target or source or both ain't objects, merging doesn't make sense
    for (var prop in source) {
       // if (!source.hasOwnProperty(prop)) continue; // take into consideration only object's own properties.
        if (prop in target) { // handling merging of two properties with equal names
            if (typeof target[prop] !== 'object') {
         //       target[prop] = source[prop];
            } else {
                if (typeof source[prop] !== 'object') {
           //         target[prop] = source[prop];
                } else {
                    if (source[prop].concat) { // two arrays get concatenated
             //           target[prop] = target[prop].concat(source[prop]);
                    } else { // two objects get merged recursively
                        target[prop] = deepIterate(target[prop], source[prop]);
                    }
                }
            }
        } else { // new properties get added to target
            target[prop] = source[prop];
        }
    }
    return target;
}

class process{
    static processReq(input,output,){

        //create output
        //filter keys
        //filter values
        //append to output
        // getChild

    }
    
    static iterateObj(input,output){

        for(var key in input){
           var value = input[key];
        //console.log("found",key,input[key])
        if(operate.is(value)=== 'Object'){
            var buffer = Entity.create(input,output,key);
           // console.log("Object",key, value,buffer);
            process.iterateObj(input[key],buffer,key,value)
            Entity.append(buffer,output);
        } else if(operate.is(value)=== 'Array'){
            var buffer = Entity.create(input,output,key.name);
            process.iterateArr(input[key],buffer,key,value)
            Entity.append(buffer,output);
           // console.log('Array',key, value, buffer);
        } else if(operate.is(value) === 'String'){
           // console.log('String',key, value);
            Entity.set(input,output,key,value);
            //Entity.set(input,this.entity,key,value);           
        }
    }
    console.log('Iterate Objoutput',output)
    return output;
}

static iterateArr(input, output, key, value, callback, callbackClass) { 
    //  console.log("Iterating Array", input, output, key, value);

      for (var i = 0; i < input.length; i++){
         console.log("Object found in array", input[i]);

          if (operate.is(input[i]) === 'Object') {

            //  console.log("Object found in array", input[i].name);
           // var response = conductor.conduct(input, output, input[i].name, '', callback, callbackClass);
           var response = Entity.create(input[i],output,input[i].name);
           // console.log("Object",key, value,buffer);
            process.iterateObj(input[i],response,input[i].name,)
            Entity.append(response,output);
             //console.log("Object in array",response)
          } else if (operate.is(input[i]) === 'Array') {
              console.log("found Array", key, input[key])
          } else if (operate.is(input[i]) == 'String') {
              console.log("found property, Set Attributes in output", key, input[key])
             // Entity.set(input,output,key,input[key])
          } else {

              console.log("stray found")
          }
          //console.log(callbackClass,callback)
          //   console.log(key, input[key])
          //var response = operate.isNotEmpty(callback) ? conductor.conduct(input, output, key, input[key], callback, callbackClass) : null;
          if (operate.isNotEmpty(callback)) { 

            //  var response = conductor.conduct(input, output, key, input[key], callback, callbackClass);
            
          }
      }
     console.log("iterator Array response", response);
      return response;
  }


}

class Entity {
    constructor(input,output){
        Object.entries(input).forEach(entry => { const [key, value] = entry;
            
            if(operate.is(value)=== 'Object'){
                var buffer = Entity.create(input,output,key);
                process.iterateObj(value,buffer,key);
                Entity.append(buffer,output);
                console.log("Object",key, value,output);
            } else if(operate.is(value)=== 'Array'){
                
                var buffer = Entity.create(input,output,key);
                console.log('Array',key, value, buffer);
                process.iterateArr(value,buffer,key);
                Entity.append(buffer,output);
                
            } else if(operate.is(value) === 'String'){
                console.log('String',key, value);
              //  Entity.set(input,this.entity,key,value);           
            }  
            console.log("Creator",this.output)
         //  check if property is an Object, send for recursion.
        });
    }


    static create(input, output, key, value,callback,callbackClass) {
       
        if (operate.is(output).includes("HTML")) { //Only HTML creation
          console.log('create request for ',key)
            var response = document.createElement(key);
           // Entity.set(input, response, 'id', key + entityIndex.next().value);
        }
        if (operate.is(output).includes("Object")) { //Only HTML creation
         console.log("create request for ",input,output,key,value)     
         
         response = new Object()
        
            //response = key;
            //response.set(value,key)
            //var response = document.createElement(key);
            if(value){
            //    process.iterateObj(value,response,key,value)
            }
           // entity.set(input, response, 'id', key + index.next().value);
        }
       

//        operate.isNotEmpty(callback) ? conductor.conduct(response, output, '', '', callback, callbackClass) : null;
        

        if (operate.isNotEmpty(callback)) {

          //  var response = conductor.conduct(response, output, '', '', callback, callbackClass);
        }
      //  console.log("response", response);
            if(!response) console.log("no response", output);
        return response;
    }
    static append(input, output, key, value, callback, callbackClass) {
   // console.log('appending', input,output)

        if (operate.is(output).includes("HTML")) { //Only HTML creation
            var response = output.appendChild(input);
        }
        if (operate.is(output).includes("Object")) { //Only HTML creation
           // console.log("append request for ",input,output)     
            output[key] = input;
            var response = output;   
            //var response = document.createElement(key);
               if(value){
               //    process.iterateObj(value,response,key,value)
               }
            }
           


   // console.log('appended',response)
        return response;
    }
    static set(input, output, key, value, callback, callbackClass) {
       // console.log("setting",key, value,"in",output)
        if (operate.is(output).includes("HTML")) { //Only HTML creation
          
           if(operate.isIn(key,htmlAttributesList)){
           // console.log("setting",key, value,"in",output)
            output.setAttribute(key,value)
            //console.log(output);
           } else {
            //var buffer = output;
            output[key] = input[key];
            //buffer=output;

           }
           
        }
        return output;
    }
}
ehhAppOutput = document.createElement('ehhOutput');

var temp = new Entity(actionEditor,ehhAppOutput);
console.log(temp);