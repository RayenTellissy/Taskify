const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/todos') {
    // code to retrieve all the todos from the fake API
    const todos = [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true },
      { id: 3, title: 'Todo 3', completed: false },
    ];
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(todos));
  } else {
    res.end('Hello, World!');
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
