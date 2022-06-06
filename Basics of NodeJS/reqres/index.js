const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  console.log(url)

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>INDEX SAYFASI</h1>')
  } else if (url === '/about') {
    res.write('About SAYFASI')
  } else if (url === '/contact') {
    res.write('Contact SAYFASI')
  } else {
    res.write('404 SAYFASI')
  }

  console.log('İstek gönderildi')
  res.end()
})

const port = 3000

server.listen(port, () => {
  console.log(`'Server started on Port: ${port}`)
})
