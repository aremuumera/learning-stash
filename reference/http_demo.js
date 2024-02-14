const http = require('http'); // the http mode from node core server

// create a server object
http.createServer((req, res) => {
    // write a response
    res.write('hello world i am with you');
    res.end();
    // in other for the server to run it needs to listen to a port 
}).listen(3000, () => console.log('listening on port...')); // to show something in the console


// this for the request object....
//after creating a server the to listen to the localhost or domain name of the site, 
// it constantly wait to listen and receive a requests of information/data either to transfer/to send from the domain name/localhost an the browser can only recognize the transfer of this files/ data from the server to the user computer through the port number or door number
// the request listened to by the server are inform of object
// console.log(req)... will give a huge load of object with different things or properties about the request which includes the url,headers or metadata of the html file, method of the request (get, method,post...)


// this is for the response object
// after listening and getting the request from the user, the server then send response pertaining to the request from the browser... and this response also have their object form
// the response can be use the send any data eg... the header content (tells about the type to metadata/data we are sending back eg is it text/.html.json.jsx)
// so therefore, we set the type of data or content (eg based on there ext type name) ie(res.set...), we write the data or content to the content type format ie (res.write...)and lastly we end the response and send it back to the browser ie(res.end)


// there is also the response status codes

//100 range - information responses for the browser
//200 range --- ok or success response
//300 range --- resource moved or codes for redirect
//400 -range -- not found user or client error
//500 range  -- server error codes


// let say i have a website and i want to redirect
// i just need to create another case statement and set it to the redirect path or link, 
//change the status code to 301, set the response header to the previous path and end the response;







// from cgpt

// Example 1: Importing the http module
const http = require('http');

// Example 2: Creating a simple HTTP server
const server = http.createServer((req, res) => {
    res.write('Hello, World!'); // Writing a response
    res.end(); // Ending the response
});

// Example 3: Listening on a specific port
server.listen(3000);

// Example 4: Handling different routes using the request URL
const serverWithRoutes = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('This is the home page');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is the about page');
        res.end();
    } else {
        res.write('Page not found');
        res.end();
    }
});

// Example 5: Listening on a specific port with route handling
serverWithRoutes.listen(3001);

// Example 6: Handling POST requests
const serverPost = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log('Received data:', body);
            res.write('Data received successfully');
            res.end();
        });
    } else {
        res.write('Invalid request');
        res.end();
    }
});

// Example 7: Listening on a specific port for POST requests
serverPost.listen(3002);

// Example 8: Handling query parameters in the URL
const serverWithQueryParams = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const queryParams = url.searchParams;
    const name = queryParams.get('name');
    res.write(`Hello, ${name || 'World'}!`);
    res.end();
});

// Example 9: Listening on a specific port for query parameter handling
serverWithQueryParams.listen(3003);

// Example 10: Handling different HTTP methods
const serverWithMethods = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.write('GET request received');
    } else if (req.method === 'POST') {
        res.write('POST request received');
    } else if (req.method === 'PUT') {
        res.write('PUT request received');
    } else if (req.method === 'DELETE') {
        res.write('DELETE request received');
    } else {
        res.write('Unsupported method');
    }
    res.end();
});

// Example 11: Listening on a specific port for handling different HTTP methods
serverWithMethods.listen(3004);

// Example 12: Handling request headers
const serverWithHeaders = http.createServer((req, res) => {
    const headers = req.headers;
    res.write(`Request headers: ${JSON.stringify(headers)}`);
    res.end();
});

// Example 13: Listening on a specific port for handling request headers
serverWithHeaders.listen(3005);

// Example 14: Setting response headers
const serverResponseHeaders = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><h1>Hello, World!</h1></body></html>');
    res.end();
});

// Example 15: Listening on a specific port for setting response headers
serverResponseHeaders.listen(3006);

// Example 16: Handling file uploads
const formidable = require('formidable');
const fs = require('fs');

const serverFileUpload = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/upload') {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) throw err;
            const oldPath = files.filetoupload.path;
            const newPath = './uploads/' + files.filetoupload.name;
            fs.rename(oldPath, newPath, (err) => {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.write('Invalid request');
        res.end();
    }
});

// Example 17: Listening on a specific port for file uploads
serverFileUpload.listen(3007);

