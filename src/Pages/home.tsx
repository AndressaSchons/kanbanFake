import { Column } from "../components/Column";
import { Row } from "../components/Row";

export const Home = () => {
    return (
        <div>
            <Column>
                <Sidebar>
                    <Row>NAME</Row>
                </Sidebar>
            </Column>
            <Column>
                <Row>Project One</Row>
                <Row>
                    <Column>
                        <Card></Card>
                    </Column>
                    <Column>
                        <Card></Card>
                    </Column>
                    <Column>
                        <Card></Card>
                    </Column>
                    <Column>
                        <Card></Card>
                    </Column>
                </Row>
            </Column>
        </div>
    );
};
