import { Text } from "../Text/Text"
type props = {

    todo: string;
}

const TodoItem = ({ todo }: props) => {
    return (
        <Text
            bg="rgba(0, 0, 0, 0.2)"
            p="15px"
            mb="10px"
            borderRadius="4px"
            marginRight="15px"
            marginLeft="15px"
            borderLeft="5px solid #fff"
            word-wrap="break-word">
            {todo}

        </Text>
    )
}

export default TodoItem;