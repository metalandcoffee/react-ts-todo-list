import { useState } from 'react';
import './App.css';
import { ToDoList } from './components/ToDoList';
import { ListItemProps } from './components/ListItem';

function App() {
	const [task, setTask] = useState('');
	const [list, setList] = useState<ListItemProps[]>([]);
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
