import { Text } from "../Text/Text";
import { Top } from "../Top/Top";
import { Box } from "../Box/Box";
import { Row } from "../Row/row";
import { Draggable } from "react-beautiful-dnd";
import TodoItem from "../TodoItem/TodoItem";


type Item = {
    title: string;
    id: string;
}

type propsColumn = {
    titlee: string,
    label: Item[]
};

export const Cards = ({ titlee, label }: propsColumn) => {
    return (
        <div>
            <Box
                backgroundColor="backgroundCard"
                minWidth="240px"
                minHeight="300px"
                margin="32px"
                width="285px"
            >
                <Top
                    backgroundColor="#D5FFC1"
                    minHeight="30px"
                    borderBottom="2px solid #000"
                    display="flex"
                    justifyContent="center"
                >
                    <Text
                        color="normalColor"
                        fontSize="title"
                        fontFamily="secondary"
                        justifyContent="center"
                        justifyItems="center"
                        display="flex"
                    >
                        {titlee}
                    </Text>
                </Top>

                {label.map((item, index) => (
                    <Row width="100%" key={index}>
                        <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                        >
                            {(provided, snapshot) => (
                                <div
                                    ref={
                                        provided.innerRef
                                    }
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}

                                >
                                    <TodoItem key={index} todo={item.title} />
                                </div>
                            )
                            }
                        </Draggable>
                    </Row>
                ))}

            </Box>
        </div>
    );
};
