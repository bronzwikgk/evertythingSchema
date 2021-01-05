var inputTemp = ['A1:D1','B2:AZ7'] 
//var outputExpected = [[colStart, rowStart, colEnd, rowEnd], [colStart, rowStart, colEnd, rowEnd]]

function iterateArr(input, output, callback) { 
   
   
    if (!output) { response = [] };
   // console.log("iterateing", input)    
    for (var i = 0; i < input.length; i++) { 
     //   console.log("function",arguments.callee.caller.name.toString(),input[i]);
        if (callback) { 
            response.push(callback(input[i]));
            console.log("response in arrat",response)
        }
    }
    return response;
}


function a1toRange(a1Notation) {
   var notation = a1Notation.toString().split(':');
  //  console.log("notation", notation)
    var response = iterateArr(notation, "", convertA1toDimension)
    console.log("here", response);
    return response;
    // var startCol =  notation.substr(0, 1);
    // var startRow =  notation.substr(1, 2);
    // var endCol = notation.substr(4, 5);
    // var endRow = notation.substr(4, 5);

}


function convertA1toDimension(input) {
  //  console.log("Converting", input);
    var numbIndex = input.search(/\d/);

    var alpha = input.slice(0, numbIndex);
    var row = input.slice(numbIndex, input.length);
   
    var col = 0;
    for (var i = 0; i < alpha.length; i++) {
       //
        col = col + alpha.charCodeAt(i) - 65;
       // console.log("col", strCharcode, col);
    }

    dimension = [{ 'col': alpha+col }, { 'row': row }]
   // console.log('dimension',dimension)
    return dimension;

}



function test() { 
    console.log("inputTemp", inputTemp)
    var response = iterateArr(inputTemp, "", a1toRange);
    console.log("output",response)
    //var response = a1toRangeDimension(inputTemp);
    outputLog = document.createElement('div');
    body = document.getElementsByTagName('body')[0];
    body.appendChild(outputLog);
    outputLog.innerText = outputLog.innerText + JSON.stringify(response);
     //   console.log(response);

}


test();