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

//место куда я ложу игрушки findUniqueArray

// условивие какие игрушки я ложу в это место

// если все хорошо ложу игрушку

// возврощения findUniqueArray

function findUniqueElements(array) {
    const findUniqueArray = [];
    array.forEach((element) => {
        const includesElementFinction = includesElement(
            findUniqueArray,
            element
        );
        if (includesElementFinction) {
            return;
        } else {
            findUniqueArray.push(element);
        }
    });

    return findUniqueArray;
}

const findArray = [1, 2, 3, 2, 1, 4, 5, 6, 4, 8, 9, 6];
const findUniqueResult = findUniqueElements(findArray);
console.log(findUniqueResult, "findUniqueResult");
