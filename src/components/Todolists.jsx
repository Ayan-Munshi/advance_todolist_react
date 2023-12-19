import React, { useState } from "react";
import { Usecontext } from "../Todocontext";

function Todolists({todo}) {
 
  const[todomsg,settodomsg] = useState(todo.todo)
  const[istodoeditable,setistodoeditable] = useState(false)
  const {deleteTodo,updatetodo,toggle} = Usecontext()

  const edittodo =() => {               // this function is for onclick to edit the todo
       updatetodo(todo.id,{...todo,todo:todomsg})
       istodoeditable(false)
  }
  
  const togglecomplete = () => {
    toggle(todo.id)
  }
  

  return (
    <>
      <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
          todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={togglecomplete}
        />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            istodoeditable ? "border-black/10 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
          value={todomsg}
          onChange={(e) => settodomsg(e.target.value)}
          readOnly={!istodoeditable}
        />
        {/* Edit, Save Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (todo.completed) return;

            if (istodoeditable) {
              edittodo();
            } else setistodoeditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {istodoeditable ? "save" : "edit"}
        </button>
        {/* Delete Todo Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => deleteTodo(todo.id)}
        >
          delete task
        </button>
      </div>
    </>
  );
}

export default Todolists;
