/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array1, array2) {
    let findArray = []
    for (let i = 0, i < array1.length, i++) {
        if (array1[i] === array2[i]) {
        findArray.push(array1[i])
    }
    
    }
    return findArray;
}
let newArray = [1,4,6,7,10]
let findArray = findUniqueElements(mainArray, newArray);
console.log(findArray);
