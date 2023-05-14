// npm install mysql2 express morgan nodemon dotenv cors
import express from 'express';
import cors from 'cors';
import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();
  
app.use(cors({
    // origin: 'http://local:5100' //<- para especificar un origen en concreto
}));

app.use(express.json());

app.use(indexRoutes);
app.use(tasksRoutes);

app.listen(process.env.PORT_BACKEND, () => {
  console.log("Server is running on port " + process.env.PORT_BACKEND);
}); 
