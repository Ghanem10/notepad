

import dotenv from 'dotenv';
import errorHandlerMiddleWare from './middleware/errorHandler.js';
import notFound from './middleware/not_found.js';
import routes from './routes/tasksRoutes.js';
import connectDB from './db/connect.js';
import express from 'express';
import cors from 'cors';
dotenv.config();

const app = express();

/* MiddleWare */
app.use(cors());
app.use(express.json());

app.use('/api/v1/tasks', routes);


app.use(notFound);
app.use(errorHandlerMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_DB);
        console.log('CONNECTED!!')
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();