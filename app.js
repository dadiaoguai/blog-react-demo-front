const express = require('express')
, router = express.Router()
, path = require('path')
, fs = require('fs')

app = express()
const resolve = (file) => path.resolve(__dirname, file)

app.use(express.static('dist'))
app.get('/', (req, res) => {
  const html = fs.readFileSync(resolve('index.html'), 'utf8')
  res.send(html)
})

app.listen(3000, () => console.log('listening on port 3000!'))