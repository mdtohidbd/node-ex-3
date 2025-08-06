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
     res.write('<body><h1>Enter Your Details:</h1>');
     res.write('<form>')
     res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
     res.write('<label for="male">Male</label>');
     res.write('<input type="radio" id="male" name="gender" value="male" /> ');
     res.write('<label for="female">Female</label>');
     res.write('<input type="radio" id="female" name="gender" value="female" /> ');
     res.write('<input type="submit" value="submit">');


     res.write('</form>');

     res.write('</body>')
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
 