const data = [
    {item: 'get milk'},
    {item: 'walk dog'},
    {item: 'code code code'},
];

module.exports = (app) => {

    app.get('/todo', (req, res) => {
        res.render('todo', {todos: data})
    });

    app.post('/todo', (req, res) => {
        
    });

    app.delete('/todo', (req, res) => {
        
    });

};
