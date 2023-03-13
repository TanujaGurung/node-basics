var fs = require("fs");

//Create a new file using the appendFile() method:
// fs.appendFile('mynewfile1.html', '<p>Hello content!</p>', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

//The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });
//The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

fs.writeFile("myText.txt","Hello Content test!", function(err){
    if(err) throw errconsole.log("created")
})