import styled, { StyledProps } from "styled-components";
import {
    ColorProps,
    color,
    space,
    SpaceProps,
    typography,
    TypographyProps,
    fontSize,
    FontSizeProps,
    flexbox,
    FlexboxProps,
    LayoutProps,
    layout,
    BordersProps,
    borderColor,
    borderLeft,
    border,
} from "styled-system";

type TextProps = TypographyProps &
    SpaceProps &
    ColorProps &
    FontSizeProps &
    FlexboxProps &
    LayoutProps &
    BordersProps;

export const Text = styled.p<TextProps>`
    color: #fff;
    ${typography}
    ${space}
    ${color}
    ${fontSize}
    ${flexbox}
    ${layout}
    ${borderColor}
    ${border}

`;
