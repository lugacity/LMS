import ImageHero from "../Components/ImageHero";
import HeroHeading from "../Components/MainContent/HeroHeading";
import img from "../assets/images/data-solution.jpg";
import arr from "../assets/images/arrow-down.png";
import Container from "../Components/Container";
import { solutions, strategies } from "../assets/lib/data";
import Slide from "../Components/data-solution/Slide";
import Swiper from "../Components/data-solution/Swiper";
import Accordion from "../Components/data-solution/Accordion";
import VerticalAccordion from "../Components/veritical/VerticalAccordion";

const DataSolution = () => {
	return (
		<>
			<ImageHero imageSrc={img}>
				<div>
					<div className="flex gap-8 items-center lg:mt-16 mt-32 ">
						<div className="w-36 h-px bg-white hidden lg:block" />
						<HeroHeading>Data Solutions</HeroHeading>
					</div>
					<div className="w-full h-px bg-white lg:hidden block mt-4 mb-8" />
					<ul className="*:text-[#f4f5f7] *:font-poppins *:font-light space-y-3 *:md:text-xl *:text-base  *:lg:text-xl *:ml-6 max-w-[45.375rem] ml-auto mt-0 lg:mt-32 list-disc ">
						<li>
							Discover how our tailored Data Management solutions can turn your
							data challenges into opportunities for growth and innovation
						</li>
						<li>
							Explore how our Data Analytics services can propel your
							organization forward
						</li>
						<li>
							Discover the transformative potential of Business Intelligence.
						</li>
					</ul>
				</div>
			</ImageHero>
			<Container className="grid md:grid-cols-2 gap-16 lg:gap-28">
				<div>
					<h2 className="text-[#3A4C6C] text-2xl md:text-[2.5rem] font-light font-poppins leading-normal">
						Data Management and Strategy Services
					</h2>
					<p className="text-[#667185] md:text-2xl font-poppins my-6">
						Unlock the Power of Your Data with Avenue Impact Consulting
					</p>
					<p className="text-base md:text-xl text-[#667185] font-poppins text-justify">
						In today’s data-centric landscape, effective Data Management and
						Strategy are not just advantageous—they’re imperative. At Avenue
						Impact Consulting, we bring unparalleled expertise to help you
						navigate the complexities of data, ensuring it becomes a strategic
						asset for your organization.
					</p>
				</div>
				<div className="flex gap-4 md:gap-0 lg:gap-4 align-baseline items-end">
					<p className="md:text-2xl font-poppins font-light text-[#667185]">
						Our Comprehensive Data Management and Strategy Offerings Include:
					</p>
					<img src={arr} alt="arrow down" className="w-9" />
				</div>
			</Container>
			<Accordion />
			{/* <VerticalAccordion /> */}
			<Container className=" text-center">
				<h2 className="text-2xl md:text-[2.5rem] text-[#3A4C6C] font-light">
					Data Analytics Services
				</h2>
				<p className="md:text-2xl text-[#667185] mt-4 mb-8 font-poppins">
					Transforming Raw Data into Actionable Insights
				</p>
				<p className="text-[#667185] md:text-xl font-poppins">
					Avenue Impact Consulting is at the forefront of empowering
					organizations to leverage the full potential of their data through
					cutting-edge Data Analytics Services. From predictive modeling to
					advanced analytics, we deliver solutions that transform raw data into
					strategic insights, driving smarter business decisions.
				</p>
				<div className="flex gap-4 items-center max-w-[32.937rem] m-auto my-10">
					<p className="md:text-2xl font-poppins font-light text-[#667185]">
						Our Comprehensive Data Management and Strategy Offerings Include:
					</p>
					<img src={arr} alt="arrow down" className="w-9" />
				</div>
				<div className="  grid-cols-4 divide-x divide-[#667185] *:px-10 text-left *:text-[#667185] hidden lg:grid ">
					{solutions.map((solution) => (
						<Slide
							heading={solution.heading}
							text={solution.paragraph}
							key={solution.heading}
						/>
					))}
				</div>
				<div className="lg:hidden">
					<Swiper data={solutions} />
				</div>
			</Container>
			<Container className=" text-center">
				<h2 className="text-2xl md:text-[2.5rem] text-[#3A4C6C] font-light">
					Business Intelligence Services
				</h2>
				<p className="md:text-2xl text-[#667185] mt-4 mb-8 font-poppins">
					Empowering Decision-Making with Business Intelligence
				</p>
				<p className="text-[#667185] md:text-xl font-poppins">
					In the age of information, Business Intelligence (BI) is the key to
					staying ahead. Avenue Impact Consulting’s BI services are designed to
					transform data into actionable intelligence, empowering organizations
					to make data-driven decisions with confidence.
				</p>
				<div className="flex gap-4 items-center max-w-2xl m-auto my-10">
					<p className="text-2xl font-poppins font-light text-[#667185]">
						Our Business Intelligence Solutions Encompass
					</p>
					<img src={arr} alt="arrow down" className="w-9" />
				</div>
				<div className="hidden lg:grid grid-cols-4 divide-x divide-[#667185] *:px-10 text-left *:text-[#667185] ">
					{strategies.map((strategy) => (
						<Slide
							heading={strategy.heading}
							text={strategy.paragraph}
							key={strategy.heading}
						/>
					))}
				</div>
				<div className="lg:hidden">
					<Swiper data={strategies} />
				</div>
			</Container>
		</>
	);
};

export default DataSolution;
