import React, { useState } from 'react'

const Todolist = () => {
    const[todolist,setTodolist]=useState([]);
    const addnewtask=(e)=>{
        // console.log(e.code);
        if(!e.target.value.trim())return;
        if(e.code==='Enter'){
            console.log(e.target.value);
            setTodolist([...todolist,{text:e.target.value,completed:false}])
            e.target.value="";
            console.log(todolist);
        }
    };
    const deletetodo=(index)=>{
        console.log(index);
        const temp=todolist;
        temp.splice(index,1);
        setTodolist([...temp]);
    }
    const completeTodo = (index) => {
        const temp = todolist;
        temp[index].completed= true;
        setTodolist([...temp]);
    }
    return (
    <div>
        <div className='container'>
            <p className='display-4 fw-bold text-center'>ToDo list</p>
            <hr/>
            <div className='card'>
                <div className='card-header'>
                    <input onKeyDown={addnewtask} className='form-control' placeholder='add new task' />
                </div>
                <div className='card-body'>
                    <ul className='list-group'>
                    {todolist.map((obj,index)=>{return <li className='list-group-item' key = {index}>
                        { obj.completed ? <span className='badge text-bg-success'>Completed</span> : <span className='badge text-bg-warnig'>Pending</span> }
                        <h3 style={{textDecoration : obj.completed ? 'line-through' : '' }}>{obj.text}</h3>
                        <button onClick={()=>{deletetodo(index)}} className='btn btn-danger'>delete</button>
                        <button onClick={ () => { completeTodo(index)} } className='btn btn-primary ms-2' > Complete </button>
                    </li>})}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Todolist