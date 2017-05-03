let fs = require('fs')
let path = require('path')

module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, list) => {
    if(err) {
      return callback(err)
    }

    let filteredlist = list.filter((file) => {
      if(path.extname(file) === '.' + ext) {
        return file
      }
    })

    callback(null, filteredlist)
  })
}
