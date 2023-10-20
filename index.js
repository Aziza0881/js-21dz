
// Создать цикл который будет выводить цифры фибоначчи и должно остановиться на той цифре которую напишите в промпте 

// В ручную создать функцию сорт с помощью циклов for of & while


//1

let stopNumber = parseInt(prompt('Введите число, на котором нужно остановиться'));
let fibonacci = [0, 1];

while (fibonacci[fibonacci.length - 1] < stopNumber) {
  let nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(nextNumber);
}

console.log(fibonacci);



  //4

  
function sortArray(arr) {
    let sorted = false;
  
    while (!sorted) {
      sorted = true;
    
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Меняем элементы местами
          sorted = false; // Если была произведена перестановка, массив неотсортирован
        }
      }
    }
    
    return arr;
  }
  
  let numbers = [5, 2, 8, 1, 4];
  let sortedNumbers = sortArray(numbers);
  console.log(sortedNumbers); // Вывод: [1, 2, 4, 5, 8]