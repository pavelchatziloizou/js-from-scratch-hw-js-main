// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
    if (number % 2 === 0) {
        return "True";
    } else {
        return "False";
    }
}

console.log(isEven(2));
