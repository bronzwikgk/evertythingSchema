class EntityModel{
    constructor() {
        this.entitys = JSON.parse(localStorage.getItem('entitys')) || new WeakSet();
    }
    
}
// Store Class: Handles Storage
class Store {
    static getEntity(entity) {
        //   let entity;
        if (localStorage.getItem(entity) === null) {
            response = [];
        } else {
            response = JSON.parse(localStorage.getItem(entity));
        }

        return response;
    }
    static setEntity(entityContent, entityName) {
        const entitys = Store.getEntity(entityName);
        entitys.push(entity);//to be changed to append.
        localStorage.setItem(entityName, JSON.stringify(entityContent));
    }

    static removeEntity(id) {
        const entitys = Store.getEntity();

        entitys.forEach((entity, index) => {
            if (entity.id === entity) {
                entity.splice(index, 1);
            }
        });

        localStorage.setItem('entity', JSON.stringify(entitys));
    }
}

class Controller{
    constructor() {  
    }
}

class process {
    /**
   * This method creates every kind of output object, matching the type of outputRequested
   * @param {*} input 
   * @param {*} output 
   */
    create(input, output, callback, options) {
        //console.log(arguments)
        if (operate.isEmpty(output)) return console.error('output Cant be empty');
        switch (output) {
            case 'ehhHtml':
                console.log(JSON.stringify(input))
                var newEntity = document.createElement(input);
                console.log(newEntity)
            case 'ehhListener':
                var newEntity = document.addEventListener(input, callback);
            //   console.log('listernerCreated', operate.is(newEntity))    
            case 'Array':
                var newEntity = new Array(input);
            case 'object':
                var newEntity = new Object(input);
            default:
        }
        return newEntity;
    }
    setAppend(input, output, callback, options) {
        //console.log(arguments)
        if (operate.isEmpty(output) || operate.isEmpty(input)) return console.error('output Cant be empty');

        switch (operate.is(output).includes("HTML")) {
            case 'ehhHtml':
                console.log(JSON.stringify(input))
                var newEntity = document.createElement(input);
                console.log(newEntity)
            case 'ehhListener':
                var newEntity = document.addEventListener(input, callback);
            //   console.log('listernerCreated', operate.is(newEntity))    
            case 'Array':
                var newEntity = new Array(input);
            case 'object':
                var newEntity = new Object(input);
            default:
        }
        return newEntity;
    }
    static append(input, output, key, value) {

        if (getEntityType(output).includes("HTML")) {

            if (getEntityType(input).includes("HTML") && typeof value !== 'string') {
                output.appendChild(input);
            }
            if (getEntityType(input).includes("String") && typeof value !== 'string') {
                //   output.appendChild(currentNode);
            }
        }
    }
    
    extend(input, extension, options) {

        for (var key in extension) {
            input[key] = extension[key];

        }

    }
    assign(input, key, value) {
        input.assign(key, value);
    }

}


class Controller {

    constructor(model, view) {
        this.model = model
        this.view = view
    }
    init() {
        this.create('click', 'ehhListener', this.onAction);
        //console.log(this);
        this.view.render();
    }
  
    onAction(e) {
        console.log(typeof e, operate.is(e));
        switch (e.type) {
        }
        console.log("I was called")
        e.preventDefault();
    }
}