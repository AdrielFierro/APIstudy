function ToDo({todo,deleteTodo,index}){

return(



<div>

<h3>{todo}</h3>
<button onClick={()=>deleteTodo(index)} >x</button>




</div>






)



}

export default ToDo;