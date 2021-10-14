import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

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
                <p className='todo_text' style={item.completed ? completedStyle : null}>{item.text}</p>
                <input type="checkbox" 
                 checked= {item.completed}
                 onChange={() => props.completeTodo(item.id)}
                 />
                 <button className="remove_btn"  onClick={() => props.removeTodo(item.id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>   
            </div>
        </div>
   )
}

export default TodoItem