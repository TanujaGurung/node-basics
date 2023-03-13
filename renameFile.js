var fs = require("fs")

fs.rename("myText.txt", "myRenameText.txt", function(err){
    if(err) throw err
    console.log("renamed!!")
})