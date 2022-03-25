import { Text } from "../Text/Text"
type props = {
    id: string;
    todo: string;
}

export const TodoItem = ({ todo, id }: props) => {
    return (
        <Text color="#000">
            {todo}
            
        </Text>
    )
}