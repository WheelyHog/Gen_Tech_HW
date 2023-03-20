//Проверьте, равны ли два массива или нет
//Учитывая два массива, arr1 и arr2 одинаковой длины N , задача состоит в том, чтобы определить, равны ли данные массивы или нет. 

//Два массива называются равными, если:
//оба они содержат один и тот же набор элементов, 
//расположение (или перестановки) элементов может/не может быть одинаковым.
//Если есть повторения, то количество повторяющихся элементов также должно быть одинаковым, чтобы два массива были равны.


//Ввод: arr1[] = {1, 2, 5, 4, 0}, arr2[] = {2, 4, 5, 0, 1}
//Вывод: Да


//Временная сложность - O(n)

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let sortedArr1 = arr1.sort();
  let sortedArr2 = arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }

  return true;
}

let arr1 = [1, 2, 5, 4, 0];
let arr2 = [2, 4, 5, 0, 1];

console.log(areArraysEqual(arr1, arr2)); // true

//Как вариант, можно решить еще и таким способом:
//1. Сравнить длины массивов. Если длины отличаются, то ответ сразу false.
//2. Применить к массивам хеш-функцию и сравнить результаты. Если равны, то true, иначе - false.
//Но я не знаю, как это записать в коде.