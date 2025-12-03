/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(array1, array2) {
    const findCommonArray = [];
    array1.forEach((findCommonElementArray) => {
        const includesElementFinction = includesElement(
            array2,
            findCommonElementArray
        );
        if (includesElementFinction) {
            findCommonArray.push(findCommonElementArray);
        }
    });

    return findCommonArray;
}

const findCommonArray1 = [1, 2, 3];
const findCommonArray2 = [4, 5, 6];
const resultCommonElements = findCommonElements(
    findCommonArray1,
    findCommonArray2
);
console.log(resultCommonElements, "findCommonElements");
