const express = require('express');
const app = express();
const port = 3000;

const users = [
    { id: 1, name: 'John', surname: 'Doe', age: 25, country: 'USA' },
    { id: 2, name: 'Pierre', surname: 'Dupont', age: 30, country: 'France' },
    { id: 3, name: 'Hans', surname: 'Muller', age: 40, country: 'Germany' },
    { id: 4, name: 'Mateo', surname: 'Gonzalez', age: 28, country: 'Spain' },
    { id: 5, name: 'Olga', surname: 'Sydorenko', age: 35, country: 'Ukraine' }
];

app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h1><p>Use /users to see all users or /users/:id to get specific user data.</p>');
});

app.get('/users', (req, res) => {
    let htmlResponse = '<h1>List of Users</h1><ul>';
    users.forEach(user => {
        htmlResponse += `<li><strong>ID:</strong> ${user.id}, <strong>Name:</strong> ${user.name} ${user.surname}, <strong>Age:</strong> ${user.age}, <strong>Country:</strong> ${user.country}</li>`;
    });
    htmlResponse += '</ul>';
    res.send(htmlResponse);
});


app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        res.status(404).send('<h1>Error 404</h1><p>User not found</p>');
    } else {
        res.send(`
            <h1>User</h1>
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Name:</strong> ${user.name} ${user.surname}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>Country:</strong> ${user.country}</p>
        `);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});