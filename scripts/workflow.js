

// this function will call workflow function with next executing parameters 
function call() {
    // get parameters from the script properties and store them in the variable
    var parameters = (PropertiesService.getScriptProperties().getProperty("NextWorkFlow")).split(",")
    // pass that array variable in the workflow function
    workflow(parameters[0], parameters[1])
}

// Define global varibale for updating the json while running the workflow
var workflowJson;

//This function will read the workflow config and execute them one by one 
function workflow(workflowName, workflowIndex) {

    // get the workflow JSON
    workflowJson = JSON.parse(SpreadsheetApp.openById("1ynjljIkJbvLeYe4fT1mdJ1vmJFbL9YwkI2BSUqqAm3w").getRangeByName("outputInJson").getValue())
    // declare the index variable for execute next workflow 
    var index;

    // Iterate the json object 
    workflowJson.every(function (value, ind) {
        index = ind
        //Compare the config's workflow name and workflow index and workflow name, workflow index pass in the function
        if (value.workFlowName == workflowName && value.workFlowIndex == workflowIndex && value.workFlowStates == "0") {

            //if its matched then check which function to be execute this section for Get Function 
            if (value.inServiceWorker == "getFunction") {
                //set the workflow state to "." that means work in progress
                workflowJson[ind]['workFlowStates'] = "."
                // Update the json with its current state
                SpreadsheetApp.openById("1ynjljIkJbvLeYe4fT1mdJ1vmJFbL9YwkI2BSUqqAm3w").getRangeByName("outputInJson").setValue(JSON.stringify(workflowJson))
                // get function will call with the config as arguments 
                getFunction(value)
                //set the workflow state to "1" that means work is done
                workflowJson[ind]['workFlowStates'] = "1"
                // Update the json with its current state
                SpreadsheetApp.openById("1ynjljIkJbvLeYe4fT1mdJ1vmJFbL9YwkI2BSUqqAm3w").getRangeByName("outputInJson").setValue(JSON.stringify(workflowJson))

            } else if (value.inServiceWorker == "setFunction") { //if its matched then check which function to be execute this section for Set Function
                //set the workflow state to "." that means work in progress
                workflowJson[ind]['workFlowStates'] = "."
                // Update the json with its current state
                SpreadsheetApp.openById("1ynjljIkJbvLeYe4fT1mdJ1vmJFbL9YwkI2BSUqqAm3w").getRangeByName("outputInJson").setValue(JSON.stringify(workflowJson))
                // Set function will call with the config as arguments 
                setFunction(value)
                //set the workflow state to "1" that means work is done
                workflowJson[ind]['workFlowStates'] = "1"
                // Update the json with its current state
                SpreadsheetApp.openById("1ynjljIkJbvLeYe4fT1mdJ1vmJFbL9YwkI2BSUqqAm3w").getRangeByName("outputInJson").setValue(JSON.stringify(workflowJson))


            } else if (value.inServiceWorker == "createFunction") { //if its matched then check which function to be execute this section for Create Function
                //set the workflow state to "." that means work in progress
                workflowJson[ind]['workFlowStates'] = "."
                // Update the json with its current state
                SpreadsheetApp.openById("1ynjljIkJbvLeYe4fT1mdJ1vmJFbL9YwkI2BSUqqAm3w").getRangeByName("outputInJson").setValue(JSON.stringify(workflowJson))
                // Create function will call with the config as arguments 
                createFunction(value)
                //set the workflow state to "1" that means work is done
                workflowJson[ind]['workFlowStates'] = "1"
                // Update the json with its current state
                SpreadsheetApp.openById("1ynjljIkJbvLeYe4fT1mdJ1vmJFbL9YwkI2BSUqqAm3w").getRangeByName("outputInJson").setValue(JSON.stringify(workflowJson))


            }
            return false
        } else {

            return true;

        }

    })


    // get workflow json for updated one 
    workflowJson = JSON.parse(SpreadsheetApp.openById("1ynjljIkJbvLeYe4fT1mdJ1vmJFbL9YwkI2BSUqqAm3w").getRangeByName("outputInJson").getValue())

    Logger.log("AUTO " + index)

    // Check for next workflow trigger type if Auto then run next workflow
    if (workflowJson.length > index + 1) {
        Logger.log("Set Properties")

        //Set script properties for next workflow 
        PropertiesService.getScriptProperties().setProperty("NextWorkFlow", workflowJson[index + 1].workFlowName + "," + (index + 2))

        // Check trigger type
        if (workflowJson[index + 1].triggerType == "Auto") {
            // Rune next workflow
            workflow(workflowJson[index + 1].workFlowName, workflowJson[index + 1].workFlowIndex)

        }
    }

}


