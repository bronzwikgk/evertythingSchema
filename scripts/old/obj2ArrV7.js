//seems to have an issue with the root object.
//Need to add options.
//set has to be a seperate method
//Child index need to be created along with the path.
//https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/

function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}
var row = new Array('ehhid', 'd', 'parent', 'entity', "typeOf", "path");

class mutate { 

    static fillEmptyDepth(input, output) {
        // console.log("filling gap",input,output)
        for (var j = 1; j <= output[0].length - input.length; j++) {
            input.push("");
        }
        return input;
    }
    
    //this function primarly check for the presence of a keys in any an array, if not present and options [ returns false and update and return position]
    static validateNupdate(input, output) {

        if (output[0].indexOf(input) === -1 && typeof input !== null && typeof input !== undefined) {
            output[0].push(input);
        }
        // console.log(output[0], input);
        return output;
    }
    static createRow(input, output, previousRow, currentKey, d, path) {
        var id = output.length;
        var newRow = [id, d, previousRow[3], currentKey, input?.constructor.name, path];
        return newRow;
    }

    static updateRow(input, output, previousRow, currentRow, currentKey, d, path) {
        mutate.fillEmptyDepth(currentRow, output)
        // console.log("current Key in updation",currentKey,input,currentRow,previousRow)
        //Adding the inputValue in the currentRow at the index of the currentKey, also deletes an empty space from before.
        currentRow.splice(output[0].indexOf(currentKey), 1, input);
        //  console.log("updated Row",currentRow)
        return currentRow;
    }
    static setEntity(input, output, key) { 
       var  outputType = getEntityType(output);
      //  console.log(outputType);
        switch (output?.constructor) { 
            case Object:
                output[key] = input[key];
            case Array:
                if (key) {
                    output.push(input[key])
                } else { 
                    output.push(input);
                }
            case String:
                default:
        }

        return output;
    }
    static Obj2(input, output, previousRow, currentRow, currentKey, d, path, parent) {
        if (!previousRow) {
            mutate.setEntity(row, output);
            
            previousRow = output[0];
            //  parent = "root";
          //  console.log(previousRow);
            path = '';
        };
        if (!d) { var d = 0; }
        d = d + 1;
        switch (input?.constructor) {
            case Object:
                path = path + '.' + previousRow[3];
                mutate.processObj(input, output, previousRow, currentRow, currentKey, d, path, previousRow[3]);
            case Array:
           
                path = path + '.' + previousRow[3];
                mutate.processArr(input, output, previousRow, currentRow, currentKey, d, path, previousRow[3]);
            default:
            // return
        }
        //  console.log(output)
        return output;
    }
    static processObj(input, output, previousRow, currentRow, currentKey, d, path, parent) {
        for (var key in input) {
            if (!input.hasOwnProperty(key)) continue;
            if (getEntityType(input[key]) === 'Object' || getEntityType(input[key]) === 'Array') {
                // console.log(path)
                var currentRow = mutate.createRow(input[key], output, previousRow, key, d, path, previousRow[3]);
                mutate.setEntity(currentRow, output);
                mutate.Obj2(input[key], output, currentRow, currentRow, currentKey, d, path, currentRow[3]);

            } else if (getEntityType(input[key]) === 'String' || getEntityType(input[key]) === 'Function' || getEntityType(input[key]) === 'Boolean') {
                mutate.validateNupdate(key, output);
                mutate.updateRow(input[key], output, previousRow, previousRow, key, d, path);
            } else {
                //   console.log("errand", key, input[key],typeof key)
            }
        }
        return output;
    }
    static processArr(input, output, previousRow, currentRow, currentKey, d, path, parent) {
        for (var i = 0; i < input.length; i++) {
            if (typeof input[i] === "object" && input[i] !== null) {
                if (typeof currentRow[3] === 'undefined') {
                    //      console.log(currentRow)   
                    
                    mutate.updateRow(currentKey, output, previousRow, currentRow, 'root', d, path);
                    console.log("Finding Array Values", previousRow)
                } else {
                    console.log("Finding Array Values",currentRow)

                    var currentRow = mutate.createRow(input[i], output, previousRow, previousRow[3] + i, d, path);
                    mutate.setEntity(currentRow, output);
//                    output.push(currentRow);
                }
                mutate.Obj2(input[i], output, currentRow, currentRow, currentKey, d, path);

            } else {
                //creating Value Row for Array Parent
                var currentRow = mutate.createRow(input[i], output, previousRow, input[i], d, path);
                mutate.setEntity(currentRow, output);
           //     console.log(currentRow)
              //  output.push(currentRow);
            }
        }
        return output
    }
}




function processTest(e) {
    e.preventDefault();
    var in2 = rule;
    console.log(in2)
    var outputArray = mutate.Obj2(in2, []);
    console.log("outputArray", outputArray)
    const depth = getMax(outputArray,2);

   // var table = createTable(outputArray);
    outputJson = arr2(outputArray,{} ,depth);
  console.log(outputJson);
    //  document.getElementById("output").innerText = JSON.stringify(outputArray);
   // document.getElementById("output").appendChild(table);
}


document.getElementById("get").addEventListener("click", processTest);

