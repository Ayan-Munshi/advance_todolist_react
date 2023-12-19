import { useEffect, useState } from "react";
import "./App.css";
import { Todoprovider } from "./Todocontext";
import Todoinput from "./components/Todoinput";
import Todolists from "./components/Todolists";




function App() {
  const [todos, settodos] = useState([]);

  const addtodo = (todo) => {
    settodos((prev) => [...prev, { id: Date.now(), todo }]);
  };

  const updatetodo = (id, todo) => {
    settodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)
      )
    );
  }; // means first take all todos then map on them 1 by 1 then if anytodo's id == id then convert that perticular todo into new received  todo in updatetodo or leave the o;d todo

  const deletetodo = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id !== id)); // we can us map here but the best syntax is in this case filter funcftion from js
  }; // means now every todos will be in the (todos) but if id maches with todo.id  then that will be filter out from (todos)

  const toggle = (id) => {
    settodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id ? { ...prevtodo, completed: !prevtodo.completed }  : prevtodo
      )
    );
  };

  // local storage
   
  useEffect(() => {
     const todos = JSON.parse(localStorage.getItem("todos")) || []  // first getting all previous todo informations from local storage or nothing/empty string

     if(todos && todos.length > 0 ){
      settodos(todos)
     }
     },[])

  useEffect(() =>{
        localStorage.setItem("todos", JSON.stringify(todos) )   // todoinfo is just a key to use local storage
  },[todos])   


  return (
    <Todoprovider value={{ todos, addtodo, deletetodo, toggle, updatetodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Create Your Activity List
          </h1>
          <div className="mb-4"> <Todoinput/>        {/* todo input field goes here */} </div>
          <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}

          {todos.map((todo) => {
            <div key ={todo.id}
            className="w-full">
              <Todolists todo={todo}/>
            </div>
          })}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
