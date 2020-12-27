
class ehh { 

}


// This creates an index which when called with sytax of createIndex.next().value will give you an index new value.
function* createIndex() {
    let number = 1;
    while (true)
        yield number++;
}

class ActionEditor {

    constructor(input, parent, ...argu) {
      //  console.log(parent)
        this.name = input,
            this.editor = document.createElement('div');
        this.nodeType = 1;
      
        //document.getElementsByTagName('body')[0].appendChild(document.createElement(this.name));
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }

}

const editor = new ActionEditor('div',);


console.log(editor)