const http = require ('http'); //http core module in node js


// create server and the passing the req and res object with the function 
const server = http.createServer((req, res) => {}) // THIS LINE OF CODE CONSIST OF THE createserver method which is in the nodejs while the parameters passed represent (req, res) and are object type where the req consist of object which includes the method and the url in object format while the res includes headers and body

// processing a port number and checking for the environment variable of the
const PORT = process.env.PORT || 5000


server.listen(PORT , () => console.log(`listening on ${PORT}`));