const body_parser = require('body-parser');

const url_encoded_parser = body_parser.urlencoded({extended: false});

let data = [
    {item: 'get milk'},
    {item: 'walk dog'},
    {item: 'code code code'},
];

module.exports = (app) => {

    app.get('/todo', (req, res) => {
        res.render('todo', {todos: data})
    });

    app.post('/todo', url_encoded_parser, (req, res) => {
        data.push(req.body);
        res.json(data);        
    });

    app.delete('/todo/:item', (req, res) => {
        data = data.filter( todo => (todo.item.replace(/ /g, '-') !== req.params.item));
        res.json(data);
    });

};
