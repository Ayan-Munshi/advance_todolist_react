import { createContext, useContext } from "react";

export const Createcontext = createContext({
  todos: [{ id: 0, todo: "msg", completed: false }],
  addtodo: (todo) => {},
  updatetodo: (id, todo) => {},
  toggle: (id) => {},
  deletetodo: (id) => {},
});

export const Usecontext = () => {
  return useContext(Createcontext);
};

export const Todoprovider = Createcontext.Provider;
