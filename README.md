# Tye's IL2CPP Metadata Patcher
A quick way to mod IL2CPP global metadata files.

## Requirements:
- Node.js and the FS module.

## How 2 Use:
- Step 1: Open the "config.json" file in the editor of your choice.
- Step 2: Set the "targetPath" variable to the path of your unedited metadata file.
- Step 3: Set the "outputPath" variable to the path you'd like your outputted metadata file to be.
- Step 4: In the "strings" variable, for every string you'd like to replace, add a new line within that variable, with this format: [(String to look for), (String to replace with)].
- Step 4b: Example: "strings": [ ["GORILLA OS", "TYE OS"] ]
- Step 4c: For every string you want to replace (and if you have more than two arrays), add a comma to the last array you added in the "strings" variable, then a new line.
- Step 5: In the command line, go to the directory you downloaded the stuff in. Then, run "node index.js".
