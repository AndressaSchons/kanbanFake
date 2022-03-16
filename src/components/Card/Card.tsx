//quadrado com informaçoes.
//Coisas que sao alteradas a cada card: Nome do card (Todo; InProgress; Ended; Finished) e cor

import { Column } from "../Column";

export type CardItem = {
    label: string;
};

export const Cards: React.FC<CardItem> = ({ label }) => {
    return (
        <Column
            width="100%"
            bg="rgba(0, 0, 0, 0.2)"
            p="20px"
            mb="10px"
            borderRadius="4px"
            borderLeft="5px solid #fff"
        />
    );
};
