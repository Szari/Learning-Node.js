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

const mkdir = (...args) => new Promise((resolve, reject) =>
    fs.mkdir(...args, (err, ...out) => {
        if(err) return reject(err);
        return resolve(...out)
    })
);
const writeFile = (...args) => new Promise((resolve, reject) =>
    fs.writeFile(...args, (err, ...out) => {
        if(err) return reject(err);
        return resolve(...out)
    })
);

const readFile = (...args) => new Promise((resolve, reject) =>
    fs.readFile(...args, (err, ...out) => {
        if (err) return reject(err);
        return resolve(...out);
    })
);

const unlink = (...args) => new Promise((resolve, reject) =>
    fs.unlink(...args, (err, ...out) => {
        if(err) return reject(err);
        return resolve(...out)
    })
);

const rmdir = (...args) => new Promise((resolve, reject) =>
    fs.rmdir(...args, (err, ...out) => {
        if(err) return reject(err);
        return resolve(...out)
    })
);


const main = async () => {
    await mkdir('files');
    await writeFile('./files/example.txt', 'Random words');
    console.log(await readFile('./files/example.txt', {encoding: 'utf8'}));
    await unlink('./files/example.txt');
    await rmdir('./files');
    console.log('Successfully deleted the file and folder');
};

main().catch(err => {
    console.error(err);
});
