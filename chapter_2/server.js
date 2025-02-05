const express = require('express');
const app = express();
const PORT = 3000;


console.log("This is ane xtra file")



//HTTP Verbs

app.get('/', (req, res) => {
    res.sendStatus(200);

});



app.listen(PORT, () => {console.log('Server is running on port:', PORT); });
