

class localStorageHelpers extends Entity { 

    static save(entity, keyTitle) {
        // console.log("saving", keyTitle, JSON.stringify(entity));
        window.localStorage.setItem(keyTitle, JSON.stringify(entity));
        }


    }

class Entity{
    constructor(){
        this.save(config,"ehhAppConfig");
}
}

class Controller {
    constructor(model,view){
}

}


class EhhView{
    constructor(){
        //here it should take input from controller and render the view, using render function in this class
    }

    render(){

    }

}