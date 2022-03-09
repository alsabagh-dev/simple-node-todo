const body_parser = require('body-parser');
const mongoose = require('mongoose');

const url_encoded_parser = body_parser.urlencoded({extended: false});

// Connect to DB
const password = process.env.DB_PASS;
const uri = `mongodb+srv://zizo:${password}@todos.fggrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri);

// Create schema
const todoSchema = new mongoose.Schema({
    item: String
});
// Create Model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = (app) => {

    app.get('/todo', (req, res) => {
        Todo.find({}, (err, data) => {
            if (err) throw err;
            res.render('todo', {todos: data})
        })
        
    });

    app.post('/todo', url_encoded_parser, (req, res) => {
        console.log(req.body.item);
        new Todo({item: req.body.item}).save((err, data) =>{
            if (err) throw err;
            res.json(data);        
        });
    });

    app.delete('/todo/:item', (req, res) => {

        if (err) throw err;
        Todo.find({item: req.params.item.replace(/\-/g, ' ') }).deleteOne((err,data) => {
            res.json(data);
        })
    });

};
