import { Text } from "../Text";
import { Top } from "../Top/Top";
import { Box } from "../Box/Box";
import { Row } from "../Row";
import { Input } from "../Input/input";
import { ReactNode } from "react";
import { ListItem } from "../List/ListItem";

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
                borderStyle="2px solid #000"
            >
                <Top backgroundColor="#D5FFC1" minHeight="49px">
                    <Text
                        color="normalColor"
                        fontSize="title"
                        fontFamily="secondary"
                        textAlign="center"
                    >
                        {titlee}
                    </Text>
                </Top>
                <Row width="100%">{children}</Row>
            </Box>
        </div>
    );
};
