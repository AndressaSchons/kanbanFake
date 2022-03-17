import styled from "styled-components";
import {
    ColorProps,
    color,
    space,
    SpaceProps,
    layout,
    LayoutProps,
} from "styled-system";

type TopProps = SpaceProps & ColorProps & LayoutProps;

export const Top = styled.div<TopProps>`
    ${space}
    ${color}
    ${layout}
`;