// clean function for namedrange 
function clean(sheetId, namedRange) {

    SpreadsheetApp.openById(sheetId).getRange(namedRange).clear().clearContent();

}

// Get data from namedRange 
function getData(sheetId, namedrange) {

    var data = SpreadsheetApp.openById(sheetId).getRange(namedrange).getValues();
    return data;

}


// Append data in the form of row in the sheet
function setDataInDatabase(sheetId, tabName, data) {
    Logger.log(data)
    var sheet = SpreadsheetApp.openById(sheetId).getSheetByName(tabName);
    sheet.appendRow(data)

}



// Get form data
function getFormData(sheetId, namedRange) {

    // define spreadsheet object using sheetid
    var spreadsheet = SpreadsheetApp.openById(sheetId)
    // define namedrange using namedrange value
    var namedRange = spreadsheet.getRange(namedRange)
    // get data from that namedrange 
    var namedRangeData = namedRange.getValues();

    // declare object to be return 
    var result = { "user_id": "", 'data': [] }

    //iterate into the namedrange data object  
    namedRangeData.forEach(function (value, index) {

        // if the cell value is not null then enter this section
        if (value[0] != "" && value[0] != undefined) {
            // check for emailid field
            if (value[0] == "Email ID") {
                result['user_id'] = value[namedRangeData[0].length - 1]
            }
            // push the form data in the object that to be returned
            result['data'].push(value[namedRangeData[0].length - 1])
        }
    })
    Logger.log(result)
    return JSON.stringify(result);

}


function getRangeInfo(id, sheetName, namedRange) {
    var spreadsheet = SpreadsheetApp.openById(id);
    var sheet = spreadsheet.getSheetByName(sheetName);
    var info = {};
    Logger.log(namedRange)
    var range = sheet.getRange(namedRange);
    var numCol = range.getNumColumns()
    var numRow = range.getNumRows()
    var values = range.getValues();
    var valueFlag = false;
    values.every(function (value, index) {
        if (value[0] != "" && value[0] != undefined) {
            valueFlag = true;
            return false
        } else {
            return true
        }
    })
    if (valueFlag == false)
        return;
    Logger.log(numRow)
    Logger.log(numCol)
    var mergeArray = {}
    var flag = false
    for (var i = 1; i <= numRow; i++) {
        for (var j = 1; j <= numCol; j++) {
            var cell = range.getCell(i, j)
            var response = {}
            var temprange = cell.getMergedRanges();

            temprange.forEach(function (value, index) {
                if (mergeArray["[" + (value.getRow() - range.getRow() + 1) + "," + (value.getColumn() - range.getColumn() + 1) + "]"] == undefined) {
                    mergeArray["[" + (value.getRow() - range.getRow() + 1) + "," + (value.getColumn() - range.getColumn() + 1) + "]"] = []
                    mergeArray["[" + (value.getRow() - range.getRow() + 1) + "," + (value.getColumn() - range.getColumn() + 1) + "]"].push([i, j])
                } else {
                    mergeArray["[" + (value.getRow() - range.getRow() + 1) + "," + (value.getColumn() - range.getColumn() + 1) + "]"].push([i, j])
                }
            })
            if (cell.getValue() != "" && cell.getValue() != undefined) {
                flag = true;
                response['wrap_strategy'] = cell.getWrapStrategy();
                response['wrap'] = cell.getWrap()
                response['width'] = cell.getWidth()
                response['vertical_alignment'] = cell.getVerticalAlignment()
                response['value'] = cell.getValue()
                response['text_style_isBold'] = cell.getTextStyle().isBold()
                response['text_style_isItalic'] = cell.getTextStyle().isItalic()
                response['text_style_isStrikethrough'] = cell.getTextStyle().isStrikethrough()
                response['text_style_isUnderline'] = cell.getTextStyle().isUnderline()

                response['text_rotation_degrees'] = cell.getTextRotation().getDegrees()
                response['text_rotation_isVertical'] = cell.getTextRotation().isVertical()
                if (cell.getTextDirection() != null) {
                    response['text_direction_LEFT_TO_RIGHT'] = cell.getTextDirection().LEFT_TO_RIGHT
                    response['text_direction_RIGHT_TO_LEFT'] = cell.getTextDirection().RIGHT_TO_LEFT
                }
                response['sheet_name'] = cell.getSheet().getSheetName();
                response['row'] = cell.getRow()

                response['rich_text_value'] = cell.RichTextValue().getText()
                response['number_format'] = cell.getNumberFormat()


                var temprange = cell.getMergedRanges();
                var mergeArrayTemp = []
                temprange.forEach(function (value, index) {
                    mergeArrayTemp.push([value.getRow(), value.getColumn()])
                })





                response['mergaed_ranges'] = mergeArrayTemp
                response['horizontal_alignment'] = cell.getHorizontalAlignment()
                response['height'] = cell.getHeight()
                response['grid_id'] = cell.getGridId()
                response['formula'] = cell.getFormula()
                response['font_weight'] = cell.getFontWeight()
                response['font_style'] = cell.getFontStyle()
                response['font_line'] = cell.getFontLine()
                response['font_family'] = cell.getFontFamily()
                response['font_color'] = cell.getFontColor()
                response['font_size'] = cell.getFontSize()
                response['display_value'] = cell.getDisplayValue()
                response['data_source_url'] = cell.getDataSourceUrl()
                response['column'] = cell.getColumn()
                response['background'] = cell.getBackground()
                response['a1notation'] = cell.getA1Notation()

                info["[" + i + "," + j + "]"] = response
                //      cell.setNote(JSON.stringify(response))
            }

        }
    }

    if (flag) {
        info['merge'] = mergeArray
        range.getCell(1, 1).setNote(JSON.stringify(info))
    }



}







