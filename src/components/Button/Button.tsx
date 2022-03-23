import styled from "styled-components";
import { space, SpaceProps, variant } from "styled-system";

type ButtonProps = SpaceProps & {
    variant?: string;
};

export const Button = styled.button<ButtonProps>`
    padding: 10px 20px;
    cursor: pointer;
    color: #fff;
    border: none;

    ${variant({
        variants: {
            default: {
                backgroundColor: "#CCCCCC",
                color: "#000",
            },
        },
    })}
    ${space}
`;

Button.defaultProps = {
    variant: "default",
};
