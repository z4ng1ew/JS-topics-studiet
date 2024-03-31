// console.log("Hello world");

//!!!!!!!!!!!!!!!!!!MAP

//Метод map() в JavaScript - это встроенная функция массивов, которая создает новый массив путем применения функции обратного вызова к каждому элементу исходного массива. Он применяет заданную функцию к каждому элементу массива и возвращает новый массив, содержащий результаты вызова этой функции для каждого элемента.

// const SomeArr = [1, 2, 3];
// console.log(SomeArr); //1, 2, 3
// const SomeNewArr = SomeArr.map(element => element * 3)

// console.log(SomeNewArr) //3 6 9
// console.log(SomeArr); // 1 2 3

//Оригинальный масссив не изменился

// const SomeArr = [1, 2, 3];
// console.log(SomeArr); //1, 2, 3

// const SomeNewArr = SomeArr.map((element) => {
//     return element * 3;
// });

// console.log(SomeNewArr); //3 6 9
// console.log(SomeArr); // 1 2 3

//каждый массив это объект. Объект - это ссылочный тип. Этот массив имеет свойства, котрые являются индесами определённых элементов в массиве. У каждого свойства есть длина length.

//1. Умножение каждого элемента массива на 2:
//Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент умножен на 2.

// const arr  = [1, 2, 3];

// const arr1 = arr.map((elem) => elem * 2);

// console.log(arr1);

//2. Преобразование строки в массив строк верхнего регистра: Напишите функцию, которая принимает массив строк и возвращает новый массив, в котором каждая строка преобразована в верхний регистр и разделена на отдельные символы.

// const string = ["abc", "hi", "hello"];

// const string1 = string.map( (STR) => STR.toUpperCase()) //str - это параметр функции, который принимает значение каждого элемента массива при итерации через метод map()

// console.log(string1);

// //2.1. Ещё один пример

// const str = ["1ghbdtn", "привет", 'rfr ltkf&'];

// const str1 = str.map( (st) => st.toUpperCase() );

// console.log(str1);

//3 Извлечение значений из массива объектов: Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий значения определенного свойства (например, "name") из каждого объекта.

// const students = [
//     { Call: "1 Fat", years: 30 },
//     { Call: "2 Long", years: 19 },
//     { Call: "3 Jim", years: 29 },
//     { Call: "4 Jim1", years: 28 },
//     { Call: "5 Jim2", years: 89 },
//     { Call: "6 Jim3", years: 99 },
// ];

//console.log(students);

//3.1.1. Удаление объекта!!!

//students.pop(); // удалить объект, который  является последним элементом массива

//3.1.2. Добавление объекта !!!!!

//students.push({Call: "7 James", years: 100});

//console.log(students);

//3.1.3. Добавление и удаление объекта !!!!!

//students.splice(2, 3, {Call: "6 Jim3", years: 99}); //Чтобы удалить 3 элемента из массива с помощью метода splice(), просто передайте вторым аргументом число 3, которое указывает количество элементов, которые нужно удалить, начиная с указанного индекса.

//console.log(students);

//3.1.4. Пример использования filter !!!!!

// const stud = [10, 20, 30 , 40]

// const stud1 = stud.filter( years =>  years > 30);

// console.log(stud1);

//3.1.5. Пример использования indexOf  !!!!!

// const studFiltInd = students.filter(stud => stud.Call.indexOf ('Jim') === -1);

// console.log(studFiltInd);

//Выход в терминал
//[
//     { Call: '1 Fat', years: 30 },
//     { Call: '2 Long', years: 19 },
//     { Call: '3 Jim', years: 29 },
//     { Call: '4 Jim1', years: 28 },
//     { Call: '5 Jim2', years: 89 },
//     { Call: '6 Jim3', years: 99 }
//   ]
//   [ { Call: '1 Fat', years: 30 }, { Call: '2 Long', years: 19 } ]

// 3.1.5. Пример использования includes  !!!!!

// const students = [
//     { Call: "1 Fat", years: 30 },
//     { Call: "2 Long", years: 19 },
//     { Call: "3 Jim", years: 29 },
//     { Call: "4 Jim1", years: 28 },
//     { Call: "5 Jim2", years: 89 },
//     { Call: "6 Jim3", years: 99 },
// ];

// const studFiltInd = students.filter((stud) => stud.Call.includes("Jim"));

// console.log(studFiltInd);

