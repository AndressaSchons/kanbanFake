import styled from "styled-components";
import {
    fontSize,
    FontSizeProps,
    layout,
    LayoutProps,
    space,
    SpaceProps,
} from "styled-system";

type RowProps = LayoutProps & SpaceProps & FontSizeProps;

export const Row = styled.div<RowProps>`
    display: flex;
    flex-direction: row;
    ${layout}
    ${space}
    ${fontSize}
`;
