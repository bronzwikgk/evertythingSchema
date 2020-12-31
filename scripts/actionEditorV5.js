

class localStorageHelpers extends Entity { 

    static save(keyTitle, entity) {
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

extend(input,extension){

    for(var key in extension){
        input[key] = extension[key];

    }

}
assign(input,key,value){
    input.assign(key,value);
}

}

class EhhView{
    constructor(){
        //here it should take input from controller and render the view, using render function in this class
    }

    render(){

    }

}