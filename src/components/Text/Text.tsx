import styled from "styled-components";
import {
    ColorProps,
    color,
    space,
    SpaceProps,
    typography,
    TypographyProps,
    fontSize,
    FontSizeProps,
} from "styled-system";

type TextProps = TypographyProps & SpaceProps & ColorProps & FontSizeProps;

export const Text = styled.p<TextProps>`
    color: #fff;
    ${typography}
    ${space}
    ${color}
    ${fontSize}
`;
