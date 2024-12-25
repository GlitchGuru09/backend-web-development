const fs = require('fs');

//to create a file and write any content in the file
// fs.writeFile("test.txt","Hi this is shrey learning basics of node.js",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Done!")
//     }
// })

//to add further into the same file
// fs.appendFile("test.txt"," trying appendFile.",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Done!")
//     }
// })

//to rename the existing file 
// fs.rename("test.txt","sample.txt",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Done!")
//     }
// })

//to copy the existing file in some other folder or outside
// fs.copyFile("sample.txt","./copy/copy.txt",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Done!")
//     }
// })

//to delete any existing file
// fs.unlink("sample.txt",function(err){
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log("Done!")
//     }
// })

// fs.rmdir("./copy",{recursive:true}, function(err){
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log("removed!")
//     }
// })

fs.readFile("doc.txt", "utf8", function(err,data){
    if(err){
        console.log(err.message)
    }else{
        console.log(data)
    }
})