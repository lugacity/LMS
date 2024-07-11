import arrow from "../assets/images/arrow-up.png";

const Button = ({ children }) => {
	return (
		<button className="border border-white rounded-xl text-base cursor-pointer bg-transparent justify-self-end text-white py-2 px-2 flex gap-2 h-24 font-light w-auto capitalize">
			<span className="self-end text-xl "> {children}</span>
			<img src={arrow} alt="" className="w-[20%] self-start" />
		</button>
	);
};

export default Button;
