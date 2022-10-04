export type ListItemProps = {
	title: string;
	description: string;
};

export const ListItem = ({ title, description }: ListItemProps) => {
	return (
		<div>
			<h2>{title}</h2>
			<div>{description}</div>
		</div>
	);
};
