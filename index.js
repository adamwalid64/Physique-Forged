import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Make CSS file static
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

console.log(__dirname);