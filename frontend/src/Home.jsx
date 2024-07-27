import { useEffect, useState } from "react";
import axios from "axios";
import Create from "./Create";
import { TiDelete } from "react-icons/ti";
import { ImCheckboxUnchecked } from "react-icons/im";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-5xl font-bold mb-8">Welcome, Nicky!</h1>
      <Create />
      <h4 className="text-lg text-light-alt uppercase m-6 font-normal">
        Your Tasks
      </h4>
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo}>
            <div onClick={() => handleEdit(todo._id)} className="flex justify-between items-center ">
              <ImCheckboxUnchecked /> 
              <p className={todo.done ? "line-through" : ""}>{todo.task}</p>
              <TiDelete onClick={() => handleDelete(todo._id)} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
