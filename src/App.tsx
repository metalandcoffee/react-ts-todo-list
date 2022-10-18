import { useState } from 'react';
import './App.css';
import { ToDoList } from './components/ToDoList';
import { ListItemProps } from './components/ListItem';

function App() {
	const [task, setTask] = useState<ListItemProps>({
		title: '',
		description: '',
	});
	const [list, setList] = useState<ListItemProps[]>([
		{
			title: 'Task 1',
			description: 'Desc 1',
		},
		{
			title: 'Task 2',
			description: 'Desc 2',
		},
	]);
	return (
		<div className='App'>
			<ToDoList
				list={list}
				task={task}
				setTask={setTask}
				setList={setList}
			/>
		</div>
	);
}

export default App;
