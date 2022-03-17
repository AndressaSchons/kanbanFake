import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./components/styles/globalStyle";
import { AppRoutes } from "./router";
import { Theme } from "./components/styles/theme";

ReactDOM.render(
    <React.StrictMode>
        <Theme>
            <GlobalStyle />
            <AppRoutes />
        </Theme>
    </React.StrictMode>,
    document.getElementById("root")
);
