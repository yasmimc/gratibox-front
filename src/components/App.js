import "../styles/reset.css";
import "../styles/globalStyles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "../routes/routes";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import MySignature from "../pages/mySigntature/MySignature";
import Plans from "../pages/plans/Plans";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path={routes.home} element={<Home />} />
				<Route exact path={routes.login} element={<Login />} />
				<Route exact path={routes.register} element={<Register />} />
				<Route exact path={routes.plans} element={<Plans />} />
				<Route exact path={routes.mySignature} element={<MySignature />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
