
import TaskItem from './TaskItem';
import styles from './TaskList.module.css'

function TaskList(props) {
 
  
  
  
    return (
    <ul className={styles['goal-list']}>
        {props.tasks.map(task =>(
            <TaskItem 
            key = {task._id}
            id = {task._id}
            onDelete = {props.onDelete}
            >
            {task.task}
            </TaskItem>
        ))}
    </ul>
  )
}

export default TaskList