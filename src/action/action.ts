export const ADD_TODO = "ADD_TODO" as const;

let nextId = 1;

export const addTodo = (text:string) => ({
    type: ADD_TODO,
    payload: {
        id: nextId++,
        text
      }
   
})

export type AddTodoAction = |ReturnType<typeof addTodo>