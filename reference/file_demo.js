const path = require('path'); // this is a path module and it is a core module because it is included with node

// path file name
console.log(__filename); // this will console the entire path of the current file name to the end which is this.... (C:\Users\HP\Desktop\learning codes  file\reference\file_demo.js)

// Base filename
console.log(path.basename(__filename)); // this will print out the exact current filename i am working on and not printing out the total path to the current filename which is this.. (file_demo.js)

// path Directory name
console.log(path.dirname(__filename)); // this will console the entire path of the current directory/folder name to the end which is this.... (C:\Users\HP\Desktop\learning codes  file\reference)

// base dirname or directory name
console.log(path.basename(__dirname)); // this will print out the current directory/ folder name i am working on and not printing out the full path to the current folder/directory which is this.... (reference)

// file extension name
console.log(path.extname(__filename)); // this will print out the file extension either it is in ts, tsx, js, jsx or any other extension name

// Create path object
console.log(path.parse(__filename)); // this will print out the path object which includes information of the  (root, dir, ext, name, base filename with extension and filename)

// to access each of the object properties
console.log(path.parse(__filename).base); // this will print out information of the exact value of the key about to access using path.parse(__filename).key

// to join or concatenate path to a directory or folder
console.log(path.join(__dirname, 'test', 'hello.html')); // this will first create a test directory or folder, then create a hello html file in the test folder and then join the test folder to the current directory or folder name.









// from cgpt
const path = require('path');

// Resolve paths
console.log(path.resolve('foo', 'bar')); // Resolves to the absolute path
console.log(path.resolve('/foo', 'bar')); // Resolves to '/foo/bar'

// Join paths
console.log(path.join('/foo', 'bar', 'baz')); // Joins paths using the platform-specific separator

// Normalize paths
console.log(path.normalize('/foo/bar//baz/asdf/quux/..')); // Normalizes the path

// Check if path is absolute
console.log(path.isAbsolute('/foo/bar')); // true
console.log(path.isAbsolute('foo/bar')); // false

// Return the relative path from one path to another
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')); // Returns '../../impl/bbb'

// Return the directory name of a path
console.log(path.dirname('/foo/bar/baz.txt')); // '/foo/bar'

// Return the last portion of a path
console.log(path.basename('/foo/bar/baz.txt')); // 'baz.txt'

// Return the extension of a path
console.log(path.extname('index.html')); // '.html'

// Format a path object into a path string
console.log(path.format({ root: '/', dir: '/foo/bar', base: 'baz.txt', ext: '.txt', name: 'baz' })); // '/foo/bar/baz.txt'

// Check if a path exists
console.log(path.exists('/path/to/something')); // Deprecated

// Check if a path is a file
console.log(path.isFile('/path/to/something')); // Deprecated

// Check if a path is a directory
console.log(path.isDirectory('/path/to/something')); // Deprecated

// Check if a path is a symbolic link
console.log(path.isSymbolicLink('/path/to/something')); // Deprecated

// Create a path object
console.log(path.parse('/foo/bar/baz.txt')); // Returns an object with properties 'root', 'dir', 'base', 'ext', 'name'

// Resolve a sequence of paths or path segments into an absolute path
console.log(path.resolve('/foo/bar', './baz')); // '/foo/bar/baz'

// Get the platform-specific path delimiter
console.log(path.delimiter); // Returns ':' on POSIX systems, ';' on Windows

// Get the platform-specific path separator
console.log(path.sep); // Returns '/' on POSIX systems, '\' on Windows

// Get the path to the current file
console.log(__filename); // Returns the absolute path to the current file

// Get the path to the current directory
console.log(__dirname); // Returns the absolute path to the current directory

// Get the path to the user's home directory
console.log(path.join(require('os').homedir())); // Returns the absolute path to the user's home directory

// Get the relative path between two paths
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')); // Returns the relative path from the first path to the second path

// Get the directory name of a file path
console.log(path.dirname('/foo/bar/baz.txt')); // Returns '/foo/bar'

// Get the file name of a file path
console.log(path.basename('/foo/bar/baz.txt')); // Returns 'baz.txt'

// Get the extension of a file path
console.log(path.extname('index.html')); // Returns '.html'

// Normalize a file path
console.log(path.normalize('/foo/bar//baz/asdf/quux/..')); // Returns '/foo/bar/baz/asdf'

// Join multiple path segments into a single path
console.log(path.join('/foo', 'bar', 'baz')); // Returns '/foo/bar/baz'

// Resolve a sequence of paths or path segments into an absolute path
console.log(path.resolve('/foo/bar', './baz')); // Returns '/foo/bar/baz'

// Format a path object into a path string
console.log(path.format({ root: '/', dir: '/foo/bar', base: 'baz.txt', ext: '.txt', name: 'baz' })); // Returns '/foo/bar/baz.txt'

// Get the platform-specific path delimiter
console.log(path.delimiter); // Returns ':' on POSIX systems, ';' on Windows

// Get the platform-specific path separator
console.log(path.sep); // Returns '/' on POSIX systems, '\' on Windows

// Join paths
console.log(path.join('/foo', 'bar', 'baz')); // Returns '/foo/bar/baz'

// Normalize a path
console.log(path.normalize('/foo/bar//baz/asdf/quux/..')); // Returns '/foo/bar/baz/asdf'

// Check if a path is absolute
console.log(path.isAbsolute('/foo/bar')); // Returns true

// Check if a path is absolute
console.log(path.isAbsolute('foo/bar')); // Returns false

// Return the relative path from one path to another
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')); // Returns '../../impl/bbb'

// Return the directory name of a path
console.log(path.dirname('/foo/bar/baz.txt')); // Returns '/foo/bar'

// Return the last portion of a path
console.log(path.basename('/foo/bar/baz.txt')); // Returns 'baz.txt'

// Return the extension of a path
console.log(path.extname('index.html')); // Returns '.html'

// Format a path object into a path string
console.log(path.format({ root: '/', dir: '/foo/bar', base: 'baz.txt', ext: '.txt', name: 'baz' })); // Returns '/foo/bar/baz.txt'

// Parse a path into an object
console.log(path.parse('/foo/bar/baz.txt')); // Returns an object { root: '/', dir: '/foo/bar', base: 'baz.txt', ext: '.txt', name: 'baz' }

// Join paths
console.log(path.join('/foo', 'bar', 'baz')); // Returns '/foo/bar/baz'

// Normalize a path
console.log(path.normalize('/foo/bar//baz/asdf/quux/..')); // Returns '/foo/bar/baz/asdf'

// Resolve a sequence of paths or path segments into an absolute path
console.log(path.resolve('/foo/bar', './baz')); // Returns '/foo/bar/baz'

// Format a path object into a path string
console.log(path.format({ root: '/', dir: '/foo/bar', base: 'baz.txt', ext: '.txt', name: 'baz' })); // Returns '/foo/bar/baz.txt'
