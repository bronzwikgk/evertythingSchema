// Validator.js

var Validator = function () { };

class validator { 
    validate(value, rules) { 
        var self = this;
        return rules.every(function (rule) {
            return self[rule](value);
        });

    }

    isString (value) {
        if (typeof value === 'string') {
            return true;
        }
        return false;
    }
    isNotEmpty(value) {
        if (value !== '' && value !== null && typeof value !== 'undefined') {
            return true;
        }
        return false;
    }
    isInt = function (value) {
        return Number.isInteger(value);
    };
    
    // any other rule you want to add
}




// Model.js
class Model { 
    constructor() { 
        this.name = {
        value: null,
        validator: ['isString', 'isNotEmpty']
    };
    this.age = {
        value: null,
        validator: ['isInt']
    }; 
    }
    set = function (value, key) {
        if (this.validator.validate(value, key.validator)) {
            key.value = value;
            return true;
        }
        return false;
    };
    setName = function (name) {
        this.set(name, this.name);
    };
    setAge = function (age) {
        this.set(age, this.age);
    };
}

