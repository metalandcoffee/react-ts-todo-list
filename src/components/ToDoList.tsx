import { ListItem } from './ListItem';

type ToDoListProps = { items: typeof ListItem[] };

export const ToDoList = ({ items }: ToDoListProps) => <ul>{items.map(item => {
	return <ListItem title={item.title} description={item.description}/>
})}</ul>;
