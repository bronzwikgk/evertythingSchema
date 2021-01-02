
var entity1 = {
    resourceLocation: {
        location: 'window.localStorage',
        methods: {
            set: 'setItem',
            get: 'getItem',
            delete: 'removeItem',
            clear: 'clearItem'
        }
    }
}
class EntityModel {
    
    constructor() { this.entityCollection = JSON.parse(localStorage.getItem('entityCollection')) || new WeakSet(); }
    
    addItem(entity,value) {
        if (this.hasItem(entity)) {
            throw new Error(
                `The entity can only contain one instance of item ${entity}`
            );
        }
       // console.log(JSON.stringify(this));
        this.entityCollection.add(entity);
      //  console.log()
        window.localStorage.setItem(entity,value);
    }

    removeItem(entity) {
        return this.entityCollection.delete(entity);
    }
    hasItem(entity) {
        return this.entityCollection.has(entity);
    }
    getItem(entity) { 
        return this.entityCollection.get(entity);
    }
    clearItem(entity) { 
        return 
    }
}




var ehhApp = new EntityModel()
console.log(window.location.valueOf)
ehhApp.addItem(window.location,Object.entries(window.location));
