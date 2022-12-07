// Напишите функцию JavaScript, которая переворачивает слово.  


// function reverseString(text) {
//     let newText = "";
//     for (let i = text.length - 1; i >= 0; i--) {
//         newText = newText + text[i];
//     }
//     return newText;
// }

// console.log(reverseString('Matvey'));

function reverseString(text) {

    const arr = [...text]
    let reverse = "";

    while (arr.length) {
        reverse = reverse + arr.pop()
    }

    return reverse;
}

console.log(reverseString('Matvey'));