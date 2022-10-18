import { useState } from 'react';
import { ListItemProps } from './ListItem';

export type AddItemProps = {
	task: ListItemProps;
	list: ListItemProps[];
	setTask: React.Dispatch<React.SetStateAction<ListItemProps>>;
	setList: React.Dispatch<React.SetStateAction<ListItemProps[]>>;
};

export const AddItem = ({ list, setList }: AddItemProps) => {
	const [title, setTitle] = useState<string>('');
	const [desc, setDesc] = useState<string>('');

	const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};
	const onDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDesc(event.target.value);
	};
	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const task: ListItemProps = { title, description: desc };
		setList([...list, task]);
	};
	return (
		<form onSubmit={onSubmitHandler}>
			<input type='text' value={title} onChange={onTitleChange} />
			<input type='text' value={desc} onChange={onDescChange} />
			<button type='submit'>Add</button>
		</form>
	);
};
