import styled from "styled-components";
import {
    ColorProps,
    layout,
    LayoutProps,
    space,
    SpaceProps,
    color,
    borderRadius,
    BorderRadiusProps,
    border,
    BorderProps,
    flexbox,
    FlexboxProps,
} from "styled-system";

type ColumnProps = LayoutProps &
    SpaceProps &
    ColorProps &
    BorderRadiusProps &
    BorderProps &
    FlexboxProps;

export const Column = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    ${layout}
    ${flexbox}
    ${space}
    ${color}
    ${borderRadius}
    ${border}
`;
