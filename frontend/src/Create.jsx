// import { useState } from "react";
// import axios from "axios";

// const Create = () => {
//   const [task, setTask] = useState();
//   const handleAdd = () => {
//     axios
//       .post("http://localhost:3001/add", { task: task })
//       .then((result) => {
//         location.reload()
//       })
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div>
//       <input
//         className="p-2.5 w-80 border-b-2 outline-none rounded-3xl"
//         type="text"
//         name=""
//         id=""
//         placeholder="Enter Task"
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <button
//         className="p-2.5 bg-black text-white cursor-pointer"
//         type="submit"
//         onClick={handleAdd}
//       >
//         ADD
//       </button>
//     </div>
//   );
// };

// export default Create;
