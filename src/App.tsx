import './App.css';
import { ToDoList } from './components/ToDoList';

function App() {
	const data = [
		{
			title: 'Title 1',
			description: 'Description 1',
		},
		{
			title: 'Title 2',
			description: 'Description 2',
		},
		{
			title: 'Title 3',
			description: 'Description 3',
		},
	];
	return (
		<div className='App'>
			<ToDoList items={data} />
		</div>
	);
}

export default App;
