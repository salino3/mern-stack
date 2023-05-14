import {pool} from '../db.js';



export const getTasks = async (req, res) => {

  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createAt ASC"
    );

    return res.json(result);
  } catch (error) {
    return res.status(500).json({msg: error.message});
  };
};
  

export const getTask = async (req, res) => {

  try {
     const [result] = await pool.query("SELECT * FROM tasks WHERE id = (?) ", [
       req.params.id,
     ]);

     if (result || result.length === 0) {
       return res.status(404).json({ msg: "Task not found" });
     };
     res.json(result[0]);
  } catch (error) {
      return res.status(500).json({ msg: error.message });
  };
};


export const createTask = async (req, res) => {
  const { title, description } = req.body;

 try {
   if (!title) {
     return res
       .status(400)
       .json({ error: "Title are required" });
   };

   const [result] = await pool.query(
     "INSERT INTO tasks(title, description) VALUES (?, ?)",
     [title, description]
   );

   res.json({
     id: result.insertId,
     title,
     description,
   });
 } catch (error) {
    return res.status(500).json({ msg: error.message });
 };
};



export const updateTask = async (req, res) => {

  try {
    const { id } = req.params;

    const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Task not found" });
    };

    return res.status(200).json({
      msg: `Task nº ${id} successfully updated`,
    });
  } catch (error) {
      return res.status(500).json({ msg: error.message }); 
  };
};



export const deleteTask = async (req, res) => {
   const { id } = req.params;

  const [result] = await pool.query("DELETE FROM tasks WHERE id = (?)", [
   req.params.id,
 ]);
 
 if (result.affectedRows === 0){
 return res.status(404).json({msg: "Task not found"});
 };

 return res.status(200).json({
   msg: `Task nº ${id} successfully deleted`,
 });
 
};
