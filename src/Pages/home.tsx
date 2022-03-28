import { Row } from "../components/Row/row";
import { Input } from "../components/Input/input";
import { Cards } from "../components/Columns/Column";
import { Button } from "../components/Button/Button";
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from "react-beautiful-dnd";
import { useState } from "react";
import { v4 } from "uuid";


type Item = {
    title: string;
    id: string;
};

type Column = {
    id: string,
    name: string,
    items: Item[]
}

type ColumnList = Column[]


const columnsBlocked: ColumnList = [
    {
        id: v4(),
        name: "Requested",
        items: []
    },
    {
        id: v4(),
        name: "To Do",
        items: []
    },
    {
        id: v4(),
        name: "In Progress",
        items: []
    },
    {
        id: v4(),
        name: "Done",
        items: []
    }
]


const onDragEnd = (result: DropResult, column: any, setColumns: any) => {
    if (!result.destination) return;
    const { source, destination } = result

    const sourceColumn = column[source.droppableId];
    const destColumn = column[destination.droppableId];

    const [removed] = sourceColumn.items.splice(source.index, 1);
    destColumn.items.splice(destination.index, 0, removed);
}

export const Home = () => {
    const [columns, setColumns] = useState(columnsBlocked);
    const [taskName, setTaskName] = useState("");

    const handleButton = () => {
        if (!taskName) return;
        columnsBlocked[0].items.push({ id: v4(), title: taskName });
        setColumns(columnsBlocked)
        console.log(columnsBlocked[0])
        setTaskName("");
    };

    return (
        <div>
            <Row
                fontSize="titleBigger"
                color="titleColor"
                backgroundColor="nameColor"
                p="15px"
            >
                Project One
            </Row>

            <Row display="inline-block">
                <Input
                    width="100px"
                    placeholder="What do you have to do?"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    marginBottom="15px"
                    marginTop="10px"
                    marginLeft="35px"
                />
                <Button onClick={handleButton} margin="15px">
                    Add
                </Button>
            </Row>

            <Row>
                <DragDropContext
                    onDragEnd={(result) =>
                        onDragEnd(result, columns, setColumns)
                    }
                >
                    {Object.entries(columns).map(
                        ([columnId, column], index) => {
                            return (
                                <Droppable droppableId={columnId} key={columnId} >
                                    {(provided, snapshot) => {
                                        return (
                                            <div ref={provided.innerRef} key={index} {...provided.droppableProps}>
                                                <Cards titlee={column.name} key={columnId} label={column.items} />
                                                {provided.placeholder}
                                            </div>

                                        )

                                    }}

                                </Droppable>

                            )
                        })}
                </DragDropContext>
            </Row>
        </div >
    );
};
