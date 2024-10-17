const fs = require("fs");

// should be self explanatory. works like a dictionary
const config = require("./config.json");

var targetPath = config.targetPath;
var outputPath = config.outputPath;
var StringsToReplace = config.strings;

// check if file exists
if (fs.existsSync(targetPath)) {
    console.log("Metadata file exists! writing to file.");

    /*const reader = fs.createReadStream(targetPath);

    reader.on('data', function(chunk) {
        PatchFile(chunk);
    }); */

    // reads from the file.
    fs.readFile(targetPath, function read(error, data) {
        if (error) {
            throw error;
        }

        const content = data;
        PatchFile(content);
    });
}

function PatchFile(fileData) {
    var data = fileData; // buffer that we change.
   
    for (let i = 0; i < StringsToReplace.length; i++) {
        //data.write(StringsToReplace[i][1], data.indexOf(StringsToReplace[i][0]));
        var setString = StringsToReplace[i][1];
        var lookStringLength = StringsToReplace[i][0].length;
        var replaceStringLength = StringsToReplace[i][1].length;
        var diff = Math.abs(lookStringLength - replaceStringLength);
        if (setString.length < lookStringLength)
        {
            for (let a = 0; a < diff; a++) {
                setString += "\x00";
            }
        }
        data.write(setString, data.indexOf(StringsToReplace[i][0]));
    }

    try {
        fs.writeFileSync(outputPath, data);
        console.log("Successfully wrote to file!");
    } catch (error) {
        throw error;
    }
}
