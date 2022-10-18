export type ListItemProps = {
	title: string;
	description: string;
};

export const ListItem = ({ title, description }: ListItemProps) => {
	return (
		<li>
			<h2>{title}</h2>
			<span>{description}</span>
			<input type='checkbox' name='' id='' />
		</li>
	);
};
