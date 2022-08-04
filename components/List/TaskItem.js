
import styles from './TaskItem.module.css'

function TaskItem(props) {
 const deleteHandler = () =>{
    props.onDelete(props.id);
 }



  return (
    <>
    <li className={styles['goal-item']}  onClick={deleteHandler}>
        {props.children} 
    </li>
    
    </>
  )
}

export default TaskItem