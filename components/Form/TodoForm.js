import { useState } from 'react'
import Button from '../UI/Button';
import styles from './TodoForm.module.css'


function TodoForm(props) {
    const [enteredTask,setEnteredTask] = useState('');
    const [isValid,setIsValid] = useState(true);
    
    
    const valueHandler = (e) =>{

        if(e.target.value.trim().length>0)setIsValid(true);
        setEnteredTask(e.target.value);
    }
 
    const submitHandler = (e) =>{
        e.preventDefault();
        if(enteredTask.trim().length===0){
            setIsValid(false);
            return;
        }
        if(enteredTask.trim().length>50){
            setIsValid(false);
            return;
        }
        const Taskobj = {
            task:enteredTask,
        }
        props.onAdd(Taskobj);
        setEnteredTask('');

    }
  
    return (

        <form onSubmit={submitHandler} >
       
        <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
            <label htmlFor='task'>Enter Task</label>
            <input type='text' id='task' onChange={valueHandler} value ={enteredTask} />
            </div>
            <Button type="submit">Add Task</Button>
           
        </form>
 
  )
}

export default TodoForm