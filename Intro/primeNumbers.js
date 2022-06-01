// Kendisine ve 1 e bölünecek, 1 den büyük pozitif tam sayı olacak
// iki sayı arasındaki asal sayıları bulur

 const arguments = process.argv.slice(2)

function showPrimeNumbers(lowNum, highNum) {
    for (let i = lowNum; i <= highNum; i++) {
        let isPrime = true;
        for (let j = 2; j <= i; j++) {
            if(i%j === 0 && j !== i){
                isPrime = false;
            }
        }

        if(isPrime){
            console.log(i);
        }
    }
}

 showPrimeNumbers(arguments[0]*1, arguments[1]*1);

// console.log(process.argv)