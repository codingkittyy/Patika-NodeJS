const arguments = process.argv.slice(2)

function circleArea(r) {
    let area = (Math.PI * Math.pow(r, 2)).toFixed(2);
    console.log(`Yarıçapı ${r}cm olan dairenin alanı: ${area}cm^2`)
}

circleArea(arguments[0]*1)