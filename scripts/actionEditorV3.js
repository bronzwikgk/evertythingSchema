/**
 * model
 */
class ActionEditorModel{
    constructor(input) {
      //  console.log(input)
             this.actionEditor,
            this.id = 'actionEditor',
       //     this.value = input.value,
            this.tagName = {
                value: null,
                operate: ['isString', 'isNotEmpty']
            }
        this.attribute = {
            contentEditable: null,
            operate:['isBoolean']
        }
           // this.config = actionEditorConfig;
    }


}
 /**
 * Constroller :: listen and conduct action || event on  View && Model 
 */

class ActionEditorControl{
    constructor(actionEditorView,actionEditorModel) {
        this.actionEditorModel = actionEditorModel
        this.actionEditorView = actionEditorView


        //display default Content
        this.onContentChange(this.actionEditorModel)
    }

    onContentChange() {
        
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




// inputElement = document.createElement("div");
// inputElement.value = "aaa";
// console.log(inputElement.value)

const actionEditorView = new ActionEditorView();
const actionEditorModel = new ActionEditorModel();

const actionEditorApp = new ActionEditorControl(actionEditorView,actionEditorModel);
actionEditorApp.init(inputElement);