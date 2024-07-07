import MainContent from "../MainContent/MainContent";
import Navbar from "../Navbar/Navbar";
import img1 from "../../assets/images/slider-img1.png";
import img2 from "../../assets/images/slider-img2.png";
import img3 from "../../assets/images/slider-img3.png";
import img4 from "../../assets/images/slider-img4.png";
import card from "../../assets/images/card-img.png";
import group from "../../assets/images/big-team.png";
import overlay from "../../assets/images/overlay-img.png";

const Home = () => {
	return (
		<div>
			<Navbar />
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
				<div className="grid grid-cols-2 gap-3">
					<h2 className="text-[#cc1747] font-light text-3xl">
						Avenue Impact Empowers Your Business Growth
					</h2>
					<p className="text-[#667185] text-xl">
						Whether you are looking to expand into new markets, streamline
						operations, or simply need support navigating {"today's"} complex
						business landscape, we are here to help. Let us help you grow your
						business and achieve your full potential.
					</p>
				</div>
				<div className="grid grid-cols-3 gap-10 mt-12">
					<img src={card} alt="" />
					<img src={card} alt="" />
					<img src={card} alt="" />
				</div>
			</div>
			<div>
				<img src={group} alt="" />
				<div className="bg-[#23314a] relative img-background">
					<img
						src={overlay}
						alt=""
						className="w-full h-full object-cover absolute top-0 left-0 mix-blend-overlay "
					/>
					<div className="max-w-4xl z-50 px-20 pt-16 pb-10 ">
						<h3 className="text-[#f4f5f7] font-bold text-4xl ">
							Our certified professionals in various disciplines
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
