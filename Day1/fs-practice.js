//fileSystem is a inbuilt nodemodule fs is filesystem
//here we can see some important fs-methods.

const fs=require("fs");

//write file create file or overwrite the file 
fs.writeFile("./text.txt","i love node ,i love javaScript\n",()=>{
    try {
        console.log("text updated")
    } catch (error) {
        throw error
    }
})

//writeFilesync is almost same but ,it was synchronus.

// to add on data any file u can use fs.append,\n is added because to move to next line

fs.appendFile("./text.txt","this is my first day of node ,thank you\n ",()=>{
    try {
        console.log("text added ")
    } catch (error) {
        throw error.message
    }
})

//fs.rename is used for change the files name
fs.rename("text.txt","practice.txt",(err)=>{
   try {
    console.log("file name updated")
   } catch (error) {
    throw error
   }
})

fs.unlink("./practice.txt",(err)=>{
    try {
       console.log("file deleted") 
    } catch (error) {
       throw error 
    }
})
