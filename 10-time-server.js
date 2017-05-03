var net = require('net')
var date = new Date()

var server = net.createServer((socket) => {
  // socket.write(dateFormatted())
  socket.end(dateFormatted())
})

server.listen(process.argv[2])

var dateFormatted = () => {
  let year = date.getFullYear()
  let month = ('0' + (date.getMonth() + 1)).slice(-2)
  let day = ('0' + date.getDate()).slice(-2)
  let hours = ('0' + date.getHours()).slice(-2)
  let minutes = ('0' + date.getMinutes()).slice(-2)
  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n'
}
