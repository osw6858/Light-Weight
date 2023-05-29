import { AddTodoAction,ADD_TODO } from '../action/action'

//할일은 추가할떄 힐일객체의 형식을 정의
//todolist 를 배열에 넣어서 관리 할건데 배열안에 들어갈 값 
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

//TodosState는 Todo형식을 가진 객체만 들어올 수 있는 배열이다
//전체 배열 -> 그 배열 안에는 Todo 타입의 인자만 들어 올 수 있다
export type TodosState = Todo[];

// 초기 상태 선언
const initialState: TodosState = [];


const TodoReducer = (state:TodosState = initialState, action:AddTodoAction ):TodosState => {
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