function setRangeInfo(sourceid, sourcesheetName, sourcenamedRange, destinationid, destinationsheetName, destinationnamedRange) {
    var sourcespreadsheet = SpreadsheetApp.openById(sourceid);
    var sourcesheet = sourcespreadsheet.getSheetByName(sourcesheetName);
    var sourcerange = sourcesheet.getRange(sourcenamedRange);
    var info = {};
    var numCol = sourcerange.getNumColumns()
    var numRow = sourcerange.getNumRows()
    Logger.log(sourcerange.getCell(1, 1).getNote())

    if (sourcerange.getCell(1, 1).getNote() == "") {
        return;
    }
    Logger.log(sourcerange.getValues().length)
    var cellNote = JSON.parse(sourcerange.getCell(1, 1).getNote());
    //  Logger.log(cellNote)

    var destinationspreadsheet = SpreadsheetApp.openById(destinationid);
    var destinationsheet = destinationspreadsheet.getSheetByName(destinationsheetName);
    Logger.log(destinationnamedRange)
    var destinationrange = destinationsheet.getRange(destinationnamedRange);
    Logger.log(destinationnamedRange)
    for (var key in cellNote) {
        if (key != "merge") {
            var position = JSON.parse(key)
            var cell = destinationrange.getCell(position[0], position[1])

            if (cellNote[key]['wrap_strategy'] == "OVERFLOW") {
                cell.setWrapStrategy(SpreadsheetApp.WrapStrategy.OVERFLOW)
            } else if (cellNote[key]['wrap_strategy'] == "CLIP") {
                cell.setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP)
            } else if (cellNote[key]['wrap_strategy'] == "WRAP") {
                cell.setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP)
            }
            cell.setWrap(cellNote[key]['wrap'])

            cell.setValue(cellNote[key]['value'])
            cell.setVerticalAlignment(cellNote[key]['vertical_alignment'])
            if (cellNote[key]['text_style_isBold'] != null && cellNote[key]['text_style_isBold'] != "" && cellNote[key]['text_style_isBold'] != undefined)
                cell.setTextStyle(SpreadsheetApp.newTextStyle().setBold(cellNote[key]['text_style_isBold']).build())
            cell.setTextStyle(SpreadsheetApp.newTextStyle().setItalic(cellNote[key]['text_style_isItalic']).build())
            cell.setTextStyle(SpreadsheetApp.newTextStyle().setStrikethrough(cellNote[key]['text_style_isStrikethrough']).build())
            cell.setTextStyle(SpreadsheetApp.newTextStyle().setUnderline(cellNote[key]['text_style_isUnderline']).build())

            cell.setTextRotation(parseInt(cellNote[key]['text_rotation_degrees']))
            cell.setVerticalAlignment(cellNote[key]['text_rotation_isVertical'])
            if (cellNote[key]['text_direction_LEFT_TO_RIGHT'] != undefined) {
                cell.setTextDirection(SpreadsheetApp.TextDirection.LEFT_TO_RIGHT)
            }
            if (cellNote[key]['text_direction_RIGHT_TO_LEFT'] != undefined) {
                cell.setTextDirection(SpreadsheetApp.TextDirection.RIGHT_TO_LEFT)
            }

            cell.setRichTextValue(SpreadsheetApp.newRichTextValue().setText(cellNote[key]['rich_text_value']).build())

            cell.setNumberFormat(cellNote[key]['number_format'])

            cell.setHorizontalAlignment(cellNote[key]['horizontal_alignment'])

            if (cellNote[key]['formula'] != "" && cellNote[key]['formula'] != undefined) {
                cell.setFormula(cellNote[key]['formula'])
            }
            cell.setFontWeight(cellNote[key]['font_weight'])
            cell.setFontStyle(cellNote[key]['font_style'])
            cell.setFontLine(cellNote[key]['font_line'])
            cell.setFontFamily(cellNote[key]['font_family'])
            cell.setFontColor(cellNote[key]['font_color'])
            cell.setBackground(cellNote[key]['background'])
            cell.setFontSize(parseInt(cellNote[key]['font_size']))

            //    Logger.log(cellNote[key]['mergaed_ranges'])
            if (cellNote[key]['mergaed_ranges'] != "" && cellNote[key]['mergaed_ranges'] != undefined) {
                var mergeRangeArray = cellNote[key]['mergaed_ranges']

                var lastMergeCell = mergeRangeArray[mergeRangeArray.length - 1]
            }
        } else {

            for (var ke in cellNote[key]) {
                var tempke = JSON.parse(ke)
                var row = parseInt(tempke[0]) + destinationrange.getRow() - 1


                var col = parseInt(tempke[1]) + destinationrange.getColumn() - 1
                destinationsheet.getRange(cellNote[key][ke][0][0] + destinationrange.getRow() - 1, cellNote[key][ke][0][1] + destinationrange.getColumn() - 1, cellNote[key][ke][cellNote[key][ke].length - 1][0] - cellNote[key][ke][0][0] + 1, cellNote[key][ke][cellNote[key][ke].length - 1][1] - cellNote[key][ke][0][1] + 1).merge()
            }
        }
    }
}

