import styled from "styled-components";
import {
    ColorProps,
    color,
    space,
    SpaceProps,
    layout,
    LayoutProps,
    border,
    BorderStyleProps,
} from "styled-system";

type BoxProps = SpaceProps & ColorProps & LayoutProps & BorderStyleProps;

export const Box = styled.div<BoxProps>`
    ${space}
    ${color}
    ${layout}
    ${border}
`;
