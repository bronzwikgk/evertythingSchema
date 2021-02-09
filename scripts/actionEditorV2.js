/**
 * blockStatement: A block statement(or compound statement in other languages) is used to group zero or more statements.
   The block is delimited by a pair of braces("curly brackets") and may optionally be labelled.
   { StatementList }
    LabelIdentifier: { StatementList }
 * 
 * 
 * 
 * 
 * 
 * 
 */

var actionEditorConfig = {};

class ActionEditor {
    constructor(argA, argB, config) {
        this.id = 'actionEditor' + createIndex();
        this.tagName = {
            value: null,
            operate: ['isString', 'isNotEmpty']
        };
        this.config = actionEditorConfig;
      
    }
}
class Entity extends ActionEditor{

}
class Range extends Entity { 
    constructor() {
        this.name = "ehhRange"

    }
}
class BlockStatement{
    constructor() {
        this.identifier = "{";
        //blockStatement rules to be added.
    
    }

}
class ActionController{
    //readEntity
    //addEntity
    //UpdateEntity
    //RemoveEntity
}
// Store Class: Handles Storage
class Store {
    static getItem() {
        let entitys;
        if (localStorage.getItem('getEntity') === null) {
            entitys = [];
        } else {
            entitys = JSON.parse(localStorage.getItem('getEntity'));
        }

        return entitys;
    }

    static setItem(entity) {
        const entitys = Store.getentitys();
        entitys.push(entity);
        localStorage.setItem('entitys', JSON.stringify(entitys));
    }

    static removeItem(id) {
        const entitys = Store.getentitys();

        entitys.forEach((entity, index) => {
            if (entity.id === id) {
                entitys.splice(index, 1);
            }
        });

        localStorage.setItem('entitys', JSON.stringify(entitys));
    }
}
class renderView{

    static renderActionEditor() {
        return console.log("loading view");
        //this function reqs actionEditor key from store and builds a ui. It also takes care of the output
    }

    static insertInEditor(editor, input, insertRange) {
    // Find the current cursor position
    const startPos = textArea.selectionStart;
    const endPos = textArea.selectionEnd;
    // Get the current contents of the editor
    const before = textArea.value;
    // Get everything to the left of the start of the selection
    const left = before.substring(0, startPos);
    // Get everything to the right of the start of the selection
    const right = before.substring(endPos);
    // Concatenate the new contents.
    textArea.value = left + contents + right;
    // Move the cursor to the end of the inserted content.
    const newPos = startPos + contents.length;
    textArea.selectionStart = newPos;
    textArea.selectionEnd = newPos;
    //    app.setModified(true);
    }

    static clearActionEditor() {
    
    }
}
var newActionEditor = renderView.renderActionEditor();
console.log(newActionEditor)

