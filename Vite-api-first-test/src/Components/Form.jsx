import { useState } from 'react'
import ToDo from './ToDo'

const Form = () => {

const[todo,setTodo] = useState({});

const[todos,setTodos] = useState([
{todo: 'todo 1'},
{todo: 'todo 2'},
{todo: 'todo 3'}
]);


const handleChange =(event)=> setTodo(event.target.value );

const handleClick = () => { 
    if(todo.trim() ===""){
        alert("campo no puede estar vacio");
    return;
     }
    setTodos([...todos,{todo}])
} 


const deleteTodo = indice =>{
    const newTodos = [...todos]
    newTodos.splice(indice,1)
    setTodos(newTodos)


}

return(

<div>

    <form onSubmit={(e)=>e.preventDefault()}>

<label>Agregar Tarea </label> 

<br />

<input type="text" name="todo"  onChange={handleChange}  />

<button onClick={handleClick}>agregar</button>

    </form>

{todos.map((value,index)=>(

<ToDo 
todo={value.todo}
key={index}
index = {index}
deleteTodo={deleteTodo}
/>


))}
    
</div>




);





};

export default Form;