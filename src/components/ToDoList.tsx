import { ListItemProps, ListItem } from './ListItem';
type ToDoListProps = { items: ListItemProps[] };

export const ToDoList = ({ items }: ToDoListProps) => (
	<ul>
		{items.map((item) => {
			return (
				<ListItem title={item.title} description={item.description} />
			);
		})}
	</ul>
);
