export type AddItemProps = {
	task: string;
	setTask: React.Dispatch<React.SetStateAction<string>>;
};

export const AddItem = ({ task, setTask }: AddItemProps) => {
	const onTaskChange = (next: React.ChangeEvent<HTMLInputElement>) => {
		setTask(next.target.value);
	};
	return (
		<form>
			<input type='text' value={task} onChange={onTaskChange} />
			<button type='submit'>Add</button>
		</form>
	);
};
