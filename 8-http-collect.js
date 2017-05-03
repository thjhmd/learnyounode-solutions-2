let http = require('http')

http.get(process.argv[2], (res) => {
  let body = ''

  res.on('data', (data) => {
    body += data
  })

  res.on('end', () => {
    console.log(body.length)
    console.log(body)
  })

  res.on('error', console.error)
}).on('error', console.error)
