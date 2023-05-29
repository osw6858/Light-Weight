import { AddTodoAction,ADD_TODO } from '../action/action'


export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];

// 초기 상태 선언
const initialState: TodosState = [];


const TodoReducer = (state:Todo[] = initialState, action:AddTodoAction ):TodosState => {
  switch (action.type) {
    case ADD_TODO :
        return [...state, {
            id:action.payload.id,
            text:action.payload.text,
            done:false
        }]
        default:
            return state;
    }
}

export default TodoReducer;