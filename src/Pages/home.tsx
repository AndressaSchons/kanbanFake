import { Row } from "../components/Row";
import { Input } from "../components/Input/input";
import { Cards } from "../components/Card";
import { Button } from "../components/Button/Button";
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from "react-beautiful-dnd";
import { useState } from "react";
import { v4 as uuid, v4 } from "uuid";
import { List } from "../components/List/List";

type items = {
    title: string;
    id: string;
};

const initial: items[] = [];

const columnsFromBackend = {
    [uuid()]: {
        name: "Requested",
        items: initial,
    },
    [uuid()]: {
        name: "To Do",
        items: [],
    },
    [uuid()]: {
        name: "In Progress",
        items: [],
    },
    [uuid()]: {
        name: "Done",
        items: [],
    },
};

const onDragEnd = (result: DropResult, columns: any, setColumns: any) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems,
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems,
            },
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems,
            },
        });
    }
};

export const Home = () => {
    const [taskName, setTaskName] = useState("");
    const [tasks, setTasks] = useState(initial);
    const [columns, setColumns] = useState(columnsFromBackend);

    const itemExample = [{ id: uuid(), content: tasks }];

    const handleButton = () => {
        if (!taskName) return;
        console.log(taskName);
        const copy = tasks;
        copy.push({ title: taskName, id: v4() });
        setTasks(copy);
        setTaskName("");
        console.log(tasks);
    };
    return (
        <div>
            <Row
                fontSize="titleBigger"
                color="titleColor"
                backgroundColor="nameColor"
            >
                Project One
            </Row>

            <Row display="inline-block">
                <Input
                    flex={1}
                    placeholder="What do you have to do?"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    marginBottom="15px"
                    marginTop="10px"
                    marginLeft="20px"
                    marginRight="20px"
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
                                <Cards titlee={column.name} key={columnId}>
                                    <div style={{ margin: 8 }}>
                                        <Droppable
                                            droppableId={columnId}
                                            key={columnId}
                                        >
                                            {(provided, snapshot) => {
                                                return (
                                                    <div
                                                        {...provided.droppableProps}
                                                        ref={provided.innerRef}
                                                        style={{
                                                            background:
                                                                snapshot.isDraggingOver
                                                                    ? "#E5E5E5"
                                                                    : "#CCCCCC",
                                                            padding: 5,
                                                            width: 250,
                                                            minHeight: 320,
                                                        }}
                                                    >
                                                        {column.items.map(
                                                            (item, index) => {
                                                                return (
                                                                    <Draggable
                                                                        key={
                                                                            item.id
                                                                        }
                                                                        draggableId={
                                                                            item.id
                                                                        }
                                                                        index={
                                                                            index
                                                                        }
                                                                    >
                                                                        {(
                                                                            provided,
                                                                            snapshot
                                                                        ) => {
                                                                            return (
                                                                                <div
                                                                                    ref={
                                                                                        provided.innerRef
                                                                                    }
                                                                                    {...provided.draggableProps}
                                                                                    {...provided.dragHandleProps}
                                                                                    style={{
                                                                                        userSelect:
                                                                                            "none",
                                                                                        padding:
                                                                                            "4px",
                                                                                        margin: "0 0 2px 0",
                                                                                        color: "white",
                                                                                        ...provided
                                                                                            .draggableProps
                                                                                            .style,
                                                                                    }}
                                                                                >
                                                                                    {tasks.map(
                                                                                        (
                                                                                            item,
                                                                                            index
                                                                                        ) => (
                                                                                            <div
                                                                                                key={
                                                                                                    index
                                                                                                }
                                                                                            >
                                                                                                {
                                                                                                    item.title
                                                                                                }
                                                                                            </div>
                                                                                        )
                                                                                    )}
                                                                                </div>
                                                                            );
                                                                        }}
                                                                    </Draggable>
                                                                );
                                                            }
                                                        )}
                                                        {provided.placeholder}
                                                    </div>
                                                );
                                            }}
                                        </Droppable>
                                    </div>
                                </Cards>
                            );
                        }
                    )}
                </DragDropContext>
            </Row>
            <Row>
                {tasks.map((item, index) => (
                    <div key={index}>{item.title}</div>
                ))}
            </Row>
        </div>
    );
};
