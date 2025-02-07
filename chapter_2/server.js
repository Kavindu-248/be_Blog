const express = require('express');
const app = express();
const PORT = 3000;




console.log("This is ane xtra file")

//HTTP Verbs
app.get('/', (req, res) => {
    res.sendStatus(200);

});

app.get('/dashboard', (req, res) => {
    res.send('Welcome to the dashboard');
});


app.get('/api/data', (req, res) => {
    res.json({message: 'Hello, World!'});
});



app.listen(PORT, () => {console.log('Server is running on port:', PORT); });
