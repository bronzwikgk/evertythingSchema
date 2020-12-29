// This creates an index which when called with sytax of createIndex.next().value will give you an index new value.
function* createIndex() {
    let number = 1;
    while (true)
        yield number++;
}
const index = createIndex();

var actionEditor = {
    name : 'actionEditor',
    tagName: 'div',
    nodeType : 1,
    attributes : {
        contentEditable: 'true',
        draggable : 'true'
    },
    url: window.location.url,
    parent:{},
}
// var appConfig = {
//     appView: ehhApp.View.createElement('div'),
//     name : 'ehhAppView'
// }
// var temp = document.createElement(actionEditor.tagName);
// temp.name = actionEditor.name;
// temp.setAttribute('name', actionEditor.name);
// console.log(JSON.stringify(temp), temp)



class Model1 {
    constructor() {
        // The state of the model, an array of todo objects, prepopulated with some data
        this.todos = [
            { id: 1, text: 'Run a marathon', complete: false },
            { id: 2, text: 'Plant a garden', complete: false },
        ]
    }

    addTodo(todoText) {
        const todo = { 
            id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
            text: todoText,
            complete: false,
        }

        this.todos.push(todo)
    }

    // Map through all todos, and replace the text of the todo with the specified id
    editTodo(id, updatedText) {
        this.todos = this.todos.map((todo) =>
            todo.id === id ? { id: todo.id, text: updatedText, complete: todo.complete } : todo,
        )
    }

    // Filter a todo out of the array by id
    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id)
    }

    // Flip the  boolean on an entity's requested PropertyKey. Entity is Identifiable by ID. For eg. State.Theme.Mode
    toggleEntityProperty(entityId, propertyKey) {
        //find the Entity by ID. 
        //find the key
    }
}

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
        this.ehhApp = this.getElement('#ehhView')
    }
    init() {
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
}

const ehhApp = new Controller(new Model(), new View())
input = document.createElement("div");

//console.log(ehhApp.View.createElement("div"))