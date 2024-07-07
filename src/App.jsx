import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home'; // Ensure these components exist
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';

import "./App.css";

function App() {
	return (
		<div id="app_padding">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About category="about" />} />
				<Route path="/contact" element={<Contact category="contact" />} />
				<Route path="/services" element={<Services category="services" />} />
			</Routes>
		</div>
	);
}

const AppWrapper = () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

export default AppWrapper;
