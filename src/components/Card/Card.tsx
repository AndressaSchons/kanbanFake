//quadrado com informaçoes.
//Coisas que sao alteradas a cada card: Nome do card (Todo; InProgress; Ended; Finished) e cor
import { List } from "../List/List";
import { Text } from "../Text";
import { Top } from "../Top/Top";
import { Box } from "../Box/Box";
import { Row } from "../Row";
import { Input } from "../Input/input";

const text = "Olá";

export const Cards = () => {
    return (
        <div>
            <Box
                backgroundColor="backgroundCard"
                minWidth="240px"
                minHeight="172px"
                borderStyle="2px solid black"
            >
                <Top backgroundColor="#D5FFC1" minHeight="49px">
                    <Text
                        color="normalColor"
                        fontSize="title"
                        fontFamily="secondary"
                        textAlign="center"
                    >
                        Card
                    </Text>
                </Top>
                <Row width="100%">
                    <Input
                        flex={1}
                        placeholder="Enter with the task here..."
                        marginBottom="15px"
                        marginTop="10px"
                        textAlign="center"
                    />
                </Row>
                {/* <List items={text} /> */}
            </Box>
        </div>
    );
};
