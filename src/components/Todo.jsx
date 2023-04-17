import React, { useEffect, useState } from "react";
import UpdateTodo from "./UpdateTodo.jsx";
import remove from "../images/delete.png"
import checkMark from "../images/checkMark.png"
import edit from "../images/edit.png"
import { motion } from "framer-motion";
import axios from "axios";

const url="https://taskifyapp.onrender.com/todos"


const Todo=({id,title,completed,deleteData})=>{
  const [isCompleted,setCompleted]=useState(completed)
  const [editing,setEditing]=useState(false)
  const isEditing=()=>{
    setEditing(!editing)
  }
  useEffect(()=>{
    axios.put(`${url}/${id}`,{title: title,completed: isCompleted})
  },[isCompleted])

  return (
    <div id={id} className="main">
      <motion.h3 className="todo-list" whileHover={{opacity: 0.5}}>{title}</motion.h3>
      <p className={isCompleted!==true ? "notDone" : "done"}>{isCompleted!==true ? "Not Done" : "Done"}</p>
      <div className="container">
        <motion.img whileHover={{ scale: 1.3}} style={{height: "40px", padding: "20px", cursor: "pointer"}} src={remove} onClick={()=>deleteData(id)}/>
        <motion.img whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }} 
          style={isCompleted===false ? {height: "50px", padding: "20px", cursor: "pointer"} : {height: "0px"}} 
          src={checkMark} onClick={()=>setCompleted(!isCompleted)}/>
        <motion.img whileHover={{opacity: 0.2}} style={{height: "50px", padding: "10px", cursor: "pointer"}} src={edit} onClick={()=>{isEditing()}}/>
        <div style={{position: "absolute"}}>{editing && <UpdateTodo id={id} completed={completed} isEditing={isEditing}/>}</div>
      </div>
    </div>
  )
}

export default Todo