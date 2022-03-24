import { Row } from "../components/Row/row";
import { Input } from "../components/Input/input";
import { Cards } from "../components/Columns/Column";
import { Button } from "../components/Button/Button";
import { TodoItem } from "../components/TodoItem/TodoItem";
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from "react-beautiful-dnd";
import { useState } from "react";
import { v4 as uuid, v4 } from "uuid";


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

let arrayColumnOne: Array<items> = []
let arrayColumnTwo: Array<items> = []
let arrayColumnTree: Array<items> = []
let arrayColumnFourth: Array<items> = []

const onDragEnd = (result: DropResult, columns: any, setColumns: any) => {
    if (!result.destination) return;
    const { source, destination } = result
    const sourceColumn = columns[source.droppableId]; //coluna q vem
    const destColumn = columns[destination.droppableId]; //coluna q vai

    if (sourceColumn != destColumn) {
        let arrayColumn: Array<items> = []
        let arrayColumnToGo: Array<items> = []

        if (sourceColumn == 1) arrayColumn = arrayColumnOne
        else if (sourceColumn == 2) arrayColumn = arrayColumnTwo
        else if (sourceColumn == 3) arrayColumn = arrayColumnTree
        else if (sourceColumn == 4) arrayColumn = arrayColumnFourth

        if (destColumn == 1) arrayColumnToGo = arrayColumnOne
        else if (destColumn == 2) arrayColumnToGo = arrayColumnTwo
        else if (destColumn == 3) arrayColumnToGo = arrayColumnTree
        else if (destColumn == 4) arrayColumnToGo = arrayColumnFourth

        const array = [...arrayColumn];
        const arrayToGO = [...arrayColumnToGo];

        const [removed] = array.splice(source.index, 1);
        arrayToGO.splice(destination.index, 0, removed);

        console.log(arrayToGO)

    } else {
        let arrayColumn: Array<items> = [];
        if (sourceColumn == 1) arrayColumn = arrayColumnOne
        else if (sourceColumn == 2) arrayColumn = arrayColumnTwo
        else if (sourceColumn == 3) arrayColumn = arrayColumnTree
        else if (sourceColumn == 4) arrayColumn = arrayColumnFourth

        const [removed] = arrayColumn.splice(source.index, 1);
        arrayColumn.splice(destination.index, 0, removed)

    }
}


export const Home = () => {
    const [tasks, setTasks] = useState(initial);
    const [columns, setColumns] = useState(columnsFromBackend);

    const [taskName, setTaskName] = useState("");

    const handleButton = () => {
        if (!taskName) return;
        const copy = [...arrayColumnOne];
        copy.push({ title: taskName, id: v4() });
        setTasks(copy);
        console.log(copy)
        setTaskName("");
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
                    borderBottomColor="red"
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

                                        <Droppable droppableId={columnId} key={columnId} >
                                            {(provided, snapshot) => {
                                                return (
                                                    <div {...provided.droppableProps} ref={provided.innerRef} key={index} >
                                                        {tasks.map(
                                                            (item, index) => (


                                                                <Draggable
                                                                    key={item.id}
                                                                    draggableId={item.id}
                                                                    index={index}
                                                                >

                                                                    {(provided, snapshot) => {
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
                                                                                <TodoItem todo={arrayColumnOne[0].title} id={arrayColumnOne[0].id} />
                                                                            </div>
                                                                        );
                                                                    }}
                                                                </Draggable>


                                                            ))}
                                                    </div>
                                                )
                                            }}
                                        </Droppable>
                                    </div>
                                </Cards>
                            )
                        })}
                </DragDropContext>
            </Row>
        </div >
    );
};