// Example 18: Handling cookies
const serverWithCookies = http.createServer((req, res) => {
    const cookie = req.headers.cookie;
    res.setHeader('Set-Cookie', 'username=test');
    res.write(`Received cookie: ${cookie || 'None'}`);
    res.end();
});

// Example 19: Listening on a specific port for handling cookies
serverWithCookies.listen(3008);

// Example 20: Redirecting requests
const serverRedirect = http.createServer((req, res) => {
    res.writeHead(301, { 'Location': 'http://example.com' });
    res.end();
});

// Example 21: Listening on a specific port for redirecting requests
serverRedirect.listen(3009);

// Example 22: Serving static files
const fs = require('fs');
const path = require('path');

const serverStaticFiles = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const contentType = getContentType(filePath);
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

// Function to get content type
function getContentType(filePath) {
    const extname = path.extname(filePath);
    switch (extname) {
        case '.js':
            return 'text/javascript';
        case '.css':
            return 'text/css';
        case '.json':
            return 'application/json';
        case '.png':
            return 'image/png';
        case '.jpg':
            return 'image/jpg';
        case '.wav':
            return 'audio/wav';
        default:
            return 'text/html';
    }
}

// Example 23: Listening on a specific port for serving static files
serverStaticFiles.listen(3010);

// Example 24: Handling CORS (Cross-Origin Resource Sharing)
const serverWithCORS = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
    } else {
        // Handle regular requests
        res.write('Hello, CORS!');
        res.end();
    }
});

// Example 25: Listening on a specific port for handling CORS
serverWithCORS.listen(3011);

// Example 26: Basic authentication
const serverBasicAuth = http.createServer((req, res) => {
    const auth = req.headers.authorization;
    if (auth) {
        const credentials = Buffer.from(auth.split(' ')[1], 'base64').toString().split(':');
        const username = credentials[0];
        const password = credentials[1];
        if (username === 'admin' && password === 'password') {
            res.write('Authentication successful');
        } else {
            res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Restricted Area"' });
            res.write('Authentication failed');
        }
    } else {
        res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Restricted Area"' });
        res.write('Authentication required');
    }
    res.end();
});

// Example 27: Listening on a specific port for basic authentication
serverBasicAuth.listen(3012);

// Example 28: Serving compressed content (gzip)
const zlib = require('zlib');

const serverWithCompression = http.createServer((req, res) => {
    const acceptEncoding = req.headers['accept-encoding'];
    if (acceptEncoding && acceptEncoding.includes('gzip')) {
        const gzip = zlib.createGzip();
        res.writeHead(200, { 'Content-Encoding': 'gzip' });
        fs.createReadStream('largefile.txt').pipe(gzip).pipe(res);
    } else {
        fs.createReadStream('largefile.txt').pipe(res);
    }
});

// Example 29: Listening on a specific port for serving compressed content
serverWithCompression.listen(3013);

// Example 30: Handling HTTP/2 requests
const http2 = require('http2');

const serverHTTP2 = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.end('Hello, HTTP/2!');
});

// Example 31: Listening on a specific port for handling HTTP/2 requests
serverHTTP2.listen(3014);

// Example 32: Handling WebSocket connections
const WebSocket = require('ws');

const serverWithWebSocket = http.createServer((req, res) => {
    res.end('WebSocket server running');
});

const wss = new WebSocket.Server({ server: serverWithWebSocket });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
    });
    ws.send('Hello, WebSocket client!');
});

// Example 33: Listening on a specific port for handling WebSocket connections
serverWithWebSocket.listen(3015);

// Example 34: Handling HTTP/3 requests (experimental)
// Note: Node.js does not have built-in support for HTTP/3 yet.
// You would typically use a third-party library like quic or hyper.

// Example 35: Handling server-side events (SSE)
const serverWithSSE = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    // Send a message every 5 seconds
    const intervalId = setInterval(() => {
        res.write(`data: ${new Date().toISOString()}\n\n`);
    }, 5000);

    // Close the connection after 25 seconds
    setTimeout(() => {
        clearInterval(intervalId);
        res.end();
    }, 25000);
});

// Example 36: Listening on a specific port for handling server-side events
serverWithSSE.listen(3016);

