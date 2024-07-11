import React from "react";

const Grid2Layout = ({ className, children }) => {
	return (
		<div className={`${className} grid md:grid-cols-2 px-20  `}>{children}</div>
	);
};

export default Grid2Layout;
