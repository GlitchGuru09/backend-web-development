const fs = require('fs');

// fs.writeFile("test.txt","Hi this is shrey learning basics of node.js",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Done!")
//     }
// })

// fs.appendFile("test.txt"," trying appendFile.",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Done!")
//     }
// })

fs.rename("test.txt","sample.txt",function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Done!")
    }
})