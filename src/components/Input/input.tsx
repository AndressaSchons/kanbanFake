import styled from "styled-components";
import {
    backgroundColor,
    BackgroundColorProps,
    color,
    ColorStyleProps,
    flex,
    FlexBasisProps,
    flexbox,
    FlexboxProps,
    FlexProps,
    layout,
    LayoutProps,
    position,
    PositionProps,
    space,
    SpaceProps,
    textAlign,
    TextAlignProps,
} from "styled-system";

type InputProps = FlexProps &
    SpaceProps &
    ColorStyleProps &
    PositionProps &
    FlexboxProps &
    FlexBasisProps &
    TextAlignProps;

export const Input = styled.input<InputProps>`
    background-color: transparent;
    padding: 10px;
    border: 2px #fff;
    color: #fff;

    &::placeholder {
        color: rgba(0, 0, 0, 0.2);
    }

    ${flex}
    ${space}
    ${color}
    ${position}
    ${flexbox}
    ${textAlign}
`;
