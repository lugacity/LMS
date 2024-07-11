import img1 from "../assets/images/slider-img1.png"; 
import img2 from "../assets/images/slider-img2.png";
import img3 from "../assets/images/slider-img3.png";
import img4 from "../assets/images/slider-img4.png";
import professional from "../assets/images/proffessional.png";
import group from "../assets/images/big-team.png";
import MainContent from "../Components/MainContent/MainContent";
import AvenueImpact from "../Components/AvenueImpact/AvenueImpact";
import AvenueList from "../Components/Assets/AvenueList";
import iconLight from "../assets/icons/icon.png";
import iconDark from "../assets/icons/icon-dark.png";
import ImageOverlay from "../Components/ImageOverlay";
import Button from "../Components/Button";
import slider1 from "../assets/images/slider-pic1.png";
import slider2 from "../assets/images/slider-pic2.png";
import slider3 from "../assets/images/slider-pic3.png";
import slider4 from "../assets/images/slider-pic4.png";

const Home = () => {
	return (
		<>
			<MainContent />
			<section className="bg-[#f4f5f7] text-center py-12">
				<h2 className="text-[#23314A] text-center mb-4 font-light text-3xl capitalize">
					we deliver real results
				</h2>
				<p className="text-[#23314A] text-xl max-w-3xl m-auto">
					Our seasoned consultants bring a wealth of experience from serving a
					diverse range of government and private sector clients.
				</p>
				<div className="flex flex-nowrap overflow-hidden w-full p-0 mt-11">
					<img src={img1} alt="" /> 
					<img src={img2} alt="" />
					<img src={img3} alt="" />
					<img src={img4} alt="" />
					<img src={img1} alt="" />
					<img src={img2} alt="" />
					<img src={img3} alt="" />
					<img src={img4} alt="" />
					<img src={img2} alt="" />
					<img src={img3} alt="" />
					<img src={img4} alt="" />
				</div>
			</section>
			<div className=" py-24 px-20">
				<section className="grid grid-cols-2 gap-3">
					<h2 className="text-[#cc1747] font-light text-3xl">
						Avenue Impact Empowers Your Business Growth
					</h2>
					<p className="text-[#667185] text-xl">
						Whether you are looking to expand into new markets, streamline
						operations, or simply need support navigating {"today's"} complex
						business landscape, we are here to help. Let us help you grow your
						business and achieve your full potential.
					</p>
				</section>
				<div className="grid grid-cols-3 gap-10 mt-12">
					{/* <img src={card} alt="" />
					<img src={card} alt="" />
					<img src={card} alt="" /> */}
					<AvenueImpact />
				</div>
			</div>
			<img src={group} alt="" />
			<div>
				<ImageOverlay>
					<section className=" z-50 px-20 pt-16 pb-10 ">
						<h3 className="text-[#f4f5f7] font-medium text-4xl mb-8 ">
							Our certified professionals in various disciplines
						</h3>
						<div className="flex items-center space-x-[34px]">
							<div className="space-y-3"> 
								<AvenueList src={iconLight} textColor={"#f4f5f7"}>
									Agile and Digital Business Analysis{" "}
								</AvenueList>
								<AvenueList src={iconLight} textColor={"#f4f5f7"}>
									Product Management{" "}
								</AvenueList>
								<AvenueList src={iconLight} textColor={"#f4f5f7"}>
									Data Analytics
								</AvenueList>
								<AvenueList src={iconLight} textColor={"#f4f5f7"}>
									Power BI{" "}
								</AvenueList>
								<AvenueList src={iconLight} textColor={"#f4f5f7"}>
									Business Intelligence{" "}
								</AvenueList>
								<AvenueList src={iconLight} textColor={"#f4f5f7"}>
									Software Development{" "}
								</AvenueList>
							</div>
							<div className="space-y-3">
								<AvenueList src={iconLight} textColor={"#f4f5f7"}>
									Digital Transformation Solution{" "}
								</AvenueList>
								<AvenueList src={iconLight} textColor={"#f4f5f7"}>
									Cyber Security{" "}
								</AvenueList>
								<AvenueList src={iconLight} textColor={"#f4f5f7"}>
									Data Management{" "}
								</AvenueList>
								<AvenueList src={iconLight} textColor={"#f4f5f7"}>
									Data Strategy{" "}
								</AvenueList>
								<AvenueList src={iconLight} textColor={"#f4f5f7"}>
									Artificial Intelligence{" "}
								</AvenueList>
								<AvenueList src={iconLight} textColor={"#f4f5f7"}>
									Cloud Computing and more{" "}
								</AvenueList>
							</div>
						</div>
					</section>
				</ImageOverlay>
			</div>
			<img src={professional} alt="people sitting round a table" />
			<div className=" py-12 px-20 bg-#f4f5f7">
				<div className="max-w-4xl ml-auto">
					<h3 className="text-[#23314A] font-medium text-4xl mb-8 ">
						Our certified professionals in various disciplines
					</h3>
					<div className="flex items-center space-x-[34px]">
						<div className="space-y-3">
							<AvenueList src={iconDark} textColor={"#667185"}>
								Business Transormation & Advisory{" "}
							</AvenueList>
							<AvenueList src={iconDark} textColor={"#667185"}>
								Turnaround, Stability & Restructuring Transaction
							</AvenueList>
							<AvenueList src={iconDark} textColor={"#667185"}>
								Valuation & Financial Advisory Services
							</AvenueList>
							<AvenueList src={iconDark} textColor={"#667185"}>
								Dispute Advisory
							</AvenueList>
							<AvenueList src={iconDark} textColor={"#667185"}>
								Tax Services
							</AvenueList>
						</div>
						<div className="space-y-3">
							<AvenueList src={iconDark} textColor={"#667185"}>
								Healthcare
							</AvenueList>
							<AvenueList src={iconDark} textColor={"#667185"}>
								Financial Services
							</AvenueList>
							<AvenueList src={iconDark} textColor={"#667185"}>
								Technology
							</AvenueList>
							<AvenueList src={iconDark} textColor={"#667185"}>
								Automotive
							</AvenueList>
							<AvenueList src={iconDark} textColor={"#667185"}>
								Oil & Gas
							</AvenueList>
						</div>
					</div>
				</div>
			</div>
			<ImageOverlay>
				<section className="px-20 py-24">
					<h3 className="font-poppins text-7xl font-light text-[#f4f5f7]">
						Ready to Connect with an Expert at Avenue Impact?
					</h3>
					<p className="font-poppins text-1xl font-light text-[#f4f5f7] mt-3 mb-10">
						Receive bespoke support from our experienced consultants and elevate
						your business to new heights.
					</p>

					<Button>Contact Us</Button>
				</section>
			</ImageOverlay>
			<section className="py-24">
				<div className="grid grid-cols-2 gap-3 px-20 ">
					<h3 className="text-[#23314A] text-4xl">About Avenue Impact</h3>

					<p className=" text-justify text-[#667185] text-xl">
						Our drive is to make a noticeable difference in everything we
						undertake. At Avenue Impact, our focus is on supporting established
						and growing companies in the best possible way. Our team of business
						and technology consultants provides expert advice and hands-on
						support tailored to meet your specific needs. Our objective is to
						deliver customized solutions that tackle commercial, technical, and
						operational challenges, leading to long-term success for your
						business and its customers.
					</p>
				</div>
				<div className="mt-16 flex flex-nowrap overflow-hidden gap-4 -ml-5">
					<img src={slider1} alt="" />
					<img src={slider2} alt="" />
					<img src={slider3} alt="" />
					<img src={slider4} alt="" />
				</div>
			</section>
		</>
	);
};

export default Home;
