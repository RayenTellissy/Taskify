import React, { useState } from "react";
import { motion } from "framer-motion"
import axios from "axios";
const url="https://taskifyapp.onrender.com/todos"

const CreateTodo=({user})=>{
  const [todo,setTodo]=useState("")
  
  const create=()=>{
    const newTodo={
      userId: user,
      title: todo,
      completed: false
    }
    axios.post(url,newTodo)
  }
  return (
    <div className="main" style={{display: "flex", alignItems: "center",flexDirection: "column", padding: "30px"}}>
      <h1 className="todo-list">Create Todo</h1>
      <input id="title" type="text" placeholder="type a todo..." onChange={e=>setTodo(e.target.value)}/>
      <motion.button
       id="create-button" 
       whileHover={{scale: 1.2}} 
       whileTap={{scale: 0.8}} 
       onClick={create}>Create
      </motion.button>
    </div>
  )
}

export default CreateTodo