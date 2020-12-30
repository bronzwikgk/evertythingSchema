
// model of the app contians dataset 
model = {
    entityCollection : []
}
// view contians the frontend representaion of the datasets

view = {
        clearCollection : function(){
               var range = document.createRange(); 
               range.selectNodeContents(document.getElementById("entityCollection"));
               range.deleteContents();  
        },
    
        render : function(){
               this.clearentityCollection();
    
               if(model.clearentityCollection.length !=0){
                   entityCollection = document.getElementById("entityCollection");
                   for (var i = 0; i < model.entityCollection.length; i++){
                       entity = document.createElement("li");
                       span = document.createElement("span");
                       check = document.createElement("check");
                       cross = document.createElement("cross");
                       iconCheck = document.createElement("iCheck");
                       iconCross = document.createElement("iCross");
    
                       entity.className = "entity";
                       span.className = "entity-text";
                       check.className = "entity-complete";
                       cross.className = "entity-delete";
    
                       span.textContent = model.entitys[i].text;
                       if(model.entitys[i].completed){
                       span.setAttribute("style", "text-decoration: line-through; color:black;");
                       }
                       iconCheck.setAttribute("class", "icon ion-md-checkmark");
                       iconCheck.setAttribute("data-id", i)
                       iconCross.setAttribute("class", "icon ion-md-trash");
                       iconCross.setAttribute("data-id", i);
    
                       
                       check.setAttribute("onclick", "controller.completeentity('" + i + "')");
                       cross.setAttribute("onclick", "controller.deleteentity('" + i + "')");
                       
                       check.appendChild(iconCheck);
                       cross.appendChild(iconCross);
                       entity.appendChild(span);
                       entity.appendChild(check);
                       entity.appendChild(cross);
                       entityCollection.appendChild(entity);
                      
                   }
               }
    
        }
    }
    
    
    // controller controls the directional request flow to the view and model
    
    controller = {
        init : function(){
            view.render()
        },
        addentity : function(event){
            if ((event.code == "Enter") || (event.code == "NumpadEnter")){
                input = document.getElementById("add-entity");
                if ((input.value != "") || (input.value != " ")){     
                    entityCollectionentity = {text : input.value, completed:false};
                    model.entitys.push(entityCollectionentity);
                    document.getElementById("add-entity").value="";
                }
             }
             view.render();
        },
    
        completeentity : function(entity_index){
            model.entitys[entity_index].completed = !model.entitys[entity_index].completed;
            view.render() 
        },
        deleteentity : function(entity_index){
            model.entitys.splice(entity_index,1)
             view.render()
        }
    }    
 controller.init();