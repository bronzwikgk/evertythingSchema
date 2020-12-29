class Model {
    constructor() {
        // The state of the model, an array of entity objects, prepopulated with some data
        this.entitys = [
            { id: 1, content: 'Run a marathon', complete: false },
            { id: 2, content: 'Plant a garden', complete: false },
        ]
    }

    addentity(entityText) {
        const entity = {
            id: this.entitys.length > 0 ? this.entitys[this.entitys.length - 1].id + 1 : 1,
            text: entityText,
            complete: false,
        }

        this.entitys.push(entity)
    }

    // Map through all entitys, and replace the text of the entity with the specified id
    editentity(id, updatedText) {
        this.entitys = this.entitys.map((entity) =>
            entity.id === id ? { id: entity.id, text: updatedText, complete: entity.complete } : entity,
        )
    }

    // Filter a entity out of the array by id
    deleteentity(id) {
        this.entitys = this.entitys.filter((entity) => entity.id !== id)
    }

    // Flip the complete boolean on the specified entity
    toggleentity(id) {
        this.entitys = this.entitys.map((entity) =>
            entity.id === id ? { id: entity.id, text: entity.text, complete: !entity.complete } : entity,
        )
    }
}
class View {
    constructor() { }
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }
}

const ehhApp = new Controller(new Model(), new View())