import { Column } from "../Column/Columns";
import { Text } from "../Text";

export type ListItemProps = {
    id: string;
    label: string;
};

export const ListItem: React.FC<ListItemProps> = ({ label }) => {
    return (
        <Column
            width="100%"
            bg="rgba(0, 0, 0, 0.2)"
            borderLeft="5px solid #fff"
        >
            <Text>{label}</Text>
        </Column>
    );
};