// Example 37: Handling range requests
const serverWithRangeRequests = http.createServer((req, res) => {
    const range = req.headers.range;
    const fileSize = fs.statSync('largefile.txt').size;
    const chunkSize = 1024 * 1024; // 1 MB

    if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunkStart = Math.min(start, fileSize - 1);
        const chunkEnd = Math.min(chunkStart + chunkSize, end);
        const contentLength = chunkEnd - chunkStart + 1;
        const contentRange = `bytes ${chunkStart}-${chunkEnd}/${fileSize}`;

        res.writeHead(206, {
            'Content-Range': contentRange,
            'Accept-Ranges': 'bytes',
            'Content-Length': contentLength,
            'Content-Type': 'video/mp4'
        });

        const stream = fs.createReadStream('largefile.txt', { start: chunkStart, end: chunkEnd });
        stream.pipe(res);
    } else {
        res.writeHead(200, {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4'
        });
        fs.createReadStream('largefile.txt').pipe(res);
    }
});

// Example 38: Listening on a specific port for handling range requests
serverWithRangeRequests.listen(3017);

// Example 39: Handling long-lived connections (HTTP Keep-Alive)
const serverKeepAlive = http.createServer((req, res) => {
    // Simulate a long-running task
    setTimeout(() => {
        res.writeHead(200);
        res.end('Response after 10 seconds');
    }, 10000);
});

// Example 40: Listening on a specific port for handling long-lived connections
serverKeepAlive.listen(3018);

// Example 41: Handling HTTP trailers
const serverWithTrailers = http.createServer((req, res) => {
    req.on('end', () => {
        console.log('End of request');
    });

    req.on('close', () => {
        console.log('Connection closed');
    });

    res.setHeader('Trailer', 'Content-MD5');
    res.write('Hello, World!');
    res.addTrailers({ 'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667' });
    res.end();
});

// Example 42: Listening on a specific port for handling HTTP trailers
serverWithTrailers.listen(3019);

// Example 43: Handling HTTP/2 PUSH_PROMISE
const serverWithPushPromise = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    if (req.url === '/') {
        res.push('/styles.css', {});
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<link rel="stylesheet" href="/styles.css">Hello, HTTP/2 PUSH_PROMISE!');
    } else if (req.url === '/styles.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end('body { background-color: yellow; }');
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

// Example 44: Listening on a specific port for handling HTTP/2 PUSH_PROMISE
serverWithPushPromise.listen(3020);

// Example 45: Handling HEAD requests
const serverWithHeadRequest = http.createServer((req, res) => {
    if (req.method === 'HEAD') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end();
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

// Example 46: Listening on a specific port for handling HEAD requests
serverWithHeadRequest.listen(3021);

// Example 47: Handling chunked transfer encoding
const serverWithChunkedEncoding = http.createServer((req, res) => {
    res.writeHead(200, { 'Transfer-Encoding': 'chunked' });
    res.write('5\r\nHello\r\n');
    setTimeout(() => {
        res.write('7\r\n, World\r\n');
        res.end('0\r\n\r\n');
    }, 1000);
});

// Example 48: Listening on a specific port for handling chunked transfer encoding
serverWithChunkedEncoding.listen(3022);

// Example 49: Handling HTTP/2 trailers
const serverWithHTTP2Trailers = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.addTrailers({ 'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667' });
    res.end('Hello, HTTP/2 with trailers!');
});

// Example 50: Listening on a specific port for handling HTTP/2 trailers
serverWithHTTP2Trailers.listen(3023);

// Example 51: Handling compressed response bodies (Brotli)
const brotli = require('brotli');

const serverWithBrotli = http.createServer((req, res) => {
    const acceptEncoding = req.headers['accept-encoding'];
    if (acceptEncoding && acceptEncoding.includes('br')) {
        const compressed = brotli.compress('Hello, Brotli!');
        res.writeHead(200, { 'Content-Encoding': 'br' });
        res.end(compressed);
    } else {
        res.end('Hello, World!');
    }
});

// Example 52: Listening on a specific port for handling compressed response bodies (Brotli)
serverWithBrotli.listen(3024);

// Example 53: Handling reverse proxy requests
const proxy = require('http-proxy').createProxyServer();

const serverWithProxy = http.createServer((req, res) => {
    proxy.web(req, res, { target: 'http://localhost:8080' });
});

// Example 54: Listening on a specific port for handling reverse proxy requests
serverWithProxy.listen(3025);

// Example 55: Handling HTTP/2 server push
const serverWithPush = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    if (req.url === '/') {
        const pushStream = res.push('/styles.css', { response: { 'Content-Type': 'text/css' }});
        pushStream.end('body { background-color: yellow; }');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<link rel="stylesheet" href="/styles.css">Hello, HTTP/2 server push!');
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

// Example 56: Listening on a specific port for handling HTTP/2 server push
serverWithPush.listen(3026);

// Example 57: Handling HTTP/2 server push with preload
const serverWithPushPreload = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<link rel="preload" href="/styles.css" as="style"><link rel="stylesheet" href="/styles.css">Hello, HTTP/2 server push with preload!');
    } else if (req.url === '/styles.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end('body { background-color: yellow; }');
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

// Example 58: Listening on a specific port for handling HTTP/2 server push with preload
serverWithPushPreload.listen(3027);

// Example 59: Handling client errors (4xx responses)
const serverClientError = http.createServer((req, res) => {
    res.writeHead(404);
    res.end('Not found');
});

// Example 60: Listening on a specific port for handling client errors
serverClientError.listen(3028);

// Example 61: Handling server errors (5xx responses)
const serverServerError = http.createServer((req, res) => {
    res.writeHead(500);
    res.end('Internal server error');
});

// Example 62: Listening on a specific port for handling server errors
serverServerError.listen(3029);

// Example 63: Handling custom error pages
const serverCustomErrorPage = http.createServer((req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
});

// Example 64: Listening on a specific port for handling custom error pages
serverCustomErrorPage.listen(3030);

// Example 65: Handling HTTP pipelining
const serverWithPipelining = http.createServer((req, res) => {
    // Simulate a long-running task
    setTimeout(() => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Response after 10 seconds');
    }, 10000);
});

// Example 66: Listening on a specific port for handling HTTP pipelining
serverWithPipelining.listen(3031);

// Example 67: Handling HTTP/2 settings frame
const serverWithSettingsFrame = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.connection.encrypted.setSetting(http2.settings.INITIAL_WINDOW_SIZE, 65535);
    res.end('Hello, HTTP/2 with custom settings frame!');
});

