// taking in all the modules


const fs = require('fs');
const path = require('path');
const http = require('http');
// creating a server
const server = http.createServer((req, res) => {
   // console.log(req.url); // so i print this, i could see what url is being called which will output inform of /, /about, /about/test 

   // here is the first req to read the index.html file
//    if(req.url === '/'){
//     // adding http header.. in this case if the response from an http server is supposed to be displayed as html document,
//     // i need to include an http header with the correct content type
//     // res.writeHead(200, {'Content-Type': 'text/html'});  // the first arg in the response is a status code 200 given ok, while the second argument of the response is an object containing res headers
//     // res.end('<h1>Home</h1>')
//     // i am using the fs module to load the pages 

//     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) =>{   // in this case i use the fs module to read the index.html file in the public folder
//         if (err) throw err; // we must always check for the err because it is a call back
//         res.writeHead(200, {'Content-Type': 'text/html'});  // the first arg in the response is a status code 200 given ok, while the second argument of the response is an object containing res headers
//         res.end(content);
//     })
//    }


   // here is the second req to read the about.html file
//    if (req.url === '/about'){
//     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) =>{   // in this case i use the fs module to read the index.html file in the public folder
//         if (err) throw err; // we must always check for the err because it is a call back
//         res.writeHead(200, {'Content-Type': 'text/html'});  // the first arg in the response is a status code 200 given ok, while the second argument of the response is an object containing res headers
//         res.end(content);
//     })
//    }


// here i am assuming we are trying to work with a rest api or fetch data from a database.... i wont be serving an ht 
// if (req.url === '/api/users'){
//         const users = [
//             {name: 'John', age:40},
//             {name: 'John', age:30}
//         ];
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(users));
//        }


// the previous request.url are not efficient because i need to serve html, css pages, images and the likes
// to Build file path or create path for all the files instead of reading the file each path or creating each path individually
let filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

// set extension of the file 
let extname = path.extname(filepath); //return the extension name which is either .html, .js or .css

// set the initial content type
let contentType = 'text/html';

// check for the ext name and set the content type the ext name using a switch statement
switch (extname) {
    case'.js':
    contentType = 'text/javascript'; 
    break;
    case'.css':
    contentType = 'text/css'; 
    break;
    case'.json':
    contentType = 'application/json'; 
    break;
    case'.jpg':
    contentType = 'image/jpg';  
    break;
    case'.png':
    contentType = 'image/png'; 
    break;
}

// so now i want to load or read each file
fs.readFile(filepath, (err, content) => {
    if(err) { // normal handling of error nad therefore we are checking for specific type of error
       // we are checking for if the err.code which is 404 == ENOENT AND this is just representing an error
       // page not found condition
            if(err.code == 'ENOENT'){ // if page is not found

            // i am creating a file path for just the 404 error if it persists
            fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                res.writeHead(200, {'Content-Type': 'text/html'}); // sending a 200/ok response
             res.end(content, 'utf8'); // here we want to send the content
            })
           }else{ // if there is error and not the ENOENT code
            // some server error
            res.writeHead(500); //
            res.end(`Server Error: ${err.code}`);
        }
    }   else{ 
        // this means if there is no error... there is a success message
        res.writeHead(200, {'Content-Type': contentType});
        res.end(content, 'utf8');
         //
        }
    });
}); 

//const port = 5000; // the server is going to run on a port but when we deploy it, it is not always going to run on the port number:5000 rather it runs in an environment variable
// therefore it is going to first run on this(process.env.PORT) then if it is not found it will then run on 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));