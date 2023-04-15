import React from "react"
import Todo from "./Todo.jsx"


const AllTodos=({data,deleteData})=>{
  return(
    data.map((e,index)=>{
      return <Todo key={index} id={e.id} title={e.title} completed={e.completed} deleteData={deleteData}/>
    })
  )
}

export default AllTodos