import { useState } from "react";
import axios from "axios";
import App from '../components/App'

const url = "http://localhost:3000/api/task";

export default function Home(props) {
	const [tasks, setTasks] = useState(props.tasks);



	const addTask = async (newTask) => {
		
		try {
		
				const { data } = await axios.post(`/api/task`, newTask);
				setTasks((prev) => [...prev, data.data]);
				// console.log(data.message);
			
		} catch (error) {
			console.log(error);
		}
	};

	const deleteTask = async (id) => {
		try {
			const { data } = await axios.delete(`/api/task/${id}`);
			setTasks((prev) => prev.filter((task) => task._id !== id));
			// console.log(data.message);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<App tasks = {tasks} onAdd = {addTask}  onDelete = {deleteTask}/>
	);
}

export const getServerSideProps = async () => {
	const { data } = await axios.get(url);
	return {
		props: {
			tasks: data.data,
		},
	};
};