function setRangeInfoInText(sourceid, sourcesheetName, sourcenamedRange, destinationid, destinationsheetName, destinationnamedRange) {
    var sourcespreadsheet = SpreadsheetApp.openById(sourceid);
    var sourcesheet = sourcespreadsheet.getSheetByName(sourcesheetName);
    var sourcerange = sourcesheet.getRange(sourcenamedRange);
    var info = {};
    var numCol = sourcerange.getNumColumns()
    var numRow = sourcerange.getNumRows()
    Logger.log(sourcerange.getCell(1, 1).getNote())

    if (sourcerange.getCell(1, 1).getNote() == "") {
        return;
    }
    Logger.log(sourcerange.getValues().length)
    var cellNote = JSON.parse(sourcerange.getCell(1, 1).getNote());
    //  Logger.log(cellNote)

    var destinationspreadsheet = SpreadsheetApp.openById(destinationid);
    var destinationsheet = destinationspreadsheet.getSheetByName(destinationsheetName);
    Logger.log(destinationnamedRange)
    var destinationrange = destinationsheet.getRange(destinationnamedRange);
    Logger.log(destinationnamedRange)
    for (var key in cellNote) {
        if (key != "merge") {
            var position = JSON.parse(key)
            var cell = destinationrange.getCell(position[0], position[1])
            cell.setValue(cellNote[key]['value'])

            cell.setRichTextValue(SpreadsheetApp.newRichTextValue().setText(cellNote[key]['rich_text_value']).build())
            if (cellNote[key]['mergaed_ranges'] != "" && cellNote[key]['mergaed_ranges'] != undefined) {
                var mergeRangeArray = cellNote[key]['mergaed_ranges']

                var lastMergeCell = mergeRangeArray[mergeRangeArray.length - 1]
            }
        } else {

            for (var ke in cellNote[key]) {
                var tempke = JSON.parse(ke)
                var row = parseInt(tempke[0]) + destinationrange.getRow() - 1


                var col = parseInt(tempke[1]) + destinationrange.getColumn() - 1
                destinationsheet.getRange(cellNote[key][ke][0][0] + destinationrange.getRow() - 1, cellNote[key][ke][0][1] + destinationrange.getColumn() - 1, cellNote[key][ke][cellNote[key][ke].length - 1][0] - cellNote[key][ke][0][0] + 1, cellNote[key][ke][cellNote[key][ke].length - 1][1] - cellNote[key][ke][0][1] + 1).merge()
            }
        }
    }
}




