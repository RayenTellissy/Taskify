import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import axios from "axios";
import close from "../images/close.png"
const url="https://taskifyapp.onrender.com/todos"

const UpdateTodo=({id,completed,isEditing})=>{
  const [title,setTitle]=useState("")
  const [isVisible,setIsVisible]=useState(true)

  const update=()=>{
    axios.put(`${url}/${id}`,{title: title, completed}).then(res=>console.log(res)).catch(err=>console.log(err))
  }

  return (
    <AnimatePresence>
      {isVisible && (<motion.div initial={{opacity: "0"}} animate={{opacity: 1}} exit={{opacity: 0}} className="main" style={{display: "flex", alignItems: "center",flexDirection: "column", padding: "30px"}}>
      <img id="update-close" src={close} onClick={()=>{setIsVisible(!isVisible); isEditing()}}/>
      <h1 className="todo-list">Update Todo</h1>
      <input id="title" type="text" placeholder="update todo..." onChange={e=>setTitle(e.target.value)}/>
      <motion.button
       id="create-button" 
       whileHover={{scale: 1.2}} 
       whileTap={{scale: 0.8}} 
       onClick={update}>Update
      </motion.button>
      </motion.div>)}
    </AnimatePresence>
  )
}

export default UpdateTodo