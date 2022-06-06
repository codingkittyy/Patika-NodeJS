const Koa = require('koa')
const router = require('koa-router')
const app = new Koa()

const koaRouter = router()

// response
koaRouter.get('/', (ctx) => {
  ctx.body = 'Index Sayfasina Hosgeldiniz'
})

koaRouter.get('/hakkimda', (ctx) => {
  ctx.body = '<h1>Hakkimda Sayfasina Hosgeldiniz</h1>'
})

koaRouter.get('/iletisim', (ctx) => {
  ctx.body = '<h1>Iletisim Sayfasina Hosgeldiniz</h1>'
})

app.use(koaRouter.routes())

const port = 3000
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`)
})
