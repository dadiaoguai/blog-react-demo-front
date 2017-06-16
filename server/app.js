const express = require('express')
, router = express.Router()
, path = require('path')
, fs = require('fs')
, config = require('config')

app = express()
const resolve = (file) => path.resolve(require('process').cwd(), file)

app.use(express.static('dist'))
app.get('/', (req, res) => {
  const html = fs.readFileSync(resolve('index.html'), 'utf8')
  res.send(html)
})

app.listen(config.port, () => console.log(`listening on port ${config.port}!`))