// const arr = [1, 2, 3];

// const arr1 = ["ffff", "ssd", "ss"];

// arr.filter(s => s < 2)

// console.log();

//3.1.6. Пример использования return !!!!!

// const students = [
//     { Call: "1 Fat", years: 30 },
//     { Call: "2 Long", years: 19 },
//     { Call: "3 Jim", years: 29 },
//     { Call: "4 Jim1", years: 28 },
//     { Call: "5 Jim2", years: 89 },
//     { Call: "6 Jim3", years: 99 },
// ];
//   const arr3 = students.map((e)=>{
//     return e.Call

//   })

//   console.log(arr3);

//3.1.7. МОЙ Пример использования return !!!!!

// const stud = [

//     {Name: "1 Nik", age: 21},
//     {Name: "2 Kim", age: 21},
//     {Name: "3 Shrek", age: 21},
//     {Name: "4 Jim", age: 21},

// ];

// const studStorage = stud.map((el) => {
//     return el.Name
// })

// console.log(studStorage);

//4. Преобразование массива строк в массив длин строк: Напишите функцию, которая принимает массив строк и возвращает новый массив, в котором каждый элемент - это длина соответствующей строки из исходного массива.

// 4.1 Муслим

// const stud = [ '1 Fat', '2 Long', '3 Jim', '4 Jim1', '5 Jim2', '6 Jim3' ]

// // console.log(students.map(e=>  e.length));

// 4.1 Мой пример:

// console.log(stud.map((elrment) => elrment.length));// Результат: ["1 Nik", "2 Kim", "3 Shrek", "4 Jim"]

// console.log(stud.length); // пристовыводит длину самого массива - 6

//5. Преобразование массива чисел в массив строк: Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждое число преобразовано в строку.

// const age = [11, 22, 33, 44, 55];

// const res = age.map((el) => {
//    return el.toString()

// });

// console.log(res);

//РЕШЕНИЕ № 2          Приведение типов:

// const num = [2, 4, 6, 8, 10];

// const priv = num.map(elem => '' + elem);

// console.log(priv);

//Конкатенация строки с числом
//Конкатенация строк - это операция объединения двух или более строк в одну строку.
// const t = 111;

// const r =  'о ' + t;
// console.log(r);

// const message = 'The answer is: ' + 42;

// console.log(message);

// const firstName = 'John';
// const lastName = 'Doe';

// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

//РЕШЕНИЕ № 3          Шаблонные строки:

// const num = [11.2, 11.3, 11.4, 11.5,];

// const storage = num.map( elem => `${elem}`)

// console.log(storage);

//ещё

// const r = num.map(e => `${e}`)

// console.log(r);

//6 Извлечение уникальных значений из массива объектов: Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий уникальные значения определенного свойства (например, "id") из всех объектов.

// const stud = [
//     { Call: "1 Fat", years: 30, id: 123 },
//     { Call: "1 Fat", years: 30, id: 123 },
//     { Call: "2 Long", years: 19, id: 456 },
//     { Call: "3 Jim", years: 29, id: 789 },
//     { Call: "4 Jim1", years: 28, id: 1011 },
//     { Call: "5 Jim2", years: 89, id: 1213 },
//     { Call: "6 Jim3", years: 99, id: 1415 },
// ];

//console.log(stud.map(el => el.id));

// const id = [...new Set(stud.map((e) => e.id))]; //Этот код создает новый массив, в котором используется метод map() для извлечения всех значений свойства "id" из массива объектов students. Затем создается объект Set, который автоматически удаляет дубликаты. Наконец, с помощью оператора расширения массива ... Set преобразуется обратно в массив уникальных значений "id", который сохраняется в переменной uniqueIds.

//квадратные скобки [...] используются для создания нового массива, который содержит уникальные идентификаторы, преобразованные из массива объектов students с использованием объекта Set.

//new Set(...): Оператор new используется для создания нового экземпляра объекта. В данном случае, мы создаем новый объект Set, который является структурой данных для хранения уникальных значений. При создании нового экземпляра Set, вы передаете массив уникальных идентификаторов, полученный с помощью students.map(el => el.id). Объект Set автоматически удаляет дубликаты, поэтому он содержит только уникальные идентификаторы.

//[...]: Это синтаксис расширения массива (spread syntax), который используется для распаковки элементов из объекта Set в новый массив. Объект Set сам по себе не является массивом, поэтому мы используем расширение массива, чтобы преобразовать его содержимое в массив.

