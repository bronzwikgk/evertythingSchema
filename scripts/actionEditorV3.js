/**
 * model
 */
class ActionEditorModel{
    constructor(name) {
        this.id = 'actionEditor',
            
        
    }
}
 /**
 * Constroller :: listen and conduct action || event && View && Model 
 */

class ActionEditorControl{
    constructor(actionEditorView,actionEditorModel) {
        this.actionEditorModel = actionEditorModel
        this.actionEditorView = actionEditorView
    }
    init() {
        this.actionEditorView.init();
    }
    getActionData() {
        return actionData;
    }
    renderActionEditor() {
        const actionData = ActionEditorControl.getActionData();
    }

 }


/**
 * view :: Handle DOM
 */
class ActionEditorView { 
    init() {
        console.log(":)")
    }
}
const actionEditorView = new ActionEditorView();
const actionEditorModel = new ActionEditorModel();

const actionEditorApp = new ActionEditorControl(actionEditorView,actionEditorModel);
actionEditorApp.init();