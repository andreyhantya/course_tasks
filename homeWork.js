/*
1) function getType(param) {} => return type of param
2) function getWholeString(one, two, three) {} => return concatenated string (onetwothree)
3) function getResult() {} => Math.random() - >0.5 (URA), <0.5 (NE URA)
4) function getObject(['test', 'test1']) {} => Object with properties from [] ({test: 0, test1: 0})
5**) function countFactorial {} => ввожу что хочу =) получаю результат*/

/* Задания с лекции*/

const getType = param => {
    return typeof param;
};

const getObject = arr =>{
    let obj = {}, q;
    for(let i = 0; i < arr.length; i++){
        q = arr[i];
        obj[q] = 0;
    }
    return obj;
};

const getWholeString = (one, two, three) => {
    if(one === undefined){
        return getWholeString("",two,three);
    }else if(two === undefined){
        return getWholeString(one,"",three);
    }else if(three === undefined){
        return getWholeString(one,two,"");
    }else return String(one) + String( two) + String(three);
};

const getResult = () =>{
    let random = Math.random();
    if(random > 0.5){
        return "URA"
    }else return "NE URA"
};

const countFactorial = (n) =>{
    if(n === 1 || n === 0){
        return 1;
    }else if(n < 0){
        return "Введите положительное число"
    }
    else{
        return countFactorial(n-1) * n;
    }
};





/*              -----ДЗ-----              */
//1) Если а - четное посчитать а*б иначе а+б
const getEven = (a , b) =>{
    return a % 2 === 0 ? a * b : a + b;
};

//2) Определить к какой четверти принадлежит точка с координатами(x,y)

const coordinates = (x,y) =>{
    let result;
    if(x > 0 && y > 0 ){
        result = 1;
    }else if(x < 0 && y > 0){
        result = 2;
    }else if(x < 0 && y < 0){
        result = 3;
    }else if(x > 0 && y < 0){
        result = 4;
    }else if(x === 0 || y === 0 ){
        result = 0;
    }
    return result;
};
//3) Найти суммы только положительных из трех чисел.

const positiveNumber = (a, b, c) =>{
   let sum = 0;
   if(a < 0){
       a = 0;
       return positiveNumber(a,b,c);
   }else if(b < 0){
       b = 0;
       return positiveNumber(a,b,c);
    }else if(c < 0 ){
       c = 0;
       return positiveNumber(a,b,c);
   }else{
       return sum = a + b + c;
   }

};


//4) Посчитать выражение макс(a*b*c, a+b+c)+3

const maxOfNumb = (a,b,c) =>{
    let x, y, result;
    x = a * b * c;
    y = a + b + c;
    (x > y) ? result = x + 3: result = y + 3;

    return result;
};


//5) Написать программу определения оценки студента по его рейтингу:

const assessment = x =>{
    let result;
    if(x >= 0 && x <= 19){
        result ="F";
    }else if(x >= 19 && x <= 39){
        result = "E";
    }else if(x >= 40 && x <= 59){
        result = "D";
    }else if(x >= 60 && x <= 74){
        result = "C";
    }else if(x >= 75 && x <= 89){
        result = "B";
    }else if(x >= 90 && x <= 100){
        result = "A";
    }else{
        result = "Введите корректный рейтинг!";
    }
    return result;
};



// -------------------- Циклы ------------------
//1) Найти сумму четных чисел и их количество в диапазоне от 1 до 99

const sumOfNumber = (num) =>{
    let sum = 0;
    let quantity = 0;
    for(let i = 1 ; i <= num; i++){
        if(i % 2 ===  0){
            sum = sum + i;
            quantity++;
        }
    }
    return {
        "Sum" :  sum,
        "Counter" : quantity,
    }};



//2) Проверить простое ли число?

const isPrimeNumber = num => {
  for(let i = 2; i <= num - 1; i++){
      if(num % i !== 0){
          return "Простое";
          break;

      }else{
          return "Составное";
      }
  }
};



//3) Найти корень натурального числа до целого

const getSqr = () =>{

};




//4) Вычеслить факториал числа n n!=1*2*...*n-1*1;!

const factorial = n =>{
    let sum = 1;
    if( n < 0){
        return "Неверное число";
    }else {
        for (let i = 1; i <= n; i++) {
            sum *= i;
        }
        return sum;
    }};

//5 Посчитать сумму цифр заданного числа

const sumOfNum = number =>{
    let i = 0;
    let sum = 0;
    if(number < 0 ){
        let num =- number;
        while ( num > 0 ){
            sum += Math.floor(num % 10);
            num = Math.floor( num / 10);
            i++;
        }
    }else{
        while ( number > 0 ){
            sum += Math.floor(number % 10);
            number = Math.floor(number / 10);
            i++;
    }   }
    return sum;
};



