const express = require('express');

const app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files
app.use('/assests', express.static('./public'));

// listen to port
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});
