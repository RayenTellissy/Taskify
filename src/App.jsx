import React, { useEffect, useState } from "react"
import AllTodos from "./components/allTodos.jsx";
import { motion, useTime, useTransform } from "framer-motion"
import axios from "axios";
import Search from "./components/Search.jsx";
import CreateTodo from "./components/createTodo.jsx";


const url="https://jsonplaceholder.typicode.com/todos"

const App = () => {
  const [user,setUser]=useState(window.location.search.substring(10))
  const [view,setView]=useState("allTodos")
  const [data,setData]=useState([])
  const [searched,setSearched]=useState([])

  useEffect(()=>{
    axios.get(url).then(res=>setData(res.data))
  },[])
  
  const changeView=(str)=>{
    setView(str)
  }
  const search=(query)=>{
    setSearched(data.filter(e=>e.title.includes(query)))
  }
  const updateData=(query)=>{
    setData(data.filter(e=>e.title.includes(query)))
  }
  const deleteData=(id)=>{
    axios.delete(`${url}/${id}`)
  }

  const renderView=()=>{
    if(view==="createTodo"){
      return <CreateTodo user={user}/>
    }
    if(searched.length){
      return <AllTodos data={searched} deleteData={deleteData}/>
    }
    else{
      return <AllTodos data={data} deleteData={deleteData}/>
    }
  }

  //animation
  const time=useTime()
  const rotate=useTransform(time,[0,3500],[0,360],{clamp: false})

  return(
    <div>
      <motion.p id="user" style={{rotate}}>{user}</motion.p>
      <nav>
        <motion.div whileHover={{scale: 1.1}} whileTap={{rotate: 360}} className={view!=="createTodo" ? "nav-unselected" : "nav-selected"} onClick={()=>changeView("createTodo")}>
          <h3>Create Todo</h3>
        </motion.div>

        <motion.div whileHover={{scale: 1.1}} whileTap={{rotate: 360}} className={view!=="allTodos" ? "nav-unselected" : "nav-selected"} onClick={()=>{changeView("allTodos"); setSearched([])}}>
          <h3>All Todos</h3>
        </motion.div>

        <motion.div whileHover={{scale: 1.1}} whileTap={{rotate: 360}} className={view!=="search" ? "nav-unselected" : "nav-selected"} onClick={()=>changeView("search")}>
          <h3>Search</h3>
        </motion.div>
      </nav>
      {view==="search" ? <Search search={search} view={view} changeView={changeView}/> : <></>}
      {renderView()}
    </div>
  )
};

export default App;
