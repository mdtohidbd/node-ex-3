const http = require('http');

//function requestListener(req, res) {
   // console.log(req);}
//http.createServer(requestListener);

const server = http.createServer( (req, res) => {
    console.log(req.url, req.method,req.headers);
    if (req.url === '/'){
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome To Home</h1></body>')
    res.write('</html>')
    res.end();
    return res.end();
    }else if (req.url === '/products'){
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Checkout our products</h1></body>')
    res.write('</html>')
    res.end();
    return res.end();

    }

    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Like / Share </h1></body>')
    res.write('</html>')
    res.end();
});

const PORT = 3001;
server.listen(PORT,() =>{
    console.log(`Server running on address http://localhost:${PORT}`);

});
