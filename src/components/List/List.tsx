import { Column } from "../Column/";
import { ListItem, ListItemProps } from "./ListItem";

type ListProps = {
    items: ListItemProps[];
};

export const List: React.FC<ListProps> = ({ items }) => {
    return (
        <Column py="1">
            {items.map((item, index) => (
                <ListItem key={index} {...item} />
            ))}
        </Column>
    );
};
