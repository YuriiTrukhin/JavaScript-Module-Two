//============== перебор массива
// const arr = [1,2,3,4,5];

// console.log(arr.length ===0);

// for(let i=0; i<arr.length; i++) {
    
//     console.log(arr[i]);
// }
//  =========== добавление массива

// const arr = [1,2,3,4,5];
// const arr2 =[];
// for(let i=0; i<10; i++) {
//     arr2[i] =i+1;
// }
// console.log(arr2);

// ============ цыкл for off
// const arr = [1,2,3,4,5];
//  for (let el of arr) {
// console.log(el);
//  }
// ============добавление данных с одного массива в другой

// const arr = [1,2,3,4,5];
// const arr2 = [];
//  for (let el of arr) {
// arr2.push(el)
//  }
//  console.log(arr2);
// ============== присвоение по ссылке (как ярлык на рабочем столе)
// const arr = [1,2,3,4,5];
// const arr2 = arr;
// arr.push('Hello');
// console.log(arr2);
//============ Выбор до элемента из массива
// let arr =[1,2,3,4,5,6,7,8,9,10]

// for (let el of arr) {
//     if (el===5) {
//         console.log(el);
//         break
//     }
//     console.log(el);
// }
// ===========Выбор после элемента из массива

// let arr =[1,2,3,4,5,6,7,8,9,10]

// for (let el of arr) {
//     if (el<5) {
//         continue
//     }
//     console.log(el);
// }
// ========================= посмотреть в конспекте сумма матрицы
// let arr =[
// [1,2,3],
// [4,5,6],
// [7,8,9],
// ]
// let sum = 0
// for (let i of matrix) {
    
//  for (let j of ) {
//     sum +-j
// }
// }

// console.log(sum);
// =============================== split() и join()
// let str = "Hello world, I'm Johny";
// let res = str.split("  ").join ("  ");
// console.log(res);
// ================ проверка фразы на палиндром ( пишется в обе стороны одинаково)
// const str = 'aBBA';

// const res = str.split ('').reverse().join('');

// console.log(res.toUpperCase() === str.toUpperCase());

//====================== метод includes

// let arr =[1,2,3,4,5,6,7,8,9,10]

// console.log(arr.includes (10));

//================ еще раз попробовать

// let arr =[1,2,3,4,5,6,7,8,9,10]
// if ( arr.includes(1) && arr.includes(11))
// console.log('includes' );

//==============
// let arr =[1,2,3,4,5,6,7,8,9,10];
// let a=10;
// if ( arr.includes(a) ){
// console.log("includes")}
// else {
//     console.log("not");
// }
//======================== Методы массивов push(), pop(), shift(), unshift()

// let arr = [];

// arr.push('1');
// arr.push('2');
// console.log(arr);
// console.log(arr.pop());
// console.log( arr);
// arr.unshift('0');
// console.log(arr);
// arr.shift();
// console.log(arr);

//============= метод slice

// let arr =[1,2,3,4,5,6,7,8,9];
// let newArr = arr.slice (3);
// console.log(arr);
// console.log(newArr);

// ================= метод splice

// let arr = [1,2,3];
// arr.splice (1,0, 'hello');
// console.log(arr);

//================== метод concat()

// let arr1 =[1,2,3,4,5];
// let arr2 =[6,7,8,9,10];
// const arr3=arr1.concat(arr2);
// console.log(arr3);
// ============
// let arr1 =[1,2,3,4,5];
// let arr2 = arr.concat();
// arr.push(4);
// console.log(arr2);


// ======================== Функции========
// const add = function(a,b) {
//     console.log('a',a);
//     console.log('b',b);
//     console.log('Hello');
// };

// add (2,5);
//  const fruits = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
//  const num = [1,2,3,4,5,6]

//  const add = function(a,b) {
// const result = a.concat(b);
//  }; 
// add ('Mango',1);


// !$ Понятие функции
// =================function expression
// const fn =function() {
//     console.log("Hello");
// }
// fn();
//================ function declaration (можно записать где угодно в коде и потом запутаться)
//
// console.log(fn());

// function fn () {
//     console.log("Hello");
//     return 1
// }
// ==== Arrow function (без скобок единичка не нуждается в return, со скобками нужен return)

// const arrow = () => 1;
// console.log(arrow());
// ===== есть еще анонимная самовызывающаяся функция
// (()=>{console.log(1) })();

// =========== что получили в функцию то и вернули 

// const fn = function (n) {
//     return n;
// }
// const res = fn(1);
// console.log(res);

//=======использование параметров по умолчанию

// const fn = function (a=0,b=0) {
//     return Math.pow (a,b);
// }
// const res = fn(2);
// console.log(res);

//============= создал персонажа (параметры в функции, аргументы при вызове функции)

// const createPerson = function (name, profession, experiense, sex, status){
//     return{
//         name: name,
//         profession: profession,
//         experiense: experiense,
//         sex: sex,
//         status: status
//     }
// }
// let john = createPerson("Yurii", "Junior", 'zero', 'male', 'merried')
// console.log(john);
//=============== вызываем функцию без результата return. в аргументс приходит псевдомасив
// const getArguments = function (){
// for (let el of arguments) {
//     console.log(el);
// }
// }
// getArguments(1,2,3,4,5,6,7,8)
//============== 
// const fn = function(){
//     const arg = Array.from(arguments);
//     console.log(arg);
// }
// fn(1,2,4)
//=========== использовние rest
// const fn = function (...arg) {
// console.log(arg);
// };
// fn(1,2,4,10,10,10)
//========= задачка умножить n на числа после точек
// const fn = function (n, ...arg) {
// for (let i=0; i<arg.length; i++) {
// arg[i] *= n;
// }
// console.log(arg);
// };
// fn(2,2,4,10,10,10);

//=============== пример из конспекта изменили на выдачу остатка
// let total = 1000;
// const withdraw = function(amount, balance) {
//     /*
//      * Проверяется условие. Если оно выполняется, происходит
//      * console.log и выход из функции. Код идущий после тела if
//      * не выполнится.
//      */
//     if (amount === 0) {
//       console.log('Для проведения операции введите сумму больше нуля.');
//       return;
//     }
  
//     /*
//      * Если условие первого if не выполнилось, его тело пропускается
//      * и интерпретатор доходит до этого if.
//      * Проверяется условие. Если оно выполняется, происходит
//      * console.log и выход из функции. Код идущий после тела if
//      * не выполнится.
//      */
//     if (amount > balance) {
//       console.log('Недостаточно средств на счету.');
//       return;
//     }
  
//     /*
//      * Если ни один из предыдущих if не выполнился,
//      * интерпретатор доходит до этого кода и выполняет его.
//      */
//     total = balance-amount;
//     console.log(`balance now: ${total}`);
//   };
  
// //   withdraw(0, total); // Для проведения операции введите сумму больше нуля.
//   withdraw(100, total); // Недостаточно средств на счету.
//   withdraw(200, total); // Операция снятия средств проведена.

  //========== повторение Тернарный оператор
//   let a=0;
//   let b=0;

//   const result= ((a+b)<4)? "мало": 'много' ;
//   console.log(result);


