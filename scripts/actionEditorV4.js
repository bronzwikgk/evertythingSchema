class Model {
    constructor(input) {
        this.entityList = [{
            id : 'input.name' + createIndex(),
            content : input.content,
        }]

        addEntity(entity) {
            this.entityList.push(entity);
        }
    }
}

class View {
    constructor() { 

    }
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }
}

const ehhApp = new Controller(new Model(), new View())