import { Text } from "../Text/Text"
type props = {
    id: string;
    todo: string;
}

//Style

const TodoItem = ({ todo, id }: props) => {
    return (
        <Text
            padding="15px"
            backgroundColor="F3F3F3"
            borderLeft="2px solid #fff"
            color="#000">
            {todo}

        </Text>
    )
}

export default TodoItem;