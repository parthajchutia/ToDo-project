import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className="todo" style={{ display: "flex", flexDirection: "row" }}>
      <div
        className="text"
        style={{
          background: "black",
          height: "2rem",
          width: "46rem",
          borderRadius: "6px",
          paddingTop: "2rem",
          marginTop: "20px",
          color: "white",
        }}
      >
        {text}
      </div>

      <div className="icons" style={{ display: "flex", flexDirection: "row",paddingLeft:"10px",gap:"2rem", paddingTop:"20px",background:"white",height:"40px",borderRadius:"10px",width:"6rem", margin:"20px" }}>
        <AiFillEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
