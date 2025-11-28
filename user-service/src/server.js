import express from 'express';
import { setupLogging } from './middlewares/logging.js';
import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../swagger.js';
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());


setupLogging(app);

// Log every incoming request (method and URL)
app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.originalUrl}`);
    next();
  });
  
  // Global error handler middleware
//   app.use(function (err, req, res) {
//     console.error(err.stack);
//    return res.status(500).send('Something broke!');
//   });

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/test', (req, res) => {
    res.send('/test of user-service');
});

app.use('/auth', authRouter);

app.use('/', userRouter);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Public API server is running on port ${PORT}`);
    console.log(`Server is running on port ${PORT}`);
});

