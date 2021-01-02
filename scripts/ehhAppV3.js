
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
    append(input, output, key, value) {

        a = operate.is(input);
        command = typeofEntity.a[this.append];
      command(input)
        if(operate.isEmpty(output) || operate.isEmpty(input)) return console.error('output Cant be empty');

        if (operate.is(input).includes("HTML")) {

            if (operate.is(input).includes("HTML") && typeof value !== 'string') {
                output.appendChild(input);
            }
            
           
        }
        if (operate.is(output).includes('bject') && typeof value !== 'object') {
            assign(input, key, value) { return input.assign(key, value)?.input[key] ?? throw new Error("key not found in input"); }
        }
        if (operate.is(output).operate.isEqualStrict(input, Array)) {
            output.push[input];
        }
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

