
// /**
//  * 
//  * 
//  */
// class actionEditor1{
//     constructor(parent) {
//         this.id = 'actionEditor' + createIndex();
//         this.name = "actionEditor",
//         this.style = style,
//         this.attributes = attributes,
//         this.nonWordCharList = '/\\()"\':,.;<>~!@#$%^&*|+=[]{}`?-…',
//         this.parent = parent,
//         this.url = document.location.url,
// this.accepts = [{ 
//  mimeTypes: ['text/*'],
//    extensions: ['js', 'css', 'txt', 'html', 'xml', 'tsv', 'csv', 'rtf']
//    }];
//         this.textBuffer = { point, range },
//         this.options = {
//         autofocus: true,
//         lineNumbers: true,
//         mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
//         this.output : ['self','output'],
//         tabSize: 2,
//         indentWithTabs: true
//         };

//     }



// }
class entityRegistry {
    constructor() {
        this.items = new WeakSet();
    }
    addItem(entity) {
        if (this.hasItem(entity)) {
            throw new Error(
                `The entity can only contain one instance of item ${item}`
            );
        }
        return this.items.add(item);
    }
    removeItem(item) {
        return this.items.delete(item);
    }
    hasItem(item) {
        return this.items.has(item);
    }
};

entityRegistry.addItem(a);
console.log(a)


var actionEditor = document.getElementById("ehhActionEditor");

actionEditor.addEventListener('keyup', refresh);

var jsonSyantax = ["{", "["]

function refresh(e) {
    autoStart = true;
    var actionEditor = document.getElementById("ehhActionEditor");
    var output = document.getElementById("output");
    var buffer = actionEditor.value;
    processBuffer(e, buffer);
    //   console.log(buffer);
    output.innerHTML = buffer;
    buffer = "";
}

function insertInEditor(editor, input, insertRange) {

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
    app.setModified(true);
}
function processBuffer(event, input, buffer) {
    // console.log(event.key, event.which,input)
    //detect Short Cut....Look Up Short Dic..Execute Command
    //Detect Sytax 
    if (operate.isOneof(event.key, jsonSyantax)) {

        actionEditor.value = actionEditor.value + "}"
        //  JSON.stringify(buffer).concat("}")
        console.log("Found match", event.key, event.target.selectionStart, actionEditor.value)

    }

}

//actionEditor.addEventListener('keydown', refresh);


var onAction = {
    "onAction": {
    "event": 'event',
    "target": 'target'
    }
}