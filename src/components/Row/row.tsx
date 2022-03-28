import styled from "styled-components";
import {
    fontSize,
    FontSizeProps,
    layout,
    LayoutProps,
    space,
    SpaceProps,
    ColorStyleProps,
    ColorProps,
    color,
    colorStyle,
} from "styled-system";

type RowProps = LayoutProps &
    SpaceProps &
    FontSizeProps &
    ColorProps &
    ColorStyleProps;

export const Row = styled.div<RowProps>`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    word-break: break-all;

    ${layout}
    ${space}
    ${fontSize}
    ${color}
    ${colorStyle}
`;
