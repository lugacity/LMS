import React from "react";
// import MainContent from "../Components/MainContent/MainContent";
import AVIbg from "../assets/images/live_coaching.png";
import styles from "./pages.module.css";
import CourseCard from "../Components/CourseCard";
import joinTeam from "../assets/images/join_team.png";
import teamDiscussion from "../assets/images/team_discussion.png";
import certificate from "../assets/images/certificate.png";
import professionalBG from "../assets/images/proffessional.png";
import ImageOverlay from "../Components/ImageOverlay";
import { WhiteLogo } from "../Components/Logo";
import {
	ProfessionalList,
	professionalItems,
	industriesItems,
} from "../Components/ProfessionalList";
import SocialMediaLinks, {
	socialMediaData,
} from "../Components/SocialMediaLink";
import ColorHero from "../Components/ColorHero";
import AviNav from "../Components/avi/AviNav";
// import img from "../assets/images/data-solution.jpg";

const AVI = () => {
	return (
		<>
			<AviNav />
			<ColorHero />

			<section>
				{/* AVI IMAGE */}
				<div className={`${styles.AVI_img} py-14 `}>
					<img src={AVIbg} alt="" />
				</div>

				{/* Checkout our top courses */}
				<div className={styles.checkout_courses}>
					<div className="lg:py-4 lg:px-14 pt-10 px-8">
						<div className={styles.checkoutCoursesFlex}>
							<div className={styles.checkoutCourses1}>
								<p className="text-[#23314A] text-2xl font-normal capitalize">
									Checkout our top courses
								</p>
							</div>
							<div className={styles.checkoutCourses2}>
								<span className={styles.searchLabel}>Search</span>
								<input
									type="text"
									className={styles.inputField}
									placeholder="Search courses..."
								/>
							</div>
						</div>

						<div className="bg-[#C7D7F4] w-full h-[1px] mt-2" />

						<div
							className={`${styles.career_content} py-8 text-[#667185] lg:w-1/2 w-full`}>
							<p>
								{" "}
								Discover our most popular courses, carefully curated to enhance
								your skills and advance your career. Join thousands of learners
								who have already taken the next step with Avenue Impact.
							</p>
						</div>

						{/* Preview this Course */}
						<div className={styles.previewCoursesFlex}>
							<CourseCard
								imgSrc={joinTeam}
								altText="joinTeam"
								title={
									<>
										{" "}
										Project Consultant <br /> Training Programme (Bundle)
									</>
								}
								rating="4.3"
								numRatings="45,345"
								previewButtonText="Preview this course"
							/>

							<CourseCard
								imgSrc={joinTeam}
								altText="joinTeam"
								title={
									<>
										{" "}
										Project Consultant <br /> Training Programme (Bundle)
									</>
								}
								rating="4.3"
								numRatings="45,345"
								previewButtonText="Preview this course"
							/>

							<CourseCard
								imgSrc={joinTeam}
								altText="joinTeam"
								title={
									<>
										{" "}
										Project Consultant <br /> Training Programme (Bundle)
									</>
								}
								rating="4.3"
								numRatings="45,345"
								previewButtonText="Preview this course"
							/>

							<CourseCard
								imgSrc={joinTeam}
								altText="joinTeam"
								title={
									<>
										{" "}
										Project Consultant <br /> Training Programme (Bundle)
									</>
								}
								rating="4.3"
								numRatings="45,345"
								previewButtonText="Preview this course"
							/>

							<CourseCard
								imgSrc={joinTeam}
								altText="joinTeam"
								title={
									<>
										{" "}
										Project Consultant <br /> Training Programme (Bundle)
									</>
								}
								rating="4.3"
								numRatings="45,345"
								previewButtonText="Preview this course"
							/>

							<CourseCard
								imgSrc={joinTeam}
								altText="joinTeam"
								title={
									<>
										{" "}
										Project Consultant <br /> Training Programme (Bundle)
									</>
								}
								rating="4.3"
								numRatings="45,345"
								previewButtonText="Preview this course"
							/>
						</div>

						{/* Enhance your team's skills */}
						<div className={`${styles.team_skills} py-24`}>
							<div className={styles.team_skills_img}>
								<img
									className="w-full sm:w-full md:w-full lg:w-3/4"
									src={teamDiscussion}
									alt="teamDiscussion"
								/>
							</div>

							<div className={styles.team_skills_content}>
								<h3 className="text-[#23314A] text-2xl font-normal capitalize">
									Enhance your team's skills <br /> with Avenue Impact Academy.
								</h3>
								<p className="text-justify">
									{" "}
									Gain unlimited access to over 25,000 top courses anytime,
									anywhere. Discover our international course collection
									available in 14 languages and earn premier certifications in
									technology and business.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Certificate */}
				<div className={styles.certificate_courses}>
					<div className="lg:py-4 lg:px-14 pt-10 px-8">
						<div className={styles.certificateCourses1}>
							<p className="text-[#23314A] text-2xl font-normal capitalize">
								Certifications
							</p>

							<div className="bg-[#C7D7F4] w-full h-[1px] mt-2" />
							<p className="text-[#667185] py-2 ">
								Professional Training + Life Project Experience (Online)
							</p>
						</div>

						{/* Preview this Course */}
						<div className={`${styles.previewCoursesFlex} py-8`}>
							<div>
								<img src={certificate} alt="" />
							</div>
							<div>
								<img src={certificate} alt="" />
							</div>
							<div>
								<img src={certificate} alt="" />
							</div>
						</div>
					</div>
				</div>

				{/* Our Certified Professionals */}
				<div className={styles.certified_pro}>
					<div className={styles.certified_img}>
						<img src={professionalBG} alt="" />
					</div>

					<ImageOverlay>
						<div
							className={`${styles.certified_content} lg:py-8 lg:px-14 pt-10 px-8`}>
							<div className="lg:flex justify-between lg:text-lg text-white font-extralight">
								<ProfessionalList
									title="Our certified professionals in various disciplines"
									items={professionalItems}
									className="lg:pt-0 pt-6"
								/>
								<ProfessionalList
									title="Industries we serve"
									items={industriesItems}
									className="lg:pt-0 pt-6"
								/>
							</div>
						</div>

						<div className="lg:flex lg:items-center lg:justify-between text-white lg:py-8 lg:px-14 py-10 px-8">
							<div>
								<SocialMediaLinks data={socialMediaData} />
							</div>

							<div className="py-3">
								<small className="lg:text-lg ">
									© 2024 Avenue Impact Limited. All rights reserved
								</small>
							</div>

							<WhiteLogo />
						</div>
					</ImageOverlay>
				</div>
			</section>
		</>
	);
};

export default AVI;
