const express = require('express')
const TodoController = require('./src/controller/todoController')
const app = express()
const port = 3000

app.get('todos/', TodoController.get)