// This creates an index which when called with sytax of createIndex.next().value will give you an index new value.
function* createIndex() {
    let number = 1;
    while (true)
        yield number++;
}
const index = createIndex();
var addButton = {
    name : 'addActionEditor',
    

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
    // Create an element with an optional CSS class
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
        return element
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
      this.createListener();
      //console.log(this);
      this.view.render();
    }
    createListener() {
        var bodyListener = document.addEventListener('click',this.onClick);
        console.log('listernerCreated',bodyListener)
    }
    onClick(e){
        console.log("I was called")
        e.preventDefault();

    }

}


const ehhApp = new Controller(new Model(), new View())
//ehhApp.view.render();
window.onload = ehhApp.init();


//input = document.createElement("div");

//console.log(ehhApp.View.createElement("div"))