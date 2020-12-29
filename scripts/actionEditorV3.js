/**
 * model
 */
class ActionEditorModel{
    
}
 /**
 * Constroller :: listen and conduct action || event && View && Model 
 */

class ActionEditorControl{
    constructor(actionEditorView) { 
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
        console.log("render HTML here")
    }
}
const actionEditorView = new ActionEditorView();
const actionEditorApp = new ActionEditorControl(actionEditorView);
actionEditorApp.init();