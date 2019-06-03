// File system

const fs = require('fs');

// create file 
// fs.writeFile('example.txt', "This is an example", (err) =>{
//     if(err)
//         console.log(err);
//     else{
//         console.log('File successfuly created');
//         fs.readFile('example.txt', 'utf8', (err, file) =>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log(file);    
//         });
//     }

//     // rename file
//     fs.rename('example.txt', 'example1.txt', (err)=>{
//         if(err)
//             console.log(err);
//         else
//             console.log('Successfully renamed the file');      
//     });
// });

// // Append 
// fs.appendFile('example1.txt', 'Some data being appeded', (err) =>{
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully appended data to file');
// });

// // Delete the file
// fs.unlink('example1.txt', (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully deleted the file');
// });

// Create the folder 
fs.mkdir('files', (err)=>{
    if(err)
        console.log(err);
    else{
        fs.writeFile('./files/example.txt', 'Random words', (err)=>{
            if(err)
                console.log(err);
            else{
                console.log('Successfully created file');
                fs.readFile('./files/example.txt', 'utf8', (err, file)=>{
                    if(err)
                        console.log(err);
                    else
                        console.log(file); 
                });
                fs.unlink('./files/example.txt', (err)=>{
                    if(err)
                        console.log(err);  
                    else{
                        //Remove the folder 
                        //WHY DOESN'T IT WORK?!?!?!?
                        fs.rmdir('./files', (err)=>{
                            if(err)
                                console.log(err);
                            else    
                                console.log('Successfully deleted the file and folder');      
                        });
                    }     
                });
                
            }
        });
    }
});
