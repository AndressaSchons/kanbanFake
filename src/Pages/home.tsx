import { Column } from "../components/Column";
import { Row } from "../components/Row";
import { Cards } from "../components/Card";
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from "react-beautiful-dnd";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ListItem } from "../components/List/ListItem";

const itemsFromBackend = [
    { id: uuid(), content: "First task" },
    { id: uuid(), content: "Second task" },
    { id: uuid(), content: "Third task" },
    { id: uuid(), content: "Fourth task" },
    { id: uuid(), content: "Fifth task" },
];

const columnsFromBackend = {
    [uuid()]: {
        name: "Requested",
        items: itemsFromBackend,
    },
    [uuid()]: {
        name: "To do",
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

const onDragEnd = (result: DropResult, columns, setColumns) => {
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
    const [columns, setColumns] = useState(columnsFromBackend);

    return (
        <div>
            {/* <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                }}
            >
                <DragDropContext
                    onDragEnd={(result) =>
                        onDragEnd(result, columns, setColumns)
                    }
                >
                    {Object.entries(columns).map(
                        ([columnId, column], index) => {
                            return (
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                    key={columnId}
                                >
                                    <h2>{column.name}</h2>
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
                                                                    ? "#F45555"
                                                                    : "#FF3422",
                                                            padding: 4,
                                                            width: 250,
                                                            minHeight: 500,
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

                                                                                        backgroundColor:
                                                                                            snapshot.isDragging
                                                                                                ? "#260"
                                                                                                : "#456C86",
                                                                                        color: "white",
                                                                                        ...provided
                                                                                            .draggableProps
                                                                                            .style,
                                                                                    }}
                                                                                >
                                                                                    <ListItem
                                                                                        label={
                                                                                            item.content
                                                                                        }
                                                                                    />
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
                                </div>
                            );
                        }
                    )}
                </DragDropContext>
            </div> */}
            <div>
                <Row fontSize="titleBigger">Project One</Row>
                <Row>
                    <DragDropContext
                        onDragEnd={(result) =>
                            onDragEnd(result, columns, setColumns)
                        }
                    >
                        {Object.entries(columns).map(
                            ([columnId, column], index) => {
                                return (
                                    <Cards
                                        titlee={column.name}
                                        key={columnId}
                                        style={{ margin: 4 }}
                                    >
                                        <div style={{ margin: 8 }}>
                                            <Droppable
                                                droppableId={columnId}
                                                key={columnId}
                                            >
                                                {(provided, snapshot) => {
                                                    return (
                                                        <div
                                                            {...provided.droppableProps}
                                                            ref={
                                                                provided.innerRef
                                                            }
                                                            style={{
                                                                background:
                                                                    snapshot.isDraggingOver
                                                                        ? "#F45555"
                                                                        : "#FF3422",
                                                                padding: 4,
                                                                width: 250,
                                                                minHeight: 500,
                                                            }}
                                                        >
                                                            {column.items.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => {
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

                                                                                            backgroundColor:
                                                                                                snapshot.isDragging
                                                                                                    ? "#260"
                                                                                                    : "#456C86",
                                                                                            color: "white",
                                                                                            ...provided
                                                                                                .draggableProps
                                                                                                .style,
                                                                                        }}
                                                                                    >
                                                                                        <ListItem
                                                                                            label={
                                                                                                item.content
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                );
                                                                            }}
                                                                        </Draggable>
                                                                    );
                                                                }
                                                            )}
                                                            {
                                                                provided.placeholder
                                                            }
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
            </div>
        </div>
    );
};
