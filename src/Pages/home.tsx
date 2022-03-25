import { Row } from "../components/Row/row";
import { Input } from "../components/Input/input";
import { Cards } from "../components/Columns/Column";
import { Button } from "../components/Button/Button";
import TodoItem from "../components/TodoItem/TodoItem";
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

const initial: Item[] = [];

const columnsFromBackend: ColumnList = [
    {
        id: v4(),
        name: "Requested",
        items: [
            {
                id: 'dawdwa',
                title: 'outrocard1',
            }
        ]
    },
    {
        id: v4(),
        name: "To Do",
        items: [
            {
                id: 'dawdwa',
                title: 'outrocard1',
            }
        ]
    },
    {
        id: v4(),
        name: "In Progress",
        items: [
            {
                id: 'dawdwa',
                title: 'outrocard1',
            }
        ]
    },
    {
        id: v4(),
        name: "Done",
        items: [
            {
                id: 'dawdwa',
                title: 'outrocard1',
            }
        ]
    },
]

const onDragEnd = (result: DropResult, column: any, setColumns: any) => {
    if (!result.destination) return;
    const { source, destination } = result

    const sourceColumn = column[source.droppableId];
    const destColumn = column[destination.droppableId];


}


export const Home = () => {
    const [tasks, setTasks] = useState(initial);
    const [columns, setColumns] = useState(columnsFromBackend);
    const [taskName, setTaskName] = useState("");

    // const handleButton = () => {
    //     if (!taskName) return;
    //     const copy = [...];
    //     copy.push({ title: taskName, id: v4() });
    //     setTasks(copy);
    //     console.log(copy)
    //     setTaskName("");
    // };

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
                />
                {/* <Button onClick={handleButton} margin="15px">
                    Add
                </Button> */}
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

                                        {/* <Droppable droppableId={columnId} key={columnId} >
                                            {(provided, snapshot) => {
                                                return (
                                                    <div {...provided.droppableProps} ref={provided.innerRef} key={index} >

                                                        
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
                                                                    
                                                                    <TodoItem todo={arrayColumnOne[0].title} id={arrayColumnOne[0].id} />
                                                                </div>
                                                            )
                                                            }
                                                        </Draggable>


                                                        ))
                                                        {provided.placeholder}
                                                    </div>
                                                )
                                            }}
                                        </Droppable> */}
                                    </div>
                                </Cards>
                            )
                        })}
                </DragDropContext>
            </Row>
        </div >
    );
};
