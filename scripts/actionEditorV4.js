class Model {
    constructor(input) {
        this.entityList = {
            id : 'input.name' + createIndex(),
           // content : input.content,
        }
    }

}

class View {
   
    constructor() {

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
console.log(ehhApp)
//console.log(ehhApp.View.createElement("div"))