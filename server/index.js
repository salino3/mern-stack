// npm install mysql2 express morgan nodemon

import express from 'express';
import cors from 'cors';
import  {PORT}  from './config.js';
import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();
 
app.use(cors({
    // origin: 'http://local:5100' //<- para especificar un origen en concreto
}));
app.use(express.json());

app.use(indexRoutes);
app.use(tasksRoutes);

app.listen(PORT, () => {
 console.log("Server is running on port " + PORT);
}); 
