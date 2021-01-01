// This creates an index which when called with sytax of createIndex.next().value will give you an index new value.
function* createIndex() {
    let number = 1;
    while (true)
        yield number++;
}

const index = createIndex();


const ehhAppView = {
    tagName : 'div',
    nodeType : 1,
    parent : document.getElementsByTagName('body')[0]
}

const storageOptions = {
    resource: {
        storage: 'window.localStorage'
    }
};


var entity = {
    entityName: 'name',
    entityType: {
        value: operate.is,
        operate: [operate.isNotEmpty]
    },
    entityCreate: {
        callback : 'entityMethods[operate.is].create'
    },
    entityMethods: {
        create: null,
        append: null, 
        get: null,
        delete:null,
    },
    entityOptions: {
        recurse: true,
        output: ['callback', 'returnValue', 'returnKey', 'returnAll', 'Boolean'],
        returnValueFilters: ['isNotEmpty', 'hasAllof', 'isString', 'isfunction', 'isBoolean']
    },
    entityStorage:'window.localStorage'
}

var entityTypes = {
    HTML : operate.is(this).includes("HTML"),
    Object: operate.is(this).includes("Object") && operate.isEqualStrict((typeof this), typeof {}),
    Array: operate.is(this).includes("Array") && operate.isEqualStrict((typeof this), typeof [])

}

class EntityModel {
    constructor() {
        this.entitys = JSON.parse(localStorage.getItem('entitys')) || new WeakMap();
    }

}
class Ehhcontroller { 
    constructor(EntityModel,EhhView) { 
        this.EntityModel = EntityModel
        this.EhhView = EhhView     
    }
    init({ ...Arg }) {
        console.log(this)
        console.log(operate.isNotEmpty([arguments]), arguments.length)
        operate.isNotEmpty([arguments]) ? { (arguments.forEach(element => { this.entitys.append(arguments); }))};
        this.EhhView.render();
    }
    create() {

        operate.is(output)
    }
    append() { 

        console.log("appending")
    }
}
class EhhView {

    constructor() {
        //  this.ehhApp = this.getElement('#ehhView')
    }

    render() {
        
        console.log(":)")

    }
   
}

testA = document.createElement("div");

const ehhApp = new Ehhcontroller(new EntityModel(), new EhhView())
//ehhApp.view.render();
window.onload = ehhApp.init(entity,ehhAppView);