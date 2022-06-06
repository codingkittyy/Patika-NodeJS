const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  console.log(url)
  if (url === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.write('<h2>Index Sayfasina Hosgeldiniz</h2>')
  } else if (url === '/hakkimda') {
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.write('<h2>Hakkimda Sayfasina Hosgeldiniz</h2>')
  } else if (url === '/iletisim') {
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.write('<h2>Iletisim Sayfasina Hosgeldiniz</h2>')
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' })
    res.write('<h2>Sayfa bulunamadi</h2>')
  }
  console.log('İstek gönderildi')
  res.end()
})

const port = 5000

server.listen(port, () => {
  console.log(`Server ${port} no'lu port'da başlatıldı`)
})
