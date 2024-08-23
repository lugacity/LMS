import { createContext, useState } from "react";

export const CredentialContext = createContext({});

const CredentialsProvider = ({ children }) => {
  const [otp, setOtp] = useState("");
  const [info, setInfo] = useState({ email: "", otp: "" });
  return (
    <CredentialContext.Provider value={{ otp, setOtp, info, setInfo }}>
      {children}
    </CredentialContext.Provider>
  );
};

export default CredentialsProvider;
