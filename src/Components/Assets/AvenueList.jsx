const AvenueList = ({ children, src, textColor }) => {
	return (
		<div className="flex gap-2 items-center">
			<img src={src} alt="a checkbox icon" />
			<p className={`font-normal text-[${textColor}] text-2xl `}>{children}</p>
		</div>
	);
};

export default AvenueList;
