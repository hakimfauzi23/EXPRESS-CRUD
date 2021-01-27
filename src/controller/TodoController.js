const { Todo } = require('../db/models')

class TodoController {

    static async get(req, res) {
        const data = await Todo.findAll()
        res.json(data)
    }

    static async getById(req, res) {
        const data = await Todo.findByPk(req.params["id"])
        res.json(data)
    }

    static async create(req, res) {
        const data = await Todo.create(req.body)
        res.json(data)
    }
}
module.exports = TodoController;