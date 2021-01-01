

const URL = "https://myhost/namespace/domain";

const options = {
    offline: {
        storage: new IdbStorageAdapter()
    }
};

const domain = new ConvergenceDomain(URL, options);




class localStorageHelpers extends Entity { 

    static setInLocalStorage(keyTitle, entity) {
        // console.log("saving", keyTitle, JSON.stringify(entity));
        window.localStorage.setItem(keyTitle, JSON.stringify(entity));
        }


    }

class Entity{
    constructor(){
        this.setInLocalStorage(toolbar,"ehhAppConfig");
    }
    
}

class Controller {
    constructor(Entity, EhhView) {
        this.model = model
        this.view = view        
    }
    init() {
        this.create('click', 'ehhListener', this.onAction);
        //console.log(this);
        this.view.render();
    }
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
            default:
        }
        return newEntity;
    }
    onAction(e) {
        console.log(typeof e, operate.is(e));
        switch (e.type) {
        }
        console.log("I was called")
        e.preventDefault();
    }



}

class EhhView{
    constructor(){
        //here it should take input from controller and render the view, using render function in this class
    }

    render(){

    }

}

const ehhApp = new Controller(new Model(), new View())
//ehhApp.view.render();
window.onload = ehhApp.init();