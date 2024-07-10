// import Home from './Components/pages/Home'; // Ensure these components exist
// import About from './Components/pages/About';
// import Contact from './Components/pages/Contact';

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DigitalSolution from "./pages/DigitalSolution";

function App() {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <AppLayout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "/about",
					element: <About />,
				},
				{
					path: "/contact",
					element: <Contact />,
				},
				{
					path: "/digital-solution",
					element: <DigitalSolution />,
				},
			],
		},
	]);

	return <RouterProvider router={routes} />;
}

export default App;
