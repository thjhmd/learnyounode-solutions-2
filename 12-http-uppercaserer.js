const http = require('http')
const fs = require('fs')

let server = http.createServer((request, response) => {
  let body = ''
  request.setEncoding('utf-8')
  if(request.method != 'POST') {
    return response.end('POST only')
  }

  request.on('data', (data) => {
    body += data
  })

  request.on('error', console.error)

  request.on('end', () => {
    response.end(body.toUpperCase())
  })
})

server.listen(process.argv[2])
