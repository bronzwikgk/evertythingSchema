
/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
class EntityController {
    constructor(model, view) {
        this._model = model;
        this._view = view;
        view.on('listModified', idx => this.updateSelected(idx));
        view.on('addButtonClicked', () => this.addEntity());
        view.on('delButtonClicked', () => this.delEntity());
    }

    addEntity() {
        const entity = window.prompt('Add Entity:', '');
        if (entity) {
            this._model.addEntity(entity);
        }
    }

    delEntity() {
        const index = this._model.selectedIndex;
        if (index !== -1) {
            this._model.removeEntityAt(index);
        }
    }

    updateSelected(index) {
        this._model.selectedIndex = index;
    }
}


