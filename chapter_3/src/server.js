import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 5000;

// Get the File path

const __filename = fileURLToPath(import.meta.url);

// Get the directory path
const __dirname = dirname(__filename);

//Serves the html files from public

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));


//serving up the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