// console.log(id);

//6.1. Пример использования оператора - ... - JavaScript используется для распаковки элементов из итерируемого объекта, такого как массив или объект Set, и создания нового массива или передачи элементов в другую функцию как аргументы.

// const arr = [11, 22, 33];

// const arrTwo = [12, 23, 34];

// const unt = [...arr, ...arrTwo];
// console.log(unt);

//6.1.1 Используем ... - этот оператор для передачи элементов в другую функцию как аргументы

// function plus(x, y, z){
//     return x + y + z;
// }

// const num = [30, 20, 40];

// const res = plus(...num) // Это расширение массива передает каждый элемент массива как отдельный аргумент функции sum

// console.log(res); // Вывод: 90

//6.1.2 Используем Set

//слово Set является зарезервированным словом в JavaScript, используемым для создания структуры данных Set. Set - это объект, который содержит уникальные значения и обеспечивает эффективный способ проверки наличия элемента в коллекции. Он может содержать значения любого типа данных, и каждое значение в коллекции Set появляется только один раз.Set является частью встроенных объектов JavaScript и не может быть использовано в качестве идентификатора для переменных или функций.

// const storage =  new Set();

// storage.add(10);
// storage.add(20);
// storage.add(30);
// storage.add(40);
// storage.add(40);

// console.log(storage);

// console.log(storage.has(20));
// console.log(storage.has(70));

// !!!!!!!!!!!!          ДЕСТРУКТУРИЗАЦИЯ      !!!!!!!!!!!!!!

//  destructured assignment

// Деструктуризация в JavaScript - это специальный синтаксис, который позволяет извлекать значения из массивов или объектов и присваивать их переменным более простым способом. Это удобный способ извлечения данных из структур данных и использования их в коде.

//Деструктуризация объекта

// const user = {
//     Call: "Ike",
//     age: 25,
//     unemployed: true,
// };

// const {  age, Call} = user;
// const { unemployed } = user; //извлекаем значения из объекта и присваиваем их переменным

// console.log(Call);
// console.log(age);
// console.log(unemployed);

//Деструктуризация массива

// const vegetables = ['carrot', 'beet', 'tomato', 'cucumber', 'pickl'];

// const [carrot, beet, tomato, cucumber, picklRick] = vegetables; //порядк элементов важен, НАЗВАНИЯ МОЖНО ДАВАТЬ ЛЮБЫЕ

// console.log(carrot);
// console.log(picklRick);

// //Деструтуризация в функциях

// const user2 = {
//     call: 'Nik',
//     age: 25,
//     employed: true,
// }

// const info = ({call, age, employed}) => { //деструктуризация параметров функции
//     if (!employed){
//         return console.log(`User ${call} has no job`);
//     }
//     return console.log(`User ${call} has a job and him ${age}`);
// }

// info(user2)//User Nik has a job and him 25

//деструкторизацию можно использовать и внутри функции

//Практика!!!

// № 1 Задание
// const user = {
//     call: 'Mik',
//     age:20,
//     country: 'Netherlands'
// }

// const {call, age,   country} = user;

// console.log(call, age, country);

//  № 2 Задание

// const colors = ['red', 'green', 'blue'];

// const [red, green, blue] = colors;

// console.log(red, green, blue);

// № 3 Задание. Деструктуризация в параметрах функции:

// person = {
//     name: "James",
//     age: 25,
// }

// function printPerson({name, age}){
//     return console.log( name, age);
// }

// printPerson(person);

//4. Деструктуризация вложенных объектов:

// const stud = {
//     Sname: 'Alick',
//     about: {
//         evaluations: 5,
//         years: 27,
//     }
// }

// // const {Sname, about} = stud;

// // const {evaluations, years} = about;
// // console.log(Sname, about, evaluations, years);

// const {Sname, about: {evaluations, years}} = stud;  //ПРЕДПОЧТИТЕЛЬНЕЕ!
// console.log(Sname,  evaluations, years);

//5.Использование значения по умолчанию:

// const person = {
//     Sname: 'John',
//     age: 30,
// };

// const {Sname, age, country = 'USA' } = person;

// console.log(Sname, age, country);









// Условные инструкции (Тернарный оператор (выражение которое возвращает результат), switch, if, if ... else)


//Инструкция выполняет определённое действие


