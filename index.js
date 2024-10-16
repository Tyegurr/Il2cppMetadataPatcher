const fs = require("fs");

// basic config vars
const targetPath = ""; // put the path of your metadata file here
const outputPath = ""; // put the path of your output file here.

// should be self explanatory. works like a dictionary
const StringsToReplace = [
    // examples:
    //["banana", "apple "]
    //["GORILLA OS", "TYE OS    "]
];

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
        data.write(StringsToReplace[i][1], data.indexOf(StringsToReplace[i][0]));
    }

    try {
        fs.writeFileSync(outputPath, data);
        console.log("Successfully wrote to file!");
    } catch (error) {
        throw error;
    }
}
