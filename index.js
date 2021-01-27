const express = require('express')
const TodoController = require('./src/controller/TodoController')
const app = express()
const port = 3000

app.get('/todos', TodoController.get)
app.get('/todos/:id', TodoController.getById)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// const { Sequelize } = require('sequelize');
// const db = require('./src/config/database')

// const sequelize = new Sequelize(db.development)

// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }