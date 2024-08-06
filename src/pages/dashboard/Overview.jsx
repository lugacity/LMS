import React from "react";

const Overview = () => {
  return (
    <section className="mt-2 bg-white px-10 py-8">
      <h3 className="mb-5 text-2xl font-medium capitalize text-black">
        Project Consultant Training Programme (Bundle)
      </h3>
      <p className="mb-10 mt-5 text-justify text-xl font-light leading-[30px] text-tertiary-color-700">
        The 3.5 Months Project Consultant Training Programme (Bundle) is a
        comprehensive and intensive course designed for aspiring project
        consultants who aim to excel in the dynamic field of project management.
        Scheduled to commence in May 2024, this training programme equips
        participants with the essential skills, knowledge, and hands-on
        experience necessary to thrive as project consultants in various
        industries.
      </p>
      <h3 className="mb-5 text-2xl font-medium capitalize text-black">
        certification
      </h3>
      <p className="mb-6 mt-5 text-justify text-xl font-light leading-[30px] text-tertiary-color-700">
        Get the certificate by completing the entire course
      </p>

      <button
        type="button"
        className="bg-btn-bg/25 rounded-md px-4 py-[10px] capitalize text-tertiary-color-900"
      >
        {" "}
        download certificate
      </button>
    </section>
  );
};

export default Overview;
