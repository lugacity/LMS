import React, { useState } from "react";
import OtpInput from "../Otp";

const OtpComponent = ({ setOtp }) => {
  const handleChangeOtp = (newOtp) => {
    setOtp(newOtp);
  };
  return <OtpInput length={6} onChangeOtp={handleChangeOtp} />;
};

export default OtpComponent;
