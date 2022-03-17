import { ThemeProvider } from "styled-components";

const fontSizes: any = [18, 20, 25, 30, 45];

fontSizes.indications = fontSizes[0];
fontSizes.itens = fontSizes[1];
fontSizes.people = fontSizes[2];
fontSizes.title = fontSizes[3];
fontSizes.titleBigger = fontSizes[4];

const backgroundCard = "#CCCCCC";
const listCard = "#F3F3F3";
const topCard = "#002073";
const nameColor = "#002073";
const titleColor = "#FFF";
const normalColor = "#000";

const theme = {
    fontSizes,
    fonts: {
        primary: "PT Serif Caption, serif",
        secondary: "Roboto, sans-serif",
    },
    colors: {
        backgroundCard,
        listCard,
        topCard,
        nameColor,
        titleColor,
        normalColor,
    },
};

export type ThemeType = typeof theme;

export const Theme: React.FC = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
