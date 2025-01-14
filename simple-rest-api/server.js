// // //Импорт Express и создание приложения:
// // const express = require('express'); //анг. -требовать //оператор используется для импорта модулей в Node.js. Он принимает путь к модулю в качестве аргумента и возвращает экспортированную функциональность модуля. В этом случае указывается путь к модулю Express.js. //Теперь переменная express будет содержать импортированный модуль Express.js. Это означает, что вы можете получить доступ ко всем функциям и классам, предоставляемым Express.js, используя эту expressпеременную. //import express from 'express'; - такой синтаксис тоже возможен


// // const app = express(); //переменная appсодержит недавно созданный экземпляр приложения Express. Этот экземпляр представляет собой ядро ​​приложения Express.js и предоставляет методы для определения маршрутов, настройки промежуточного программного обеспечения и обработки HTTP-запросов. //Используя app-экземпляр, вы можете определить маршруты, определяющие, как сервер должен обрабатывать запросы по определенным путям. Например: 
// // //app.get('/', (req, res) => { 
// // //res.send('Hello from Express.js!');
// // //});
// // const PORT = process.env1.PORT || 3000;

// // // Пример данных
// // const users = [
// //     { id: 1, name: 'John' },
// //     { id: 2, name: 'Jane' },
// //     { id: 3, name: 'Doe' }
// // ];

// // // Маршрут для получения списка пользователей
// // app.get('/api/users', (req, res) => {
// //     res.json(users);

// //     /* - возможен и такой вариант
// //     app.get('/api/users', (req, res) => {
// //         const responseData = {
// //             users: users,
// //             message: 'Hello from Express.js!'
// //         };
// //         res.json(responseData);
// //     });

// //     */
// // });


// // // Маршрут для получения пользователя по ID
// // app.get('/api/users/:id', (request, response) => {
// //     const userId = parseInt(request.params.id);
// //     const user = users.find(user => user.id === userId);
// //     if (!user) {
// //         return response.status(404).json({ message: 'Пользователь не найден' });
// //     }
// //     response.json(user);
// // });

// // // Запуск сервера
// // app.listen(PORT, () => {
// //     console.log(`Сервер запущен на порту ${PORT}`);
// // });


// // //где использованны колл бэки
// // //Вызов метода app.listen(PORT, callback) использует колбэк функцию callback, которая будет вызвана, когда сервер будет успешно запущен и начнет прослушивать указанный порт. Это пример использования колбэк функции.

// // //Маршруты app.get('/api/users', ...) и app.get('/api/users/:id', ...) также используют колбэк функции для обработки запросов. Эти функции будут вызваны каждый раз, когда сервер получает соответствующий HTTP-запрос к указанным маршрутам. 


// // /* rocess.env.PORT || 3000 -

// // ## Объяснение для человека, не знакомого с бэкендом:

// // **1. Что такое `process.env.PORT || 3000`?**

// // Представьте, что вы хотите открыть магазин. Вам нужно выбрать номер дома, чтобы люди могли вас найти. Эта строка кода похожа на выбор номера дома для вашего веб-сервера.

// // * `process.env.PORT`: Это как адрес вашего магазина, который уже записан где-то (в "среде").
// // * `|| 3000`: Если адрес магазина не записан, используйте номер 3000.

// // **2. Почему 3000?**

// // 3000 - это распространенный номер дома для веб-серверов, как будто это стандартный адрес для магазинов. Если вы не укажете другой номер, ваш сервер будет "жить" по этому адресу.

// // **3. Что такое переменные среды?**

// // Переменные среды - это как записные книжки, в которых хранится информация о вашем приложении. 

// // * **Пример:** Представьте, что вы хотите продавать пироги. Вы можете записать в записную книжку "цена_пирога = 100 рублей". Это переменная среды, которая сообщает вашему приложению, сколько стоит пирог.

// // **4. Преимущества использования переменных среды:**

// // * **Простота:** Вы можете изменить настройки приложения, не меняя сам код.
// // * **Гибкость:** Вы можете использовать разные настройки для разных сред (например, для разработки и для продакшена).
// // * **Безопасность:** Вы можете хранить конфиденциальные данные (например, пароли) в переменных среды, чтобы они не были видны в коде.

// // **5. Примеры использования переменных среды:**

// // * **Номер порта:** Как мы уже говорили, номер порта можно хранить в переменной среды `PORT`.
// // * **Строка подключения к базе данных:** Вы можете хранить информацию о подключении к базе данных в переменных среды, таких как `DB_HOST`, `DB_NAME`, `DB_USER`, и `DB_PASSWORD`.
// // * **Путь к каталогу с файлами:** Вы можете хранить путь к каталогу с файлами приложения в переменной среды `APP_DIR`.
// // * **Секретные ключи:** Вы можете хранить секретные ключи для аутентификации или шифрования в переменных среды.

