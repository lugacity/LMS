import OtpComponent from "@/Components/about/OtpComponent";
import BorderCard from "@/Components/BorderCard";
import { CommonButton } from "@/Components/ui/button";

const ConfirmEmail = ({ setConfirm, setModal, setSuccess }) => {
  return (
    <BorderCard className="w-full max-w-[731px] rounded-xl bg-white py-11 text-center">
      <div className="px-4">
        <p className="text-xl font-semibold text-[#23314A]">
          Confirm your email address
        </p>
        <p className="mx-auto mb-6 mt-3 max-w-[284px] text-center text-sm leading-[18px] text-[#98A2B3]">
          Please enter code we sent now to aviplatform@gmail.com{" "}
          <span className="text-primary-color-600">Edit</span>
        </p>
        <div className="mx-auto w-fit">
          <OtpComponent />
        </div>
        <p className="mb-[31px] mt-6 text-sm">
          <span className="text-[#645D5D]"> Didn’t receive a code?</span>{" "}
          <span className="font-medium text-primary-color-600">Resend</span>
        </p>
      </div>
      <CommonButton
        className="w-full bg-primary-color-600"
        onClick={() => {
          setConfirm((prev) => !prev);
          setModal((prev) => !prev);
          setSuccess("success");
        }}
      >
        Confirm
      </CommonButton>
    </BorderCard>
  );
};

export default ConfirmEmail;
