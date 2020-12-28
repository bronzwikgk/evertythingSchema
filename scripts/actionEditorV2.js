// blockStatement: A block statement(or compound statement in other languages) is used to group zero or more statements.
//The block is delimited by a pair of braces("curly brackets") and may optionally be labelled.
// {
//     StatementList
// }

// LabelIdentifier: {
//     StatementList
// }


class ActionEditor {
    
    constructor(argA, argB, options) {
        this.id = 'actionEditor' + createIndex();
        this.tagName = {
            value: null,
            operate: ['isString', 'isNotEmpty']
        };
      
    }

}
class Entity extends ActionEditor{

}

class Range extends Entity { 
    constructor() {
        this.name = "ehhRange"

    }
}

class BlockStatement{
    constructor() {
        this.identifier = "{";
        //blockStatement rules to be added.
    
    }

}

class ActionController{
    //readEntity
    //addEntity
    //UpdateEntity
    //RemoveEntity
}
// Store Class: Handles Storage
class Store {
    static getEntity() {
        let entitys;
        if (localStorage.getItem('getEntity') === null) {
            entitys = [];
        } else {
            entitys = JSON.parse(localStorage.getItem('getEntity'));
        }

        return entitys;
    }

    static addentity(entity) {
        const entitys = Store.getentitys();
        entitys.push(entity);
        localStorage.setItem('entitys', JSON.stringify(entitys));
    }

    static removeentity(isbn) {
        const entitys = Store.getentitys();

        entitys.forEach((entity, index) => {
            if (entity.isbn === isbn) {
                entitys.splice(index, 1);
            }
        });

        localStorage.setItem('entitys', JSON.stringify(entitys));
    }
}

class renderView{
    static refreshView() { 

    }
    static renderActionEditor() { 

    }
    static clearActionEditor() {
     
    }
}