// // **Важно:** Переменные среды обычно не видны обычным пользователям. Они используются сервером и приложением для управления конфигурацией.

// // **Надеюсь, это объяснение было понятным!**

// // */





// // /*
// // Давайте создадим простое REST API с использованием Node.js и Express, используя колбэк-функции для обработки запросов к различным маршрутам API.

// // Прежде всего, убедитесь, что у вас установлен Node.js и пакетный менеджер npm. Затем создайте новый проект Node.js и установите Express:

// // ```bash
// // mkdir simple-rest-api
// // cd simple-rest-api
// // npm init -y
// // npm install express
// // ```

// // Теперь создайте файл `server.js` и добавьте в него следующий код:

// // ```javascript
// // const express = require('express');
// // const app = express();
// // const PORT = process.env.PORT || 3000;

// // // Пример данных
// // const users = [
// //     { id: 1, name: 'John' },
// //     { id: 2, name: 'Jane' },
// //     { id: 3, name: 'Doe' }
// // ];

// // // Маршрут для получения списка пользователей
// // app.get('/api/users', (req, res) => {
// //     res.json(users);
// // });

// // // Маршрут для получения пользователя по ID
// // app.get('/api/users/:id', (req, res) => {
// //     const userId = parseInt(req.params.id);
// //     const user = users.find(user => user.id === userId);
// //     if (!user) {
// //         return res.status(404).json({ message: 'Пользователь не найден' });
// //     }
// //     res.json(user);
// // });

// // // Запуск сервера
// // app.listen(PORT, () => {
// //     console.log(`Сервер запущен на порту ${PORT}`);
// // });
// // ```

// // В этом примере мы создали простой сервер с двумя маршрутами:

// // 1. `GET /api/users` - возвращает список всех пользователей.
// // 2. `GET /api/users/:id` - возвращает информацию о пользователе по его ID.

// // Теперь вы можете запустить сервер, выполнив команду:

// // ```bash
// // node server.js
// // ```

// // Сервер будет запущен на порту 3000 (или другом порте, если переменная окружения `PORT` установлена). Вы можете отправить запросы к вашему API, используя любой HTTP-клиент, такой как `curl` или Postman. Например:

// // ```bash
// // curl http://localhost:3000/api/users
// // ```

// // Этот запрос вернет список всех пользователей.
// // */


// /*
// process.env в Node.js представляет собой объект, который содержит переменные среды операционной системы.

// Переменные среды - это пары "ключ-значение", которые предоставляют информацию о среде выполнения, в которой работает ваше приложение. Они могут содержать информацию о различных параметрах и настройках окружения, таких как пути к файлам, конфигурационные параметры, порты и т. д.

// process.env позволяет вам получать доступ к этим переменным среды из вашего Node.js приложения. Например, если вы хотите получить значение переменной среды PORT, вы можете обратиться к process.env.PORT.

// В вашем коде вы используете process.env.PORT || 3000, чтобы установить порт, на котором будет запущен ваш сервер. Если переменная среды PORT не установлена, то будет использован порт по умолчанию - 3000.




// User
// что такое порт?

// ChatGPT
// В компьютерных сетях, порт - это логическое конечное устройство, используемое для идентификации определенного процесса или службы на устройстве в сети.

// В контексте веб-разработки и серверов, порт используется для определения, к какому приложению или службе должен быть направлен входящий сетевой трафик. Каждое приложение или служба, которое принимает входящие соединения через сеть, должно быть связано с определенным портом на хосте (компьютере или сервере).

// Стандартный HTTP-порт для обмена данными через интернет - это порт 80 для обычных HTTP-соединений и порт 443 для защищенных HTTPS-соединений. Однако вам не обязательно использовать эти порты для своего веб-приложения. По умолчанию, если порт не указан, то используется порт 3000.

// При запуске сервера Node.js (или любого другого веб-сервера), вы можете указать, на каком порту сервер должен слушать входящие запросы. Например, если вы указываете app.listen(3000), ваш сервер будет слушать входящие запросы на порту 3000.

// Использование разных портов позволяет одному компьютеру хостить несколько веб-приложений или служб, каждое из которых будет доступно по своему уникальному порту.
//  */


// const expModule = require('express')
// const appExemp = expModule();
// const MYPORT = process.env.MYPORT || 443;

// const students = [ 
//     { Num:10, call: 'Kim'},
//     { Num:11, call: "lim"},
//     { Num: 30, call: "Sim"}
// ];

// //Создание маршрута:
// app.get('api/students/', (request, response)=> {
//     try {
//         const ur = request.quer.ur; //Получение URL из запроса
//         const resp = await fetch(ur); //Запрос на внешний URL
//         const bl = await resp.bl();
//         response.send(bl)
//     }
    
  

// })

