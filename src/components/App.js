import "../styles/reset.css";
import "../styles/globalStyles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "../routes/routes";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import MySignature from "../pages/mySigntature/MySignature";
import Plans from "../pages/plans/Plans";
import { UserProvider } from "../contexts/userContext";

function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route exact path={routes.home} element={<Home />} />
                    <Route exact path={routes.login} element={<Login />} />
                    <Route
                        exact
                        path={routes.register}
                        element={<Register />}
                    />
                    <Route exact path={routes.plans} element={<Plans />} />
                    <Route
                        exact
                        path={routes.mySignature}
                        element={<MySignature />}
                    />
                </Routes>
            </UserProvider>
        </BrowserRouter>
    );
}

export default App;
