import { setupLogging } from './logging.js';
import { setupProxies } from './proxy.js';
import express from 'express';
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5555;

app.use(cors());
//app.use(express.json());
setupLogging(app);

setupProxies(app);

app.get('/', (req, res) => {
    console.log('Received request at / of gateway');
    // res.json({ message: 'Welcome to the Gateway' });
    res.send('/ of api-gateway');
});

// Log every incoming request (method and URL)
app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.originalUrl}`);
    next();
  });
  
  // Global error handler middleware
  app.use(function (err, req, res) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});