import React, { useEffect, useState } from "react";
import close from "../images/close.png"
import { AnimatePresence, motion } from "framer-motion"

const Search=({search,view,changeView})=>{
  const [query,setQuery]=useState("")
  const [isVisible,setIsVisible]=useState(view==="search")
  
  useEffect(()=>{
    if(isVisible===false){
      setTimeout(()=>changeView("allTodos"),200)
    }
  },[isVisible])

  return(
    <AnimatePresence>
      {isVisible && (<motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} style={{display: "flex", justifyContent: "center", transform: "translateY(250px)"}}>
      <input id="search-bar"
        type="text" 
        placeholder="search here..." 
        onChange={e=>{setQuery(e.target.value); search(query)}}>
      </input>
      <img id="close" style={{
        position: "absolute",
        height: "80px", 
        transform: "translateX(370px) translateY(13px)",
        cursor: "pointer"}} 
        src={close} 
        onClick={()=>setIsVisible(!isVisible)}/>
      </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Search