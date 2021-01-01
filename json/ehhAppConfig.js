const typeofDocuments = {
    
}
const typeofEntity = {
    htmlElement = {
        methods: {
            createElement = parent.createElement(),
            appendElement = parent.appendChild(),
            getElementById =  parent.getElementById(),
            getElementAttribute = parent.getAttribute(),

        },
        attributes: {
            contentEditable: Boolean,
            
        },
        class: {},
        childNodes,
}



}
const storageOptions = {
    resource: {
        storage: 'window.localStorage'
    }
};


var entityOptions = {
    recurse: true,
    output: ['callback', 'returnValue', 'returnKey', 'returnAll', 'Boolean'],
    returnValueFilters: ['isNotEmpty', 'hasAllof', 'isString', 'isfunction', 'isBoolean']
}

 
var createCommand = {
    filter: {
        html: 'parent.createElement()',
        Array: 'new Array()',
        Object: 'new Object()',
    },
    operate: [is, includes]
}
