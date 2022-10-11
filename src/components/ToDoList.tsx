import { ListItemProps, ListItem } from './ListItem';
import { AddItem } from './AddItem';

type ToDoListProps = {
	task: string;
	list: ListItemProps[];
	setTask: React.Dispatch<React.SetStateAction<string>>;
	setList: React.Dispatch<React.SetStateAction<ListItemProps[]>>;
};

export const ToDoList = ({ task, setTask, list, setList }: ToDoListProps) => (
	<>
		<AddItem task={task} setTask={setTask} />
		<ul>
			{list.map((listItem) => {
				return (
					<ListItem
						title={listItem.title}
						description={listItem.description}
					/>
				);
			})}
		</ul>
	</>
);
