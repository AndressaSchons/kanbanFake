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
    BordersProps,
    borders,
} from "styled-system";

type TopProps = SpaceProps &
    ColorProps &
    LayoutProps &
    BorderStyleProps &
    BordersProps;

export const Top = styled.div<TopProps>`
    ${space}
    ${color}
    ${layout}
    ${border}
    ${borders}
`;