// Example 68: Listening on a specific port for handling HTTP/2 settings frame
serverWithSettingsFrame.listen(3032);

// Example 69: Handling HTTP/2 priority frames
const serverWithPriorityFrame = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.priority({ exclusive: true, parentStreamId: 1, weight: 20, dependency: 1 });
    res.end('Hello, HTTP/2 with priority frame!');
});

// Example 70: Listening on a specific port for handling HTTP/2 priority frames
serverWithPriorityFrame.listen(3033);

// Example 71: Handling HTTP/2 PUSH_PROMISE_CANCEL frames
const serverWithPushPromiseCancelFrame = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.pushStream({ ':path': '/styles.css' }, (pushStream) => {
        pushStream.respond({ 'Content-Type': 'text/css' });
        pushStream.end('body { background-color: yellow; }');
    });
    res.pushStream({ ':path': '/image.jpg' }, (pushStream) => {
        pushStream.respond({ 'Content-Type': 'image/jpeg' });
        pushStream.end(fs.readFileSync('image.jpg'));
    });
    res.end('Hello, HTTP/2 PUSH_PROMISE_CANCEL!');
});

// Example 72: Listening on a specific port for handling HTTP/2 PUSH_PROMISE_CANCEL frames
serverWithPushPromiseCancelFrame.listen(3034);

// Example 73: Handling HTTP/2 RST_STREAM frames
const serverWithRSTStreamFrame = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.connection.end();
});

// Example 74: Listening on a specific port for handling HTTP/2 RST_STREAM frames
serverWithRSTStreamFrame.listen(3035);

// Example 75: Handling HTTP/2 WINDOW_UPDATE frames
const serverWithWindowUpdateFrame = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.write('Hello, HTTP/2!');
    res.connection.windowUpdate(1024 * 1024); // Increase the window size by 1 MB
    res.end();
});

// Example 76: Listening on a specific port for handling HTTP/2 WINDOW_UPDATE frames
serverWithWindowUpdateFrame.listen(3036);

// Example 77: Handling HTTP/2 ping frames
const serverWithPingFrame = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    if (req.headers['ping-from-client']) {
        res.writeHead(200, { 'ping-to-client': 'pong' });
        res.end();
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Hello, HTTP/2 with ping frame!');
    }
});

