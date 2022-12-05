
// Function Declaration – функция, объявленная в основном потоке кода
//  функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода.
// Поэтому их можно вызвать до объявлени.
// Function Declaration предпочтительнее, т.к функция будет видна до своего объявления в коде. 
// Это даёт нам больше гибкости в организации кода, и, как правило, делает его более читабельным.

function FDeclaration() {
    console.log('HI F-Decl')
};
FDeclaration();



// Function Expression.

const FExpression = function () {
    console.log('HI F-Expr')
};
FExpression();


// Named Function Expression
// Есть две важные особенности второго имени NamedFE2, ради которого оно даётся:
//     -Оно позволяет функции ссылаться на себя же.
//     -Оно не доступно за пределами функции

const NamedFE = function NamedFE2(who) {
    if (who) {
        console.log(`Hello, ${who}`);
    } else {
        NamedFE2("Guest"); // использует func, чтобы снова вызвать себя же
    }
};
NamedFE('NamedFE');



// Стрелочная функция - полный вариант

const FuncArrow = () => {
    console.log('Hello FuncArrow')
};
FuncArrow();

// Стрелочная функция - сокращенный  вариант ( без аргументов)
const FuncArrowZero = () => console.log('Hello FuncArrowZero');
FuncArrowZero();

// Стрелочная функция - сокращенный  вариант ( если 1 аргумент)
const FuncArrowOne = array => console.log(array);
FuncArrowOne('Hello FuncArrowOne');

// или с добавлением фигурных скобок
const FuncArrowOneOne = array => {
    console.log(array)
};
FuncArrowOneOne('Hello FuncArrowOneOne');

// Стрелочная функция - сокращенный  вариант ( если 2 аргумента)

const FuncArrowTwo = (array1, array2) => console.log(array1 + array2)

FuncArrowTwo('Hello! ', 'FuncArrowTwo!');


// Анонимная функция
// 1. Анонимные функции становятся доступны, только после того, как интерпретатор дойдет до них,
// таким образом их вызов возможен только после записи функции в коде.
// 2. Анонимные функции короче и отлично подходят в тех случаях, когда на них не нужно ссылаться в коде.
// 3. Анонимные функции могут вызывать сами себя.
// 4. Анонимные функции могут выступать в качестве параметров в других функциях.
(function () {
    console.log('Привет, я анонимная функция!');
})();


