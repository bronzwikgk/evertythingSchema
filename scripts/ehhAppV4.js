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

const requestedKeys = ['attributes', 'tagName', 'childNodes', 'nodeType'];
const request = {
    resource: {
        value: ['dom', 'localStorage', 'http'],
        operate:['isIn']
    }
}

var entity = {
    entityName: 'name',
    entityType: {
        value: operate.is,
        operate: [operate.isNotEmpty]
    },
    required: {
        value: operate.isEqualStrict(operate.is, 'Boolean')
    },
    entityCreate: {
        callback : 'entityMethods[operate.is].create'
    },
    entityMethods: {
        create: null,
        append: null, 
        get: null,
        delete: null
     //   deepClone:'JSON.parse(JSON.stringify)'
    },
    entityOptions: {
        recurse: true,
        output: ['callback', 'returnValue', 'returnKey', 'returnAll', 'Boolean'],
        returnValueFilters: ['isNotEmpty', 'hasAllof', 'isString', 'isfunction', 'isBoolean']
    },
    entityStorage: 'window.localStorage',
    state: {
        inactive: {
            on: { TOGGLE: "active" }
        },
        active: {
            on: { TOGGLE: "inactive" }
        }
    }
}

var entityTypes = {
    HTML : operate.is(this).includes("HTML"),
    Object: operate.is(this).includes("Object") && operate.isEqualStrict((typeof this), typeof {}),
    Array: operate.is(this).includes("Array") && operate.isEqualStrict((typeof this), typeof [])

}

class Ehhcontroller { 
    constructor(EntityModel,EhhView) { 
        this.EntityModel = EntityModel
        this.EhhView = EhhView     
    }
    init({ ...Arg }) {
        console.log(this)
        // init_workflow = {
        //     workFlowIndexGenerator: createIndex(),
        //     workFlowType: 'serial_Indexed',
        //     workFlowName: 'init',
        //     // workFlowSteps: {
        //     //    //index: workFlowIndexGenerator.next().value(),
        //     //    'operate.isNotEmpty(arguments).next'
        //     // }

        // }
      var a =  operate.isNotEmpty(arguments)
      console.log(a)
        
      //  operate.isNotEmpty([arguments]).console.log();

      //  this.EhhView.render();
    }
    create() {
        return operate.is(output).includes("HTML") ? document.createElement(input)}
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