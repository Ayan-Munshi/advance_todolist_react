import React, { useState } from "react";
import { Usecontext } from "../Todocontext";

function Todoinput() {

const[todo,settodo] = useState("")
const{addtodo} = Usecontext()

const add = (items) => {
     items.preventDefault()

     if (!todo) return 

     addtodo({id:Date.now(),todo,completed:false})
}


  return (
    <>
      
      <form onSubmit={add}
       className="flex">
        <input
          type="text"
          placeholder = "write activity here"
          
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value = {todo}
          onChange = {(event) => settodo(event.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
      
    </>
  );
}

export default Todoinput;