function setRangeInfoInFormat(sourceid, sourcesheetName, sourcenamedRange, destinationid, destinationsheetName, destinationnamedRange) {
    var sourcespreadsheet = SpreadsheetApp.openById(sourceid);
    var sourcesheet = sourcespreadsheet.getSheetByName(sourcesheetName);
    var sourcerange = sourcesheet.getRange(sourcenamedRange);
    var info = {};
    var numCol = sourcerange.getNumColumns()
    var numRow = sourcerange.getNumRows()
    Logger.log(sourcerange.getCell(1, 1).getNote())

    if (sourcerange.getCell(1, 1).getNote() == "") {
        return;
    }
    Logger.log(sourcerange.getValues().length)
    var cellNote = JSON.parse(sourcerange.getCell(1, 1).getNote());
    //  Logger.log(cellNote)

    var destinationspreadsheet = SpreadsheetApp.openById(destinationid);
    var destinationsheet = destinationspreadsheet.getSheetByName(destinationsheetName);
    Logger.log(destinationnamedRange)
    var destinationrange = destinationsheet.getRange(destinationnamedRange);
    Logger.log(destinationnamedRange)
    for (var key in cellNote) {
        if (key != "merge") {
            var position = JSON.parse(key)
            var cell = destinationrange.getCell(position[0], position[1])

            if (cellNote[key]['wrap_strategy'] == "OVERFLOW") {
                cell.setWrapStrategy(SpreadsheetApp.WrapStrategy.OVERFLOW)
            } else if (cellNote[key]['wrap_strategy'] == "CLIP") {
                cell.setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP)
            } else if (cellNote[key]['wrap_strategy'] == "WRAP") {
                cell.setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP)
            }
            cell.setWrap(cellNote[key]['wrap'])

            //      cell.setValue( cellNote[key]['value'])
            cell.setVerticalAlignment(cellNote[key]['vertical_alignment'])
            if (cellNote[key]['text_style_isBold'] != null && cellNote[key]['text_style_isBold'] != "" && cellNote[key]['text_style_isBold'] != undefined)
                cell.setTextStyle(SpreadsheetApp.newTextStyle().setBold(cellNote[key]['text_style_isBold']).build())
            cell.setTextStyle(SpreadsheetApp.newTextStyle().setItalic(cellNote[key]['text_style_isItalic']).build())
            cell.setTextStyle(SpreadsheetApp.newTextStyle().setStrikethrough(cellNote[key]['text_style_isStrikethrough']).build())
            cell.setTextStyle(SpreadsheetApp.newTextStyle().setUnderline(cellNote[key]['text_style_isUnderline']).build())

            cell.setTextRotation(parseInt(cellNote[key]['text_rotation_degrees']))
            cell.setVerticalAlignment(cellNote[key]['text_rotation_isVertical'])
            if (cellNote[key]['text_direction_LEFT_TO_RIGHT'] != undefined) {
                cell.setTextDirection(SpreadsheetApp.TextDirection.LEFT_TO_RIGHT)
            }
            if (cellNote[key]['text_direction_RIGHT_TO_LEFT'] != undefined) {
                cell.setTextDirection(SpreadsheetApp.TextDirection.RIGHT_TO_LEFT)
            }

            //      cell.setRichTextValue(SpreadsheetApp.newRichTextValue().setText(cellNote[key]['rich_text_value']).build())

            cell.setNumberFormat(cellNote[key]['number_format'])

            cell.setHorizontalAlignment(cellNote[key]['horizontal_alignment'])

            if (cellNote[key]['formula'] != "" && cellNote[key]['formula'] != undefined) {
                cell.setFormula(cellNote[key]['formula'])
            }
            cell.setFontWeight(cellNote[key]['font_weight'])
            cell.setFontStyle(cellNote[key]['font_style'])
            cell.setFontLine(cellNote[key]['font_line'])
            cell.setFontFamily(cellNote[key]['font_family'])
            cell.setFontColor(cellNote[key]['font_color'])
            cell.setBackground(cellNote[key]['background'])
            cell.setFontSize(parseInt(cellNote[key]['font_size']))

            //    Logger.log(cellNote[key]['mergaed_ranges'])
            if (cellNote[key]['mergaed_ranges'] != "" && cellNote[key]['mergaed_ranges'] != undefined) {
                var mergeRangeArray = cellNote[key]['mergaed_ranges']

                var lastMergeCell = mergeRangeArray[mergeRangeArray.length - 1]
            }
        } else {

            for (var ke in cellNote[key]) {
                var tempke = JSON.parse(ke)
                var row = parseInt(tempke[0]) + destinationrange.getRow() - 1


                var col = parseInt(tempke[1]) + destinationrange.getColumn() - 1
                destinationsheet.getRange(cellNote[key][ke][0][0] + destinationrange.getRow() - 1, cellNote[key][ke][0][1] + destinationrange.getColumn() - 1, cellNote[key][ke][cellNote[key][ke].length - 1][0] - cellNote[key][ke][0][0] + 1, cellNote[key][ke][cellNote[key][ke].length - 1][1] - cellNote[key][ke][0][1] + 1).merge()
            }
        }
    }
}



