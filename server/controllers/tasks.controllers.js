import {pool} from '../db.js';



export const getTasks = (req, res) => {
  res.send("obtieniendo tareas");
};


export const getTask = (req, res) => {
  res.send("obtieniendo tarea");
};

// export const createTask = async (req, res) => {

//   const {title, description} = req;

//  const result = await pool.query("INSERT INTO tasks(title, description)  VALUES (?, ?) ", 
//   [
//     title,
//     description
//   ]);
//   console.log(result);
//   res.send("creando tareas");
 
// };

export const createTask = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  };

  const [result] = await pool.query(
    "INSERT INTO tasks(title, description) VALUES (?, ?)",
    [title, description]
  );


 res.json({
  id: result.insertId,
  title,
  description
 });
};



export const updateTask = (req, res) => {
  res.send("actualizando tarea");
};

export const deleteTask = (req, res) => {
  res.send("eliminando tarea");
};
