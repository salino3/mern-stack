// npm install mysql2 express morgan nodemon

import express from 'express';
import  {PORT}  from './config.js';
import indexRoutes from './routes/index.routes.js';

const app = express();
 
app.use(indexRoutes);

app.listen(PORT, () => {
 console.log("Server is running on port " + PORT);
});
