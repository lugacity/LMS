import { useSearchParams } from "react-router-dom";

const Overview = ({ data }) => {
  const [queryString] = useSearchParams();

  console.log(data);

  const title = queryString?.get("title") ?? "NO title for this course";

  return (
    <section className="bg-white pb-6 pt-0 lg:mt-2 lg:px-10 lg:py-8">
      <h3 className="mb-3 text-xl font-light capitalize text-black lg:mb-5 lg:text-2xl lg:font-medium">
        {title}
      </h3>
      <p className="mb-6 text-justify font-[275] leading-6 text-tertiary-color-700 md:mt-5 md:text-lg md:font-light lg:mb-10 lg:text-xl lg:leading-[30px]">
        {data?.data?.data?.overview}
      </p>
      <h3 className="mb-4 text-xl font-medium capitalize text-black md:mb-5 lg:text-2xl">
        certification
      </h3>
      <p className="mb-4 text-justify font-[275] leading-[30px] text-tertiary-color-700 md:mb-6 md:text-xl lg:font-light">
        Get the certificate by completing the entire course
      </p>

      <button
        type="button"
        className="rounded-md bg-btn-bg/25 px-4 py-[10px] capitalize text-tertiary-color-900"
      >
        {" "}
        download certificate
      </button>
    </section>
  );
};

export default Overview;