//6) Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например 123 будет 321
//3 = (123 % 10)
//2 = (12 % 10)
//1 = (12.3 / 10)
const getMirrorNumber = (num) =>{
    let newNumber = num % 10;
    let temp = num / 10;
    let q = temp % 10;

    newNumber += q.toFixed();
    q = temp / 10;
    newNumber += q.toFixed();

    return Number(newNumber);
};


// ----------------------- МАССИВЫ ---------------------------
//1) Найти минимальный елемент массива
//[2,5,2,6]
const getMinElement = array => {
    let min = array[0];

    if(array.length === 0 || array.length === 1){
        return "Для сравнения нужны минимум два элемента";
    }
    else{
        for(let i = 1; i < array.length; i++){
            if(array[i] < min) {min = array[i];}
        }
    }return min;
};

//2) Найти максимальный елемент массива

const getMaxElement = array =>{
    let max = array[0];
    if(array.length === 0 || array.length === 1){
        return "Для сравнения нужны минимум два элемента";
    }
    else{
        for(let i = 1; i < array.length; i++){
            if(array[i] > max){max = array[i];}
    }}
    return max;
};

//3) Найти индекс минимального елемента

const getMinIndexElement = array =>{
    let min = array[0];
    let index;
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
            index = i;
        }
    }
    return index;
};


//4) Найти индекс максимального елемента

const getMaxIndexElement = array =>{
    let max = array[0];
    let index;
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
            index = i;
        }
    }
    return index;
};

// 5) Посчитать сумму елементов массива с нечетными индексами

const sumIndexElement = array =>{
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if(i%2 !== 0){
            sum += array[i];
        }
    }
    return sum;
};


//6) Сделать реверс массива (массив в обратном направлении)

const getReverce = array =>{
    var newArr = [], index = 0;
    for (i = array.length; i > 0; i--) {
        newArr[i] = array[index];
        index++;
    }

    return newArr;
};


//7) Посчитать кол-во нечетных елементов массива

const getOddElements = array =>{
    let oddElements = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            oddElements++;
        }
    }
    return oddElements;
};

//8) Поменять местами первую и вторую половину массива, например
// для массива 1 2 3 4, результат 3 4 1 2

const arrayOfMirror = (array) =>{
    let newArr = [];
    let count = 0;

    if(array.length % 2 === 0) {
        for (let i = array.length / 2; i < array.length; i++) {
            newArr[count] = array[i];
            count++;
        }
        for (let i = 0; i < array.length / 2; i++) {
            newArr[count] = array[i];
            count++;
        }
        return newArr;
    }else{
        return  console.log("Введите четное кол-во элементов");
    }
};



//9) Отсортировать массив пузырьком(Bubble), выбором(Select), вставками(insert)

//Сортировка пузырьком

const BubbleSort = (array) =>{
    let temp = array.length;
    for (let i = 0; i < temp-1; i++){
        for (let j = 0; j < temp-1-i; j++){
            if (array[j+1] < array[j]){
                let innerTemp = array[j+1];
                array[j+1] = array[j];
                array[j] = innerTemp;
            }
        }
    }
    return array;
};

const bubbleSort = (array) => {
  let temp = array.length;
  for(let i = 0; i < temp-1; i++){
      for(let j = 0; j < temp-1-i; j++ ){
          if(array[j + 1] > array[j - 1 - temp]){
              let innerTemp = array[j+1];
              array[j+1] = array[j];
              array[j] = innerTemp;
          }
      }
  }return array;
};


// Сортировка выбором

const SelectionSort = (array) =>{
    let temp = array.length;
    for (let i = 0; i < temp-1; i++){
        let min = i;
        for (let j = i+1; j < temp; j++){
            if (array[j] < array[min]) min = j;
        }
        let innerTemp = array[min];
        array[min] = array[ i ];
        array[ i ] = innerTemp;
    }
    return array;
};

//Сортировка вставками

const InsertionSort = (array) =>{
    let temp = array.length;
    for (let i = 0; i < temp; i++)
    { let innerTemp = array[ i ], j = i-1;
        while (j >= 0 && array[j] > innerTemp)
        { array[j+1] = array[j]; j--; }
        array[j+1] = innerTemp;
    }
    return array;
};

//10) Отсортировать массив (Quick, Merge, Shell, Heap)

// ------------------ ФУНКЦИИ -------------------
//1) Получить строковое название для недели по номеру дня

const dayOfTheWeek = (day) =>{
    let result;
    switch(day){
        case 1:
            result = "Sunday";
            break;
        case 2:
            result = "Monday";
            break;
        case 3:
            result = "Tuesday";
            break;
        case 4:
            result = "Wednesday";
            break;
        case 5:
            result = "Thursday";
            break;
        case 6:
            result = "Friday";
            break;
        case 7:
            result = "Saturday";
            break;
        default:
            break;
    }
    return result;
};