import { ListItemProps, ListItem } from './ListItem';
import { AddItem } from './AddItem';

type ToDoListProps = {
	task: ListItemProps;
	list: ListItemProps[];
	setTask: React.Dispatch<React.SetStateAction<ListItemProps>>;
	setList: React.Dispatch<React.SetStateAction<ListItemProps[]>>;
};

export const ToDoList = ({ task, setTask, list, setList }: ToDoListProps) => (
	<>
		<AddItem task={task} list={list} setTask={setTask} setList={setList} />
		<ul>
			{list.map((listItem, i) => {
				return (
					<ListItem
						key={i}
						title={listItem.title}
						description={listItem.description}
					/>
				);
			})}
		</ul>
	</>
);
