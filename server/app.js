const
  express = require('express'),
  config = require('config'),
  path = require('path'),
  webpack = require('webpack'),
  webpackConfig = require('../webpack.config')()

const app = express()
const compiler = webpack(webpackConfig)

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
  stats: {colors: true}
}))

app.use(require('webpack-hot-middleware')(compiler))
app.use(express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(path.join(require('process').cwd(), 'index.html'))
})

app.listen(config.port, () => console.log(`listening on port ${config.port}!`))
