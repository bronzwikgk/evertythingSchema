
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