import React from "react";
import MainContent from "../Components/MainContent/MainContent";
import AVIbg from "../assets/images/live_coaching.png";
import styles from "./pages.module.css";



const Contact = () => {
	return <>
	
			<MainContent />


            <section>
				{/* AVI IMAGE */}
                <div className={`${styles.AVI_img} py-14 `}>
                    <img src={AVIbg} alt="" />
                </div>


                {/* Checkout our top courses */}
                <div className={styles.checkout_courses}>
					<div className="lg:pt-16 lg:px-14 lg:px-10 pt-10 px-8">
						<div className={styles.welcome_avenue}>
							<h2 className="text-[#23314A] text-3xl font-bold capitalize">
								Checkout our top courses
							</h2>
							<div className="bg-[#C7D7F4] w-full h-[1px] mt-2" />
						</div>

						<div
							className={`${styles.career_mentoring_flex} py-8 text-[#667185] `}>
							<div className={styles.career_content}>
								<p>
									With years of experience and a deep understanding of the job
									market, our team of experts provides personalised career
									mentoring to help individuals achieve their professional
									goals. To access our expertise, individuals can choose from
									the following options:
								</p>
							</div>

							<div className={styles.career_content}>
								{/* <BulletList /> */}
							</div>
						</div>
					</div>
				</div>

			</section>
	</>;
};

export default Contact;
