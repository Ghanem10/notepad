

import dotenv from 'dotenv';
dotenv.config();
import errorHandlerMiddleWare from './middleware/errorHandler.js';
import notFound from './middleware/not_found.js';
import routes from './routes/tasksRoutes.js';
import connectDB from './db/connect.js';
import express from 'express';
import axios from 'axios';
const app = express();


/* Key */
const API_KEY = process.env.API_KEY;

/* MiddleWare */
app.use(express.static('./dist'))
app.use(express.json());

app.post('/weather/data', (req, res) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city_name}&appid=${API_KEY}&units=metric`;
    axios({
        url: url,
        responseType: 'json'
    }).then(data => {
        res.send(data.data);
    })
});

app.use('/api/v1/tasks', routes);


app.use(notFound);
app.use(errorHandlerMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_DB || process.env.MONGO_DB_AZURE);
        console.log('CONNECTED!!')
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();