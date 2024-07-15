import React from "react";
import MainContent from "../Components/MainContent/MainContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from "./pages.module.css";
import { CourseCardPreview, renderStars } from "../Components/CourseCard";
import joinTeam from "../assets/images/join_team.png";
import CourseCard from "../Components/CourseCard";
import ImageOverlay from "../Components/ImageOverlay";
import {
	ProfessionalList,
	professionalItems,
	industriesItems,
} from "../Components/ProfessionalList";
import SocialMediaLinks, {
	socialMediaData,
} from "../Components/SocialMediaLink";
import { WhiteLogo } from "../Components/Logo";
import certificate from "../assets/images/certificate.png";
import professionalBG from "../assets/images/proffessional.png";
import AviNav from "../Components/avi/AviNav";
import { ScrollRestoration } from "react-router-dom";

const PreviewCourse = ({ features }) => {
	// Ensure features is defined, falling back to default courseFeatures
	const courseFeatures = features || [
		"18 hours on-demand video",
		"Access on mobile and TV",
		"Full lifetime access",
		"Certificate of completion",
	];

	return (
		<>
			<ScrollRestoration />

			<AviNav />

			{/* Search for more courses */}
			<section>
				<div className={styles.checkout_courses}>
					<div className="lg:py-4 lg:px-14 pt-10 px-4">
						<div className={styles.checkoutCoursesFlex}>
							<div className={styles.checkoutCourses1}>
								<p className="text-[#23314A] text-2xl font-normal">
									Search for more courses
								</p>
							</div>
							<div className={styles.checkoutCourses2}>
								<input
									type="text"
									className={styles.inputField}
									placeholder="Search courses..."
								/>
							</div>
						</div>

						<div className="bg-[#C7D7F4] lg:block hidden w-full h-[1px] mt-2" />

						{/* Project Consultant */}
						<div className={styles.project_consult}>
							<div className={`${styles.project_consultFlex} px-2 `}>
								<div className={`${styles.project_consult1} lg:w-2/4`}>
									<p className="text-[#23314A] sm:text-2xl font-normal">
										Project Consultant Training Programme (Bundle)
									</p>

									<div className="text-lg flex items-center py-2">
										<p>4.3</p>
										<p>{renderStars()}</p>
										<p>43,55</p>
									</div>

									<div>
										<p className="text-2xl py-2">This course Includes:</p>
										<ul className="list-none p-0 m-0">
											{courseFeatures.map((feature, index) => (
												<li key={index} className=" text-gray-700 mb-2">
													<FontAwesomeIcon
														icon={faCheckCircle}
														className=" mr-2"
													/>
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className={styles.project_consult1}>
									<CourseCardPreview
										imgSrc={joinTeam}
										previewButtonText="Enroll now"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* overview */}
				<div className="lg:py-4 lg:px-14 pt-10 px-4">
					<div className={styles.overviewFlex}>
						<div
							className={`${styles.overviewCourses1} text-[#667185] text-justify`}>
							<p className=" text-2xl font-normal capitalize">Overview</p>

							<div className="bg-[#C7D7F4] lg:block hidden w-full h-[1px] mt-2" />

							<p className="pt-2">
								The 3.5 Months Project Consultant Training Programme (Bundle) is
								a comprehensive and intensive course designed for aspiring
								project consultants who aim to excel in the dynamic field of
								project management. Scheduled to commence in May 2024, this
								training programme equips participants with the essential
								skills, knowledge, and hands-on experience necessary to thrive
								as project consultants in various industries.
							</p>
						</div>

						<div className={`${styles.overviewCourses1} text-[#667185]`}>
							<p className=" text-2xl font-normal">Tools and Technologies:</p>

							<div className="bg-[#C7D7F4] lg:block hidden w-full h-[1px] mt-2" />

							<p className="pt-2">
								<FontAwesomeIcon className="mr-2" icon={faCheckCircle} />
								Mastery of project management software (e.g., MS Project, Jira,
								Asana)
							</p>

							<p className="pt-2">
								<FontAwesomeIcon className="mr-2" icon={faCheckCircle} />
								Data analysis and reporting tools
							</p>

							<p className="pt-2">
								<FontAwesomeIcon className="mr-2" icon={faCheckCircle} />
								Emerging technologies in project management
							</p>
						</div>
					</div>

					{/* Benefit & Programme Highlights: */}

					<div className={`${styles.overviewFlex} py-8`}>
						<div
							className={`${styles.overviewCourses1} text-[#667185] text-justify`}>
							<p className="text-2xl font-normal capitalize">Benefit</p>

							<div className="bg-[#C7D7F4] lg:block hidden w-full h-[1px] mt-2" />

							<p className="pt-2">
								<FontAwesomeIcon className="mr-2" icon={faCheckCircle} />
								Career Advancement: Open doors to new career opportunities and
								promotions.
							</p>

							<p className="pt-2">
								<FontAwesomeIcon className="mr-2" icon={faCheckCircle} />
								Industry Recognition: Gain credibility and recognition as a
								certified project consultant.
							</p>

							<p className="pt-2">
								<FontAwesomeIcon className="mr-2" icon={faCheckCircle} />
								Networking Opportunities: Connect with peers, mentors, and
								industry experts.
							</p>

							<p className="pt-2">
								<FontAwesomeIcon className="mr-2" icon={faCheckCircle} />
								Lifetime Access: Continue to access course materials and updates
								even after the programme ends.
							</p>
						</div>

						{/* Programme Highlight */}

						<div className={`${styles.overviewCourses1} text-[#667185]`}>
							<p className="text-2xl font-normal capitalize">
								Programme Highlights:
							</p>

							<div className="bg-[#C7D7F4] lg:block hidden w-full h-[1px] mt-2" />

							<div className="mt-4">
								<div className="flex items-start">
									<FontAwesomeIcon className="mr-2 mt-1" icon={faCheckCircle} />
									<div className="flex-1">
										<p className="font-semibold">Format:</p>
										<p>Blended learning with online and in-person sessions</p>
									</div>
								</div>

								<div className="flex items-start mt-2">
									<FontAwesomeIcon className="mr-2 mt-1" icon={faCheckCircle} />
									<div className="flex-1">
										<p className="font-semibold">Modules:</p>
										<p>
											Comprehensive coverage of project management principles,
											methodologies, and tools
										</p>
									</div>
								</div>

								<div className="flex items-start mt-2">
									<FontAwesomeIcon className="mr-2 mt-1" icon={faCheckCircle} />
									<div className="flex-1">
										<p className="font-semibold">Expert Instructors:</p>
										<p>
											Learn from industry-leading professionals and experienced
											consultants
										</p>
									</div>
								</div>

								<div className="flex items-start mt-2">
									<FontAwesomeIcon className="mr-2 mt-1" icon={faCheckCircle} />
									<div className="flex-1">
										<p className="font-semibold">Practical Experience:</p>
										<p>
											Real-world projects and case studies to apply learned
											concepts
										</p>
									</div>
								</div>

								<div className="flex items-start mt-2">
									<FontAwesomeIcon className="mr-2 mt-1" icon={faCheckCircle} />
									<div className="flex-1">
										<p className="font-semibold">Certification:</p>
										<p>
											Earn a recognized certification upon successful completion
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Checkout our top courses */}
				<div className={styles.checkout_courses}>
					<div className="lg:py-0 lg:px-14 pt-2 px-8">
						<div
							className={`${styles.career_content} py-8 text-[#667185] lg:w-1/2 w-full`}>
							<p>
								{" "}
								Discover our most popular courses, carefully curated to enhance
								your skills and advance your career. Join thousands of learners
								who have already taken the next step with Avenue Impact
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
				</div>
			</section>
		</>
	);
};

export default PreviewCourse;
