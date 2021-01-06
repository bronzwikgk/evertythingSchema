
tempOut = document.createElement('div', { id: "tempOut" })



function test(){
b = process.iterateObj(actionEditor,tempOut);
document.getElementsByTagName('body')[0].appendChild(tempOut);
console.log(tempOut)
}



test();




ehhApp = document.createElement('ehhOutput');

//window.onload = process.init(actionEditor,ehhApp,'','','append',entity);
//document.getElementsByTagName('body')[0].appendChild(ehhApp);
//currentStyleSheet = document.styleSheets[1];
//console.log(JSON.stringify(currentStyleSheet.rules[2].cssText));
//var responseReq = process.processRequest(request);
//ehhApp.appendChild(responseReq);
//console.log("output", responseReq)
//const [start, end] = getSelectionOffset(container)


// function tempo(params) {
//     console.log("iam ")
//   //  console.log("caretPosition", document.caretPositionFromPoint(clientX, clientY));
//     /* Place the caret at the beginning of an  actionEditor.block */

//    var content = actionEditor1.innerText;
//     console.log(content.length);
//     actionEditor1.setSelectionRange(content.length, content.length+1)
//    // selection = window.getSelection();
//    // console.log(selection,'selection')
//     //moveCursorToEnd(actionEditor1);
//     //var caretPosition = document.caretRangeFromPoint();
//     //console.log(caretPosition);
//    // window.getSelection().collapse(actionEditor1, 0);
  
// }

// window.onload = focusOnEntity();


// function moveCursorToEnd(el) {
//     if (typeof el.selectionStart == "number") {
//         console.log(el.selectionStart)
//         el.selectionStart = el.selectionEnd = el.value.length;
//     } else if (typeof el.createTextRange != "undefined") {
//         el.focus();
//         var range = el.createTextRange();
//         range.collapse(false);
//         range.select();
//     }
// }

// function focusOnEntity() {
//     var entity = document.getElementById('actionEditor1');
//     entity.focus();
   
// }