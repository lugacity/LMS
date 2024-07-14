import Grid2Layout from "../Components/Grid2Layout";
import H3 from "../Components/H3";
import ImageHero from "../Components/ImageHero";
import HeroHeading from "../Components/MainContent/HeroHeading";
import P from "../Components/P";
import img from "../assets/images/avenue-hero-img.png";
import mission from "../assets/images/mission.png";
import whatWeDo1 from "../assets/images/what-wedo1.png";
import whatWeDo2 from "../assets/images/what-wedo2.png";
import impact from "../assets/images/impact.png";
import involve from "../assets/images/involve.png";
import Container from "../Components/Container";

const AvenueImpactDevelopment = () => {
	return (
		<>
			<ImageHero imageSrc={img}>
				<div className="flex gap-8 items-center lg:mt-16  mt-32 ">
					<div className="w-36 h-px bg-white hidden lg:block" />
					<HeroHeading>
						Avenue Impact <br />
						Development CIC
					</HeroHeading>
				</div>
				<div className="w-full h-px bg-white lg:hidden block mt-6 mb-8" />
				<p className="text-white md:text-xl text-base  lg:text-2xl max-w-[45.375rem] ml-auto mt-0 lg:mt-20 font-light font-poppins ">
					Avenue Impact Development CIC promotes good change and inspires young
					people to realise their greatest potential. As Avenue Impact{" "}
					{"Limited's"}
					social enterprise arm, we focus on youth empowerment initiatives in
					the UK and Nigeria to create opportunities for growth, development,
					and success.
				</p>
			</ImageHero>
			<Container>
				<Grid2Layout className={" gap-10 lg:gap-32 items-center"}>
					<div className="md:-order-1 order-5">
						<img
							src={mission}
							alt="two ladies sitting round a table"
							className="w-9/12 block mx-auto md:w-full lg:max-w-lg "
						/>
					</div>

					<div className="order-1 md:order-5">
						<H3 className={"mb-6"}>Our Mission</H3>
						<P className={"text-justify"}>
							We aim to empower young people via education, training, mentoring,
							and community involvement. We think every young person deserves
							the opportunity to grow and make meaningful societal
							contributions. We hope to inspire future leaders and change-makers
							by giving them the tools, resources, and support they need to
							realize their full potential.
						</P>
					</div>
				</Grid2Layout>
			</Container>
			<Container>
				<H3 className={" mb-6"}> what we do</H3>

				<Grid2Layout className={"gap-y-6 md:gap-10 lg:gap-[62px]"}>
					<article className=" md:space-y-6 lg:space-y-8 space-y-4">
						<img
							src={whatWeDo1}
							alt=" two and two women sitting round a table doing a meeting"
						/>
						<P className={"text-justify"}>
							Education and Training Programmes: We provide a variety of
							educational and training programmes to help young people develop
							the skills, knowledge, and confidence they need to succeed in
							their personal and professional lives. We offer learning and
							development opportunities ranging from vocational training to
							entrepreneurship courses.
						</P>
						<P className={"text-justify"}>
							Youth Empowerment Projects: We initiate and support initiatives
							that enable young people to positively impact their communities.
							We endeavour to elevate young {"people's"} voices and
							contributions through youth-led initiatives, civic engagement, or
							social change advocacy.
						</P>
					</article>
					<article className="space-y-8">
						<P className={"text-justify"}>
							Mentorship and Coaching: Our mentorship and coaching programmes
							connect young people with experienced professionals who can offer
							guidance, advice, and support. Through individual mentoring
							sessions and group coaching activities, we assist young people in
							setting objectives, overcoming problems, and navigating their
							career pathways.
						</P>
						<P className={"text-justify"}>
							Community Engagement Initiatives: We actively engage with local
							communities to address social concerns, promote inclusiveness, and
							instil a feeling of belonging in young people. Our community
							projects and activities encourage cooperation, networking, and
							collective action.
						</P>
						<img src={whatWeDo2} alt="" />
					</article>
				</Grid2Layout>
			</Container>
			<Container>
				<Grid2Layout className={"gap-y-6 md:gap-10 lg:gap-32 items-center"}>
					<section className="space-y-6">
						<H3>Our Impact</H3>
						<P>
							At Avenue Impact Development CIC, we define success as the impact
							we have on the lives of young people. Through our programmes and
							efforts, we have:
						</P>

						<ul className="list-disc ml-6 marker:text-[#667185]">
							<li>
								<P>
									Encouraged hundreds of young people to pursue their
									aspirations and achieve their goals
								</P>
							</li>
							<li>
								<P>
									Underprivileged adolescents gained access to education,
									training, and mentorship opportunities.
								</P>
							</li>
							<li>
								<P>
									Supported youth-led initiatives and community projects to
									solve social concerns.
								</P>
							</li>
							<li>
								<P>
									Developed a culture of cooperation, invention, and resilience
									among young people.
								</P>
							</li>
							<li>
								<P>
									Inspired young leaders are generating positive change in their
									communities.
								</P>
							</li>
						</ul>
					</section>
					<div>
						<img
							src={impact}
							alt=" an old man and three ladies sitting round a table"
							className="w-9/12 block mx-auto md:w-full lg:max-w-lg"
						/>
					</div>
				</Grid2Layout>
			</Container>
			<Container>
				<Grid2Layout className={"gap-y-6 md:gap-10 lg:gap-32 items-center"}>
					<div className="md:-order-1 order-5">
						<img
							src={involve}
							alt=" an old man and three ladies sitting round a table"
							className="w-9/12 block mx-auto md:w-full lg:max-w-lg "
						/>
					</div>
					<section className="space-y-6 order-1 md:order-5">
						<H3>Get involved</H3>
						<P>
							Join us in our mission to empower youngsters and create a more
							promising future for the next generation. {"Here's"} how to get
							involved:
						</P>

						<ul className="list-disc ml-6 marker:text-[#667185]">
							<li>
								<P>
									Volunteer: Consider becoming a mentor, coach, or volunteer for
									one of our programmes and initiatives.
								</P>
							</li>
							<li>
								<P>
									Donate: Please support our efforts by donating or supporting a
									young {"person's"} education or training.
								</P>
							</li>
							<li>
								<P>
									Partner: Work with us on projects, events, or initiatives that
									support our mission and values.
								</P>
							</li>
							<li>
								<P>
									Spread the Word: Please share our message to help raise
									awareness about the need of youth empowerment.
								</P>
							</li>
							<li>
								<P>
									Together, we can make a difference and create a world in which
									every young person has a chance to succeed. Join us on our
									path of empowerment and transformation!
								</P>
							</li>
						</ul>
					</section>
				</Grid2Layout>
			</Container>
		</>
	);
};

export default AvenueImpactDevelopment;
