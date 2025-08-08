const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/Home'){
    res.write('<h1>Welcome to Home</h1>');
    return res.end();
  }else if (req.url === '/Men'){
    res.write('<h1>Welcome to Men</h1>');
    return res.end();

  }else if (req.url === '/Women'){
    res.write('<h1>Welcome to Women</h1>');
    return res.end();
  }else if (req.url === '/Kids'){
    res.write('<h1>Welcome to Kids</h1>');
    return res.end();
  }else if (req.url === '/cart'){
    res.write('<h1>Welcome to cart</h1>');
    return res.end();
  }



  res.write(`
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
</head>
<body>
    <head>
        <nav>
            <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Men">Men</a></li>
                <li><a href="/Women">Women</a></li>
                <li><a href="/Kids">Kids</a></li>
                <li><a href="/cart">cart </li>
            </ul>
        </nav>
    </head>
</body>
</html>
`);
  res.end();
});

server.listen(3001, () => {
  console.log("Server running on address http://localhost:3001");
});
