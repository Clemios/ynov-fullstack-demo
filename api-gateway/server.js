import { setupLogging } from './logging.js';
import { setupProxies } from './proxy.js';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3333;


app.use(express.json());
setupLogging(app);
setupProxies(app);

app.get('/', (req, res) => {
    console.log('Received request at / of gateway');
    res.json({ message: 'Welcome to the Gateway' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});