// console.log(__dirname)

// global.setTimeout(() => {
//   console.log('3 saniye bekle yaqshi')
// }, 3000)

const fs = require('fs')

fs.writeFile(
  'employee.js',
  '{"name":"Employee 1 Name", "salary" : "2000"}',
  'utf8',
  (err) => {
    if (err) console.log(err)
    console.log('dosya oluşturuldu')
  }
)

fs.readFile('employee.js', 'utf-8', (err, data) => {
  if (err) console.log(err)
  console.log(data)
  console.log('dosya okundu')
})

fs.appendFile(
  'employee.js',
  '\n{"name":"Employee 2 Name", "salary": "10000"}',
  'utf-8',
  (err) => {
    if (err) console.log(err)
    console.log('dosya güncellendi')
  }
)

fs.unlink('employee.js', (err) => {
  if (err) console.log(err)
  console.log('dosya silindi')
})
