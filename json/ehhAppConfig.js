const storageOptions = {
    resource: {
        storage: 'window.localStorage'
    }
};


var entityOptions = {
    recurse: true,
    output: ['callback', 'returnValue', 'returnKey', 'returnAll', 'Boolean'],
    returnValue: ['isNotEmpty', 'hasAllof', 'isString', 'isfunction', 'isBoolean']
}