import TodoForm from './Form/TodoForm'
import TaskList from './List/TaskList'
import  styles from './App.module.css';




function App(props) {
 

    
  let content = (
    <p style={{ textAlign: 'center' }}>No Tasks found. Add Your Tasks</p>
  );

  if (props.tasks.length > 0) {
    content = (
      <TaskList tasks={props.tasks} onDelete = {props.onDelete}/>
    );
  }
    
  
    return (
    <>
    <h1 style={{textAlign:'center'}}>Welcome to TodoLIST</h1>
    <p style={{textAlign:'center'}}>Click the task to <b>Delete</b></p>
    
    <section id={styles['goal-form']}>
        <TodoForm onAdd = {props.onAdd}/>
        </section>
        <section id={styles.goals}>
        {content}
        </section>
    </>
  )
}

export default App