import ImageHero from "../Components/ImageHero";
import HeroHeading from "../Components/MainContent/HeroHeading";
import img from "../assets/images/data-solution.jpg";
import arr from "../assets/images/arrow-down.png";

const DataSolution = () => {
	return (
		<>
			<ImageHero imageSrc={img}>
				<div>
					<div className="flex gap-8 items-center lg:mt-20 mt-32 ">
						<div className="w-36 h-px bg-white hidden lg:block" />
						<HeroHeading>Data Solutions</HeroHeading>
					</div>
					<div className="w-full h-px bg-white lg:hidden block mt-6 mb-8" />
					<ul className="*:text-[#f4f5f7] *:font-poppins *:font-light space-y-6 *:md:text-xl *:text-base  *:lg:text-xl max-w-[45.375rem] ml-auto mt-0 lg:mt-32 list-disc ">
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
			<section className="grid grid-cols-2 gap-28 px-20 py-24">
				<div>
					<h2 className="text-[#3A4C6C] text-[2.5rem] font-bold font-poppins">
						Data Management and Strategy Services
					</h2>
					<p className="text-[#667185] text-2xl font-poppins my-6">
						Unlock the Power of Your Data with Avenue Impact Consulting
					</p>
					<p className="text-xl text-[#667185] font-poppins text-justify">
						In today’s data-centric landscape, effective Data Management and
						Strategy are not just advantageous—they’re imperative. At Avenue
						Impact Consulting, we bring unparalleled expertise to help you
						navigate the complexities of data, ensuring it becomes a strategic
						asset for your organization.
					</p>
				</div>
				<div className="flex gap-4 align-baseline items-end">
					<p className="text-2xl font-poppins font-light text-[#667185]">
						Our Comprehensive Data Management and Strategy Offerings Include:
					</p>
					<img src={arr} alt="arrow down" className="w-9" />
				</div>
			</section>
			<section className="px-20 py-24 text-center">
				<h2 className="text-[2.5rem] text-[#3A4C6C] font-bold">
					Data Analytics Services
				</h2>
				<p className="text-2xl text-[#667185] mt-4 mb-8 font-poppins">
					Transforming Raw Data into Actionable Insights
				</p>
				<p className="text-[#667185] text-xl font-poppins">
					Avenue Impact Consulting is at the forefront of empowering
					organizations to leverage the full potential of their data through
					cutting-edge Data Analytics Services. From predictive modeling to
					advanced analytics, we deliver solutions that transform raw data into
					strategic insights, driving smarter business decisions.
				</p>
				<div className="flex gap-4 items-center max-w-[32.937rem] m-auto my-10">
					<p className="text-2xl font-poppins font-light text-[#667185]">
						Our Comprehensive Data Management and Strategy Offerings Include:
					</p>
					<img src={arr} alt="arrow down" className="w-9" />
				</div>
				<div className="grid grid-cols-4 divide-x divide-[#667185] *:px-10 text-left *:text-[#667185] ">
					<article>
						<p className=" text-2xl font-light font-poppins">
							Predictive Analytics
						</p>
						<p className="text-xl font-light font-poppins mt-4">
							Harnessing the power of data to make informed predictions about
							future trends
						</p>
					</article>
					<article>
						<p className=" text-2xl font-light font-poppins">
							Descriptive Analytics
						</p>
						<p className="text-xl font-light font-poppins mt-4">
							Gaining valuable insights into historical data patterns for
							strategic decision-making.
						</p>
					</article>
					<article>
						<p className=" text-2xl font-light font-poppins">
							Prescriptive Analytics
						</p>
						<p className="text-xl font-light font-poppins mt-4">
							Providing actionable recommendations based on data analysis.
						</p>
					</article>
					<article>
						<p className=" text-2xl font-light font-poppins">
							Data Visualization
						</p>
						<p className="text-xl font-light font-poppins mt-4">
							Creating compelling visualizations to make complex data easily
							understandable
						</p>
					</article>
				</div>
			</section>
			<section className="px-20 py-24 text-center">
				<h2 className="text-[2.5rem] text-[#3A4C6C] font-bold">
					Business Intelligence Services
				</h2>
				<p className="text-2xl text-[#667185] mt-4 mb-8 font-poppins">
					Empowering Decision-Making with Business Intelligence
				</p>
				<p className="text-[#667185] text-xl font-poppins">
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
				<div className="grid grid-cols-4 divide-x divide-[#667185] *:px-10 text-left *:text-[#667185] ">
					<article>
						<p className=" text-2xl font-light font-poppins">BI Dashboards</p>
						<p className="text-xl font-light font-poppins mt-4">
							Customized dashboards for real-time monitoring of key performance
							indicators
						</p>
					</article>
					<article>
						<p className=" text-2xl font-light font-poppins">
							Ad Hoc Reporting
						</p>
						<p className="text-xl font-light font-poppins mt-4">
							On-demand reporting capabilities for immediate insights
						</p>
					</article>
					<article>
						<p className=" text-2xl font-light font-poppins">
							Data Warehousing
						</p>
						<p className="text-xl font-light font-poppins mt-4">
							Centralized repositories for structured data, enabling efficient
							analysis
						</p>
					</article>
					<article>
						<p className=" text-2xl font-light font-poppins">Self-Service BI</p>
						<p className="text-xl font-light font-poppins mt-4">
							Empowering users with the tools to explore and analyze data
							independently
						</p>
					</article>
				</div>
			</section>
		</>
	);
};

export default DataSolution;