function createEnv(activeSheetData, user) {
    Logger.log("Data  " + activeSheetData)
    var row = 1
    var col = 1
    var resp = {}
    var mainFolder;
    var result1 = [];
    var cols = [], counter = 0;
    activeSheetData.forEach(function (value, index) {

        var result = []
        var len = value.length
        var temp;
        if (index == row - 1) {
            for (var i = col - 1; i < len; i++) {
                result[i] = value[i]

            }
        } else {
            for (var i = col - 1; i < len; i++) {
                if (value[i] != undefined && value[i] != "") {
                    result[i] = value[i]
                } else {

                    result[i] = result1[index - 1][i]
                }
            }
        }

        result1.push(result)

    })

    var env = {};
    Logger.log(result1)
    result1.forEach(function (value, index) {
        Logger.log(value)
        value.forEach(function (val, ind) {
            Logger.log(val)
            if (val.search("Folder") > -1) {
                if (ind == 0) {
                    if (env[val] == undefined) {
                        var folder = DriveApp.createFolder(val.replace(" Folder", ""));
                        mainFolder = folder;
                        //            folder.addEditor(user);
                        env[val] = folder.getId();
                    }
                } else {

                    if (env[val] == undefined) {
                        var folder = DriveApp.getFolderById(env[value[ind - 1]]).createFolder(val.replace(" Folder", ""))
                        env[val] = folder.getId();
                    }
                }

            } else if (val.search("Sheet") > -1) {

                if (env[val] == undefined) {

                    var sheet = SpreadsheetApp.create(val.replace(" Sheet", ""));
                    var file = DriveApp.getFileById(sheet.getId())
                    var fileNew = file.makeCopy(val.replace(" Sheet", ""), DriveApp.getFolderById(env[value[ind - 1]]))
                    file.setTrashed(true);
                    env[val] = fileNew.getId();

                }

            } else if (val.search("Tab") > -1) {

                SpreadsheetApp.openById(env[value[ind - 1]]).insertSheet(val.replace(" Tab", ""))

            }

        })

    })
    Logger.log(user)
    var fileUrl = copySheet(mainFolder, "1GuAoU32P_RwV_fWG5pdZd97tg0EQGcncaxwqgnxCuZ4")
    setDataInDatabase("1hTShTOUsdJW159lzr_Ag8Seyp9cJQlZhzUQdu4ZLU-Q", "User Data", [user, AuthToken.encryptToken([user, SpreadsheetApp.openByUrl(fileUrl).getId()]), fileUrl, new Date()])
    mainFolder.addEditor(user);
    return mainFolder.getId();

}



function copySheet(folder, sheetId) {

    var file = DriveApp.getFileById(sheetId).makeCopy("[ ehh User actionSpace ]", folder)
    return file.getUrl();

}


function setNamedRangeState(SheetID, Namedrange, state) {
    var spreadsheet = SpreadsheetApp.openById(SheetID);
    var range = spreadsheet.getRange(Namedrange);
    var sheet = spreadsheet.getRange(Namedrange).getSheet().getActiveCell();
    sheet.addDeveloperMetadata("state-" + range.getRow() + "" + range.getColumn(), state + "")
}

function getNamedRangeState(SheetID, Namedrange) {
    var spreadsheet = SpreadsheetApp.openById(SheetID);
    var range = spreadsheet.getRange(Namedrange);
    var sheet = spreadsheet.getRange(Namedrange).getSheet();
    var key = "state-" + range.getRow() + "" + range.getColumn();
    var states = sheet.getDeveloperMetadata()
    var state;
    states.every(function (value, index) {
        if (value.getKey() == key) {
            state = value.getValue();
            return false;
        } else {
            return true;
        }
    })

    return state

}
