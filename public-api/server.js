import express from 'express';
import { setupLogging } from './logging.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
setupLogging(app);


app.get('/', (req, res) => {
    res.send('/ of public-api');
});

app.listen(PORT, () => {
    console.log(`Public API server is running on port ${PORT}`);
    console.log(`Server is running on port ${PORT}`);
});