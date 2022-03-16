import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/home";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>Not Found, Sorry</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