// Example 78: Listening on a specific port for handling HTTP/2 ping frames
serverWithPingFrame.listen(3037);

// Example 79: Handling HTTP/2 settings frames with ACK flag
const serverWithSettingsAckFrame = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, HTTP/2 with settings ACK frame!');
});

// Example 80: Listening on a specific port for handling HTTP/2 settings frames with ACK flag
serverWithSettingsAckFrame.listen(3038);

// Example 81: Handling HTTP/2 headers frames
const serverWithHeadersFrame = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, HTTP/2 with headers frame!');
});

// Example 82: Listening on a specific port for handling HTTP/2 headers frames
serverWithHeadersFrame.listen(3039);

// Example 83: Handling HTTP/2 continuation frames
const serverWithContinuationFrame = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, HTTP/2 with continuation frame!');
});

// Example 84: Listening on a specific port for handling HTTP/2 continuation frames
serverWithContinuationFrame.listen(3040);

// Example 85: Handling HTTP/2 priority frames with exclusive dependency
const serverWithPriorityExclusiveFrame = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.priority({ exclusive: true, parentStreamId: 1, weight: 20, dependency: 1 });
    res.end('Hello, HTTP/2 with priority frame (exclusive)!');
});

// Example 86: Listening on a specific port for handling HTTP/2 priority frames with exclusive dependency
serverWithPriorityExclusiveFrame.listen(3041);

// Example 87: Handling HTTP/2 priority frames with non-exclusive dependency
const serverWithPriorityNonExclusiveFrame = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.priority({ exclusive: false, parentStreamId: 1, weight: 20, dependency: 1 });
    res.end('Hello, HTTP/2 with priority frame (non-exclusive)!');
});

// Example 88: Listening on a specific port for handling HTTP/2 priority frames with non-exclusive dependency
serverWithPriorityNonExclusiveFrame.listen(3042);

// Example 89: Handling HTTP/2 data frames
const serverWithDataFrame = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    req.on('data', (chunk) => {
        console.log(`Received data: ${chunk}`);
    });
    req.on('end', () => {
        res.end('Data received successfully');
    });
});

// Example 90: Listening on a specific port for handling HTTP/2 data frames
serverWithDataFrame.listen(3043);

// Example 91: Handling HTTP/2 GOAWAY frames
const serverWithGoAwayFrame = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.connection.goAway();
});

// Example 92: Listening on a specific port for handling HTTP/2 GOAWAY frames
serverWithGoAwayFrame.listen(3044);

// Example 93: Handling HTTP/2 WINDOW_UPDATE frames with a large increment
const serverWithLargeWindowUpdate = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.write('Hello, HTTP/2!');
    res.connection.windowUpdate(4294967295); // Maximum value
    res.end();
});

// Example 94: Listening on a specific port for handling HTTP/2 WINDOW_UPDATE frames with a large increment
serverWithLargeWindowUpdate.listen(3045);

// Example 95: Handling HTTP/2 frames with priority and data
const serverWithPriorityAndData = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.priority({ exclusive: true, parentStreamId: 1, weight: 20, dependency: 1 });
    res.write('Hello, HTTP/2!');
    res.end();
});

// Example 96: Listening on a specific port for handling HTTP/2 frames with priority and data
serverWithPriorityAndData.listen(3046);

// Example 97: Handling HTTP/2 frames with PUSH_PROMISE and data
const serverWithPushPromiseAndData = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.pushStream({ ':path': '/styles.css' }, (pushStream) => {
        pushStream.respond({ 'Content-Type': 'text/css' });
        pushStream.end('body { background-color: yellow; }');
    });
    res.write('Hello, HTTP/2 with PUSH_PROMISE!');
    res.end();
});

// Example 98: Listening on a specific port for handling HTTP/2 frames with PUSH_PROMISE and data
serverWithPushPromiseAndData.listen(3047);

// Example 99: Handling HTTP/2 frames with multiple data frames
const serverWithMultipleDataFrames = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, (req, res) => {
    res.write('Data frame 1');
    res.write('Data frame 2');
    res.end();
});

// Example 100: Listening on a specific port for handling HTTP/2 frames with multiple data frames
serverWithMultipleDataFrames.listen(3048);


const http = require('http');

