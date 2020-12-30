// This creates an index which when called with sytax of createIndex.next().value will give you an index new value.
function* createIndex() {
    let number = 1;
    while (true)
        yield number++;
}
const index = createIndex();
var addButton = {
    name: 'addActionEditor',
    type: 'button',
    titleText: "[ Add ]",
    onclick : 'ehhApp.onClick()'
}
var actionEditor = {
    name : 'actionEditor',
    htmlContent : '',
    tagName: 'div',
    nodeType : 1,
    attributes : {
        contentEditable: 'true',
        draggable : 'true',
        spellcheck: true,
        height: '15rem',
        minHeight: '5rem',
        placeholder: 'Enter text here...',
        translate: 'no',
        defaultParagraphSeparator: 'p',
        defaultFontName: 'Poppins'
    },
    customClasses: [
        {
          name: "state",
          class: "editable",
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: "titleText",
          class: "titleText",
          tag: "h1",
        },
      ],
    url: window.location.url,
    parent:{
        value : null,
        operate : ['isNotEmpty'] 
    },
    selector: 'my-app',
  //  templateUrl: './app.component.html',
    storage:'localStorage',
    nonWordCharList : '/\\()"\':,.;<>~!@#$%^&*|+=[]{}`?-…',
    lineNumbers: true,
         mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
         output : ['self','output'],
         tabSize: 2,
         indentWithTabs: true

}

// var appConfig = {
//     appView: ehhApp.View.createElement('div'),
//     name : 'ehhAppView'
// }
// var temp = document.createElement(actionEditor.tagName);
// temp.name = actionEditor.name;
// temp.setAttribute('name', actionEditor.name);
// console.log(JSON.stringify(temp), temp)


class Model {
    constructor() {
        this.entityCollection = [{
            id: 'entity - ' + index.next().value
           // content : input.content,
        }]
    }
    addEntity(entity) {
        entity.id = this.entityCollection.id; 
        this.entityCollection.push(entity);
        console.log(this);

    }
    deleteEntity(entityId) { 
        //find Entity. delete it.
        this.entityCollection = this.entityCollection.filter((entity) => entity.id !== id)
    }
}
class View {
   
    constructor() {
      //  this.ehhApp = this.getElement('#ehhView')
    }

    render() {
        console.log(":)")

    }
     // Retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector)
        return element
    }
}

class Controller {
    
    constructor(model, view) {
        this.model = model
        this.view = view
    }
    init() {
        this.create('click', 'ehhListener',this.onAction);
      //console.log(this);
      this.view.render();
    }
    /**
     * This method creates every kind of output object, matching the type of outputRequested
     * @param {*} input 
     * @param {*} output 
     */
    create(input, output, callback,options) {
    //console.log(arguments)
        if (operate.isEmpty(output)) return;// if there's no keys, then the call returns undefined
        switch (output) {
            case 'ehhHtml':
                var newEntity = document.createElement(input);
                console.log(newEntity)
            case 'ehhListener':
                var newEntity = document.addEventListener(input, callback);
             //   console.log('listernerCreated', operate.is(newEntity))    
            default:   
        }
        return newEntity;
    }
    onAction(e) {
        console.log(e.type);
        switch (e.type) {
        }
        console.log("I was called")
        e.preventDefault();
    }
}
const ehhApp = new Controller(new Model(), new View())
//ehhApp.view.render();
window.onload = ehhApp.init();


//input = document.createElement("div");

//console.log(ehhApp.View.createElement("div"))