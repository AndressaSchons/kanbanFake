import { Column } from "../components/Column";
import { Row } from "../components/Row";
import { Cards } from "../components/Card";
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropReason,
    DropResult,
} from "react-beautiful-dnd";
import { useState } from "react";

const listItem = [
    {
        id: "1",
        name: "Study",
    },
    {
        id: "2",
        name: "Gym",
    },
    {
        id: "3",
        name: "Game",
    },
];

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    padding: 10,
    backgroundColor: isDragging ? "#4a2975" : "white",
    color: isDragging ? "white" : "black",

    ...draggableStyle,
});

export const Home = () => {
    const [todo, setTodo] = useState(listItem);

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;
        if (!destination) return;

        const items = Array.from(todo);
        const [newOrder] = items.splice(source.index, 1);

        items.slice(destination.index, 0);
        setTodo(items);
    };
    return (
        <div>
            <Column backgroundColor="listCard">
                <Row fontSize="titleBigger">Project One</Row>
                <Row>
                    <Column
                        marginLeft="68px"
                        marginRight="42px"
                        marginTop="75px"
                    >
                        <Cards></Cards>
                    </Column>
                    <Column
                        marginLeft="42px"
                        marginRight="42px"
                        marginTop="75px"
                    >
                        <Cards></Cards>
                    </Column>
                    <Column
                        marginLeft="42px"
                        marginRight="42px"
                        marginTop="75px"
                    >
                        <Cards></Cards>
                    </Column>
                    <Column
                        marginLeft="42px"
                        marginRight="69px"
                        marginTop="75px"
                    >
                        <Cards></Cards>
                    </Column>
                </Row>
            </Column>
        </div>
    );
};
