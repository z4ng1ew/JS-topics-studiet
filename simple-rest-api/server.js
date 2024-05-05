const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Пример данных
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
];

// Маршрут для получения списка пользователей
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Маршрут для получения пользователя по ID
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден' });
    }
    res.json(user);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
