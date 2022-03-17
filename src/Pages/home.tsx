import { Column } from "../components/Column";
import { Row } from "../components/Row";
import { Cards } from "../components/Card";
import { SideBar } from "../components/SideBar";

export const Home = () => {
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
