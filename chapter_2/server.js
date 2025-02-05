const express = require('express');
const app = express();
const PORT = 3000;


console.log("This is ane xtra file")


app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
    });