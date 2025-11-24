import { setupLogging } from './logging.js';
import { setupProxies } from './proxy.js';
import express from 'express';
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5555;

app.use(cors());
app.use(express.json());
setupLogging(app);
setupProxies(app);

app.get('/', (req, res) => {
    console.log('Received request at / of gateway');
    // res.json({ message: 'Welcome to the Gateway' });
    res.send('/ of api-gateway');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});