// Example 101: Creating an HTTP server that listens on a specific IP address
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
}).listen(3000, '127.0.0.1');

// Example 102: Handling HTTP requests with different methods
http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('GET Request');
    } else if (req.method === 'POST') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('POST Request');
    } else {
        res.writeHead(405, {'Content-Type': 'text/plain'});
        res.end('Method Not Allowed');
    }
}).listen(3001);

// Example 103: Serving static files using the `fs` module
const fs = require('fs');
http.createServer((req, res) => {
    if (req.url === '/index.html') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('File not found!');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }
}).listen(3002);

// Example 104: Redirecting HTTP requests
http.createServer((req, res) => {
    res.writeHead(301, {'Location': 'https://www.example.com'});
    res.end();
}).listen(3003);

// Example 105: Handling HTTP request headers
http.createServer((req, res) => {
    const userAgent = req.headers['user-agent'];
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`User-Agent: ${userAgent}`);
}).listen(3004);

// Example 106: Handling HTTP request parameters
http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const params = url.searchParams;
    const name = params.get('name');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Hello, ${name || 'World'}!`);
}).listen(3005);

// Example 107: Handling HTTP request cookies
http.createServer((req, res) => {
    const cookie = req.headers.cookie;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Cookie: ${cookie}`);
}).listen(3006);

// Example 108: Handling HTTP request query parameters
http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const params = url.searchParams;
    const name = params.get('name');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Hello, ${name || 'World'}!`);
}).listen(3007);

// Example 109: Parsing HTTP request body
http.createServer((req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Received data: ${body}`);
    });
}).listen(3008);

// Example 110: Handling HTTP response status codes
http.createServer((req, res) => {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
}).listen(3009);

// Example 111: Setting HTTP response headers
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html', 'X-Custom-Header': 'Value'});
    res.end('<h1>Hello, World!</h1>');
}).listen(3010);

// Example 112: Sending JSON response
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const data = { message: 'Hello, World!' };
    res.end(JSON.stringify(data));
}).listen(3011);

// Example 113: Serving a file as attachment
http.createServer((req, res) => {
    const fileName = 'example.txt';
    res.writeHead(200, {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${fileName}"`
    });
    const fileContent = 'This is a downloadable file.';
    res.end(fileContent);
}).listen(3012);

// Example 114: Handling HTTP request timeouts
http.createServer((req, res) => {
    req.setTimeout(5000, () => {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Request timeout');
    });
}).listen(3013);

// Example 115: Handling HTTP response timeouts
http.createServer((req, res) => {
    res.setTimeout(5000, () => {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Response timeout');
    });
}).listen(3014);

// Example 116: Sending HTTP response before completing request processing
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Processing...');
    setTimeout(() => {
        res.end('Request processed');
    }, 5000);
}).listen(3015);

// Example 117: Handling HTTP request routing
const routes = {
    '/': (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Home Page');
    },
    '/about': (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('About Page');
    },
    '/contact': (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Contact Page');
    }
};

http.createServer((req, res) => {
    const routeHandler = routes[req.url];
    if (routeHandler) {
        routeHandler(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
}).listen(3016);

// Example 118: Handling HTTP response compression
const zlib = require('zlib');
http.createServer((req, res) => {
    const acceptEncoding = req.headers['accept-encoding'];
    if (acceptEncoding && acceptEncoding.includes('gzip')) {
        res.writeHead(200, {'Content-Encoding': 'gzip', 'Content-Type': 'text/plain'});
        zlib.gzip('Compressed content', (err, buffer) => {
            if (err) throw err;
            res.end(buffer);
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Uncompressed content');
    }
}).listen(3017);

// Example 119: Handling HTTP/2 push streams
const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
});

server.on('stream', (stream, headers) => {
    if (headers[':path'] === '/styles.css') {
        stream.respondWithFile('styles.css', {'Content-Type': 'text/css'});
    }
});

server.listen(8443);

// Example 120: Handling HTTP/2 server push
const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
});

server.on('stream', (stream, headers) => {
    if (headers[':path'] === '/index.html') {
        stream.pushStream({ ':path': '/styles.css' }, (pushStream) => {
            pushStream.respondWithFile('styles.css', {'Content-Type': 'text/css'});
        });
        stream.respondWithFile('index.html', {'Content-Type': 'text/html'});
    }
});

server.listen(8444);
