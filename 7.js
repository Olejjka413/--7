/// Задание №1 ///
console.log('Задание №1');
let number = 5;
let str = 'random words';
let str_number = '6';
let bool_false = false;
let bool_true = true;
let empty = null;

console.log(str + ' ' + number);
// Число преобразовывается в строковый тип

console.log(+bool_false);
// Логический тип в число

console.log(number + bool_true);
// Логический тип + число = число

console.log(+empty);
// Null к числу

console.log(Number(str + str_number))
// Строку к nan

console.log(str + str_number)
// Те же переменные, но без преобразования к числу

console.log (Number(str_number) + bool_true)
// Строку к числу + логический тип = число

/// Задание №2 ///
console.log('\n');
console.log('Задание №2');
a = prompt('Введите длину a');
b = prompt('Введите ширину b');
console.log(a);
console.log(b);
p = a*2 + b*2;
console.log('периметр: ' + p);
s = a * b;
console.log('площадь: ' + s);
d = p / s;
console.log('отношение периметра к площади: ' + d);
