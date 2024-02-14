const fs = require('fs'); // this is the file system module which is a core module in the node js

const path = require('path') // this is the path module which is a core module in the node

//Create folder   // to create a folder in the current working directory and this method is the asynchronous method 
fs.mkdir(path.join(__dirname, '/test'), {}, err =>{   // using the filesystem module, the following are firstly, creating a test folder, followed adding an object i this case i have no object therefore it is an empty object and passing a call back function because it is asynchronous // the object can also serve as a argument and can be replaced with string then we need to pass a parameter beside the call back to replace the argument as it is a data
    if (err) { // here i am handling the err from the call back function
        throw err // throw the err in the console
    }else{
        console.log('Folder created....');
    }
    
})

// create and write to file // trying to create a file in a folder and save it in the working directory

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello', err => { // in this case, the writefile creates a file in the folder and saves it in the current directory... i created a new text file in the test dir/folder and saved it in the working directory then i added 
    if (err) throw err;
    console.log('I have created a hello text file');
});

// append a content to an existing file
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'aremu = [fk,sj]', err => { // in this case, we are using the appendFile to appendFile to add  another content in the hello.text file instead of using writeFile because writeFile overwrites the file
    if (err) throw err;
    console.log('I have created a hello text file');
});

// Read File // when reading a file a buffer is a data send as package when reading a file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => { // this case i am trying to read the file using the (character encoding which is utf8 to be able to read the data in characters in the file) in the hello.txt file and print the data in the file in the console
    console.log(data);
});

// to Rename file 
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if (err) throw err;
console.log('file named...');
});






// from cgpt

const fs = require('fs');
const path = require('path');

// Create a directory
fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
    if (err) throw err;
    console.log('Directory created');
});

// Create a file and write content to it
fs.writeFile(path.join(__dirname, 'test', 'example.txt'), 'This is some content', (err) => {
    if (err) throw err;
    console.log('File created and content written');
});

// Append content to an existing file
fs.appendFile(path.join(__dirname, 'test', 'example.txt'), '\nThis is additional content', (err) => {
    if (err) throw err;
    console.log('Content appended to file');
});

// Read file content // while reading a file and i get a buffer which is the data in the file,r too understand it, i need to convert it to string using the data.tostring() method or using the encoding format to utf8
fs.readFile(path.join(__dirname, 'test', 'example.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:');
    console.log(data);
});

// Rename a file
fs.rename(path.join(__dirname, 'test', 'example.txt'), path.join(__dirname, 'test', 'renamed-example.txt'), (err) => {
    if (err) throw err;
    console.log('File renamed');
});

// Delete a file
fs.unlink(path.join(__dirname, 'test', 'renamed-example.txt'), (err) => {
    if (err) throw err;
    console.log('File deleted');
});

// Delete a directory
fs.rmdir(path.join(__dirname, 'test'), (err) => {
    if (err) throw err;
    console.log('Directory deleted');
});

// Check if a file or directory exists
fs.exists(path.join(__dirname, 'test'), (exists) => {
    console.log(`Does the directory exist? ${exists}`);
});

// Get file statistics
fs.stat(path.join(__dirname, 'test', 'example.txt'), (err, stats) => {
    if (err) throw err;
    console.log('File stats:');
    console.log(stats);
});

// Copy a file
fs.copyFile(path.join(__dirname, 'test', 'example.txt'), path.join(__dirname, 'test', 'copy-example.txt'), (err) => {
    if (err) throw err;
    console.log('File copied');
});

// Watch for changes in a file
fs.watch(path.join(__dirname, 'test', 'example.txt'), (eventType, filename) => {
    console.log(`File ${filename} changed - ${eventType}`);
});

// Create a read stream from a file
const readStream = fs.createReadStream(path.join(__dirname, 'test', 'example.txt'), 'utf8');
readStream.on('data', (chunk) => {
    console.log('Read stream data:');
    console.log(chunk);
});
readStream.on('end', () => {
    console.log('Read stream end');
});

// Create a write stream to a file
const writeStream = fs.createWriteStream(path.join(__dirname, 'test', 'write-example.txt'));
writeStream.write('Some data to write\n');
writeStream.end();

// Pipe data from a read stream to a write stream
const pipedStream = fs.createReadStream(path.join(__dirname, 'test', 'example.txt'), 'utf8')
    .pipe(fs.createWriteStream(path.join(__dirname, 'test', 'piped-example.txt')));

// Create a symbolic link to a file
fs.symlink(path.join(__dirname, 'test', 'example.txt'), path.join(__dirname, 'test', 'example-link.txt'), 'file', (err) => {
    if (err) throw err;
    console.log('Symbolic link created');
});

// Create a temporary file
fs.mkdtemp(path.join(__dirname, 'test', 'tmp-'), (err, folder) => {
    if (err) throw err;
    console.log(`Temporary folder created: ${folder}`);
});

// Read the contents of a directory
fs.readdir(path.join(__dirname, 'test'), (err, files) => {
    if (err) throw err;
    console.log('Files in directory:');
    console.log(files);
});

// Get the absolute path of a file or directory
console.log('Absolute path:', path.resolve('test'));

// Get the relative path between two paths
console.log('Relative path:', path.relative(__dirname, 'test'));

// Join multiple path segments into a single path
console.log('Joined path:', path.join(__dirname, 'test', 'example.txt'));

// Normalize a path
console.log('Normalized path:', path.normalize('test//example.txt'));

// Check if a path is absolute
console.log('Is absolute path?', path.isAbsolute(__dirname));

// Get the directory name of a path
console.log('Directory name:', path.dirname(path.join(__dirname, 'test', 'example.txt')));

// Get the file name of a path
console.log('File name:', path.basename(path.join(__dirname, 'test', 'example.txt')));

// Get the extension of a file
console.log('File extension:', path.extname(path.join(__dirname, 'test', 'example.txt')));

// Parse a path into an object
console.log('Parsed path:', path.parse(path.join(__dirname, 'test', 'example.txt')));

// Serialize a path object into a path string
console.log('Serialized path:', path.format({ dir: __dirname, base: 'test/example.txt' }));


// to read and write small data files

// in fs module, all the methods are all in asynchronous format
// 1. we read the data in the file, 
// 2 we write data into a file and also overwrite data the file
// 3 we create or make folder/directory 



// if we are to read and write to large file data... we are to use streams and buffers
// streams and buffers

// streams are objects is all about using the data before it has finished loading, or objects that allows the reading of data from a source and write the data to a destination or anither s 
//therefore we are going to be using a path/ stream to send the large data to the browser and along the path or stream there are small 
// containers/boxes called (BUFFERS): this buffers are contains small chunks of data and are packaged up into a container and then send down when filled into another container.
// therefore,  once the previous container/Buffer is filled, it pass down the data into another buffer and this movement of data from one buffer to another occur through the stream/path 

// therefore, when we get  a new chunk of data from the buffer we can start using it and this is mostly us in netflix/youtube without waiting for the data to fully load
