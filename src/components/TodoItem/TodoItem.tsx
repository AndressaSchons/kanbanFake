import { Text } from "../Text/Text"
type props = {
    id: string;
    todo: string;
}

export const TodoItem = ({ todo, id }: props) => {
    return (
        <Text>
            {todo}
            {id}
        </Text>
    )
}