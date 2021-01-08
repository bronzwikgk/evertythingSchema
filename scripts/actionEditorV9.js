//Patterns .Notify.Subscriber for event listerner.
//Observer for Controller.
//constructor for Model.
//state pattern for View.

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


class process {
    static iterate(input, output, key, value, callback, callbackClass) {
        if (!Object.keys(input).length) return;// if there's no keys, then the call returns undefined
        switch (input?.constructor.name) {
            case Object:
               var response = process.iterateObj(input, output, key, value,callback,callbackClass);
            case Array:
                console.log('sending for array Iteration',input)
                var response = process.iterateArr(input, output, key, value, callback,callbackClass);
            case String:
                //process.processString(input, output, callback);
            default:
            // return
        }
       // console.log('Iterate retrunging',output)
        return output;
    }

     static iterateObj(input, output, key, value, callback, callbackClass) { 
        
        for (var key in input){ 
         //   console.log("found", key, input[key],typeof input[key]);
            if (operate.is(input[key]) === 'Object') {
    
                if (operate.isNotEmpty(callback)) {
                     //   console.log("Sending to",callbackClass,callback,input,key,input[key],output)
                    var response = conductor.conduct(input, output, key, input[key], callback, callbackClass);
                }
              //var response = 
            } else if (operate.is(input[key]) === 'Array') {
              //  console.log("found Array", key, input[key])

                
             //   console.log("iterate array response",response)
                if (operate.isNotEmpty(callback)) {
                   //   console.log("Sending to",callback,input,key)
                   var response = conductor.conduct(input[key], output, key, input[key], callback, callbackClass); 
                  //   var response = conductor.conduct(input, output, key, input[key], callback, callbackClass);  
               }
                
            } else if (operate.is(input[key]) == 'String' || operate.is(input[key]) == 'Boolean' ) {
                console.log("found property", key, input[key],typeof input[key])
                Entity.set(input,output,key,input[key])
            }
            //console.log(callbackClass,callback)
            //   console.log(key, input[key])
            //var response = operate.isNotEmpty(callback) ? conductor.conduct(input, output, key, input[key], callback, callbackClass) : null;
            
        }
       //console.log("iterator respon", output);
        return output;
    }
    static iterateArr(input, output, key, value, callback, callbackClass) { 
       //  console.log("Iterating Array", input, output, key, value);
 
         for (var i = 0; i < input.length; i++){
            console.log("Object found in array", input[i]);
             if (operate.is(input[i]) === 'Object') {
               //  console.log("Object found in array", input[i].name);
               var response = conductor.conduct(input, output, input[i].name, '', callback, callbackClass);
                console.log("Object in array",response)
             } else if (operate.is(input[i]) === 'Array') {
                 console.log("found Array", key, input[key])
             } else if (operate.is(input[i]) == 'String') {
                 console.log("found property, Set Attributes in output", key, input[key])
                 Entity.set(input,output,key,input[key])
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
       //  console.log("iterator respon", response);
         return response;
     }



}


const entityIndex = createIndex();
class localStorageHelper{

}

class Entity {  
    constructor(input,output,key,value){
        console.log('entity constructor',input,output.constructor.name)
        switch (input?.constructor) {
            case Object:    
               this.entity = process.iterate(input,output,'','','create',Entity);
                console.log("input is Object         >>",this.entity);
            case Array:
                // this.entity = process.iterate(input,output,'','','create',Entity);
                // console.log("input is Object         >>",this.entity);
            case String:
            
            default:
        }
        this.entity.id = input.id + entityIndex.next().value;
        // console.log("entity constructor",input,output);
          //  this.entity = this.create(input,output,key);
          //  console.log(this.entity)
        
          getAttributes
          Object.entries(input).forEach(entry => { const [key, value] = entry;
              entity.set(input,this.entity,key,value);           
             // console.log(key, value);
           //  check if property is an Object, send for recursion.
          });

        //   entity.append(this.entity,output);
      }
    static create(input, output, key, value,callback,callbackClass) {
       
        if (operate.is(output).includes("HTML")) { //Only HTML creation
        //  console.log('create request for ',key)
            var response = document.createElement(key);
            if(value){   
                process.iterate(value,response,key,value,'create',Entity);
                console.log('found value',value,response)
            }  
            Entity.append(response,output);
            //Entity.set(input, response, 'id', key + entityIndex.next().value);
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
        return output;
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

window.onload = init();

function init(){

    ehhAppOutput = document.createElement('ehhOutput');
    //ehhAppView = new EhhVew(actionEditor,ehhAppOutput);
    ehhAppModel = new Entity(actionEditor,ehhAppOutput);
    //var ehhApp = new Controller(ehhAppModel,ehhAppView);

    document.getElementsByTagName('body')[0].appendChild(ehhAppOutput);
    console.log("all set and done")
}


