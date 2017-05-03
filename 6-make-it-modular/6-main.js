let mymodule = require('./6-dir-filter')

let dir = process.argv[2]
let ext = process.argv[3]

mymodule(dir, ext, (err, list) => {
  if(err) {
    return console.log(err)
  }

  list.forEach((file) => {
    console.log(file)
  })
})
