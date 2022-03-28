import styled from "styled-components";
import {
    backgroundColor,
    BackgroundColorProps,
    border,
    BorderProps,
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
    TextAlignProps & BorderProps;

export const Input = styled.input<InputProps>`
    padding: 10px;
    border:none;
    background-color: #F3F3F3;
    color: #000;
    width: 1227px;
    

    &::placeholder {
        color: rgba(0, 0, 0, 0.2);
    }

    ${flex}
    ${space}
    ${color}
    ${position}
    ${flexbox}
    ${textAlign},
    ${border}
`;
