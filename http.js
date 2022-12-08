const http = require('http')

const server = http.createServer((req,res)=>{
  if(req.url ==='/'){
    res.end('welcome to our home page ')
  }
  if(req.url ==='/about'){
    res.end('here is about me ')
  }
  res.end(`
  <h1>Ooops!</h1>
  <p> we can't get what you are looking for</p>
  <a href="/">back home </a>
  `)

})


server.listen(5000)