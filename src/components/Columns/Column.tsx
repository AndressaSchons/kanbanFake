import { Text } from "../Text/Text";
import { Top } from "../Top/Top";
import { Box } from "../Box/Box";
import { Row } from "../Row/row";
import { ReactNode } from "react";
import { Droppable } from "react-beautiful-dnd";

type propsColumn = {
    titlee: string;
    children: ReactNode;
};

export const Cards = ({ titlee, children }: propsColumn) => {
    return (
        <div>
            <Box
                backgroundColor="backgroundCard"
                minWidth="240px"
                minHeight="172px"
                margin="32px"
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

                <Row width="100%">{children}</Row>


            </Box>
        </div>
    );
};
