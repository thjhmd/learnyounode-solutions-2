const http = require('http')
const url = require('url')

let server = http.createServer((req, res) => {
  let urlObj = url.parse(req.url, true)
  let pathname = urlObj.pathname
  let query = urlObj.query.iso
  let result = ''

  if(pathname === '/api/parsetime') {
    result = getParseTime(query)
  } else if(pathname === '/api/unixtime') {
    result = getUnixTime(query)
  }

  if(result) {
    res.writeHead(200, {'content-type': 'application/json'})
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(process.argv[2])

function getParseTime(strTime) {
  let date = new Date(Date.parse(strTime))
  return {
    'hour': date.getHours(),
    'minute': date.getMinutes(),
    'second': date.getSeconds()
  }
}

function getUnixTime(strTime) {
  return {
    'unixtime': Date.parse(strTime)
  }
}
