import React, {useState} from 'react'

function TodoForm(props) {
  const [input, setInput] = useState('')

  const handleSubmit = e => {
       e.preventDefault()
       props.onSubmit({
           text:input,
           id:Math.floor(Math.random() * 1000),
           completed:false
       })
      
      setInput('')
   }

   const handleChange = e => {
       setInput(e.target.value)
   }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                   type='text'
                   name='text'
                   placeholder='Your Todo'
                   onChange={handleChange}
                   value={input}
                />
                <button disabled={input === ""}>Add ToDo</button>
            </form>
        </div>
    )
}

export default TodoForm
