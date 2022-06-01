/* console.log('1. Task');
console.log('2. Task');
console.log('3. Task'); */

// const func1 = () => {
//     console.log('Func 1 is completed');
// }

// const func2 = () => {
//     console.log('Func 2 is completed');
// }

// const func3 = () => {
//     console.log('Func 3 is completed');
// }

// func1();
// func3();
// func2();

//  const func1 = () => {
//      console.log('Func 1 is completed');
//      func2();
//  }

//  const func2 = () => {
//     console.log('Func 2 is completed');
//     func3();
//  }

//  const func3 = () => {
//     console.log('w 3 is completed');
// }

// func1();

// const func1 = () => {
//     console.log('Func 1 is completed');
//     func3();
// }

// const func2 = () => {
//    console.log('Func 2 is completed');
// }

// const func3 = () => {
//    console.log('Func 3 is completed');
//    func2();
// }

// func1();

// Single Thread --- JS Senkron

// let x = 5;
// console.log('1. gelen veri', x);

// setTimeout(() => {
//     x = x+5;
//     console.log('2. gelen veri', x);
// }, 5000)

// x = x + 5;
// console.log('3. gelen veri', x);

const books = [
    {name: 'Kitap 1', author: 'Yazar 1'},
    {name: 'Kitap 2', author: 'Yazar 2'},
    {name: 'Kitap 3', author: 'Yazar 3'}
];

const listBooks = () => {
    books.map((book) => 
    console.log(book)
    )
};

const addBook = (newBook, callback) => {
    books.push(newBook);
    callback();
};

// listBooks();

addBook({name: 'Kitap 4', author: 'Yazar 4'}, listBooks);
