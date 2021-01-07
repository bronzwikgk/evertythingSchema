
 /** The View.View presents the model and provides
 * the UI events.The controller is attached to these
 * events to handle the user interaction.
 */
class EntityView extends EventEmitter {
    constructor(model, output) {
        super();
        this._model = model;
        this._output = this.createView(model,output);
        console.log("View >>>",model,this._output);


        // attach model listeners
      //  model.on('itemAdded', () => this.rebuildList()).on('itemRemoved', () => this.rebuildList());

        // attach listeners to HTML controls
        // elements.list.addEventListener('change', e => this.emit('listModified', e.target.selectedIndex));
        // elements.addButton.addEventListener('click',() => this.emit('addButtonClicked'));
        // elements.delButton.addEventListener('click',() => this.emit('delButtonClicked'));
    }

    showEntity() {
        this.createView();
        
    }

    createView() { 

        response = Entity.create(model,this._output);
        return response;
        
        // create elements here...
        // const list = this._elements.list;
        // list.options.length = 0;
        // this._model.getItems().forEach(
        //     item => list.options.add(new Option(item)));
        // this._model.selectedIndex = -1;
    }
}
