class TodoController {
    static async get(req, res) {
        const todos = [
            {
                "id": 1,
                "title": "create module",
                "description": null
            },
            {
                "id": 2,
                "title": "create slide",
                "description": "slide must using template"
            },
            {
                "id": 3,
                "title": "create video course",
                "description": "App Desktop using PyQt5"
            },
        ]
        res.json(todos)
    }
}
module.exports = TodoController;