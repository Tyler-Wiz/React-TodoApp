import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

function TodoList() {
    const [todos, setTodos] = useState([])
   
    const addTodo = (todo) => {
       const newTodos = [todo, ...todos]
       setTodos(newTodos)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        });
        setTodos(updatedTodos);
      };

      const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
      };

      const displayTodo = todos.map(todo => <TodoItem key={todo.id} item ={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>)

    return (

        <div>
         <TodoForm onSubmit={addTodo}/>
         <div className="todo_list">
           {displayTodo}
         </div>
       </div>
    )
}

export default TodoList
