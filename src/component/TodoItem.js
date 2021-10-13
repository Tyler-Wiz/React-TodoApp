import React from "react";


function TodoItem(props){
   const {item} = props
   const completedStyle = {
       fontStyle:'italic',
       textDecoration:"line-through",
       color:"#c3c3c3"
   }

    return(
        <div>
            <div className="todo_item">
                <input type="checkbox" 
                 checked= {item.completed}
                 onChange={() => props.completeTodo(item.id)}
                 />
                <p style={item.completed ? completedStyle : null}>{item.text}</p>
                <button onClick={() => props.removeTodo(item.id)}>Delete</button>
            </div>
        </div>
   )
}

export default TodoItem