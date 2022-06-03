const arguments = process.argv.slice(2)

function circleArea(r) {
  let area = (Math.PI * Math.pow(r, 2)).toFixed(2)
  console.log('Area: ', area, 'm2')
}

function circleCircumference(r) {
  let circumfence = (2 * Math.PI * r).toFixed(2)
  console.log('Circumfence: ', circumfence, 'm')
}

module.exports = {
  circleArea,
  circleCircumference,
}
