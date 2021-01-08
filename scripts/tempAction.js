var actionEditor = {
    actionEditorBlock:{
        name:'div',
        contentEditable: true,
        class : 'actionEditor-block',
        id: 'actionEditor-block',
        lineNumbers: true,
        innerText:"Write whatever you can think of...",
        //mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
        //output: ['self', 'output'],
        state: 'idle',
        style: 'min-height : 200px; width: 400px; border-top: 0px; padding: 21px; overflow: auto;',
        },
    toolBar:[
        {   name:'button',
            type: 'div',
            'innerText':'add',
            'id':'add',
            'onclick' : 'console.log("addButtonClicked")'
        },
        {   name:'button',
            type: 'div',
            'innerText':'BTN',
            'onclick' : 'console.log("i was clicked")'
        },
        {   name:'button',
            type: 'button',
            'innerText':'BTN',
            'onclick' : 'console.log("i was clicked")'
        },
        {   name:'button',
            type: 'button',
            'innerText':'BTN',
            'onclick' : 'console.log("i was clicked")'
        },
        {   name:'button',
            type: 'button',
            'innerText':'BTN',
            'onclick' : 'console.log("i was clicked")'
        },
        
    ]
}


function deepIterate(source,target ) {
   // if (typeof target !== 'object' || typeof source !== 'object') return false; // target or source or both ain't objects, merging doesn't make sense
    for (var prop in source) {
       // if (!source.hasOwnProperty(prop)) continue; // take into consideration only object's own properties.
        if (prop in target) { // handling merging of two properties with equal names
            if (typeof target[prop] !== 'object') {
         //       target[prop] = source[prop];
            } else {
                if (typeof source[prop] !== 'object') {
           //         target[prop] = source[prop];
                } else {
                    if (source[prop].concat) { // two arrays get concatenated
             //           target[prop] = target[prop].concat(source[prop]);
                    } else { // two objects get merged recursively
                        target[prop] = deepIterate(target[prop], source[prop]);
                    }
                }
            }
        } else { // new properties get added to target
            target[prop] = source[prop];
        }
    }
    return target;
}


var temp = deepIterate(actionEditor)