import { useState } from "react";
import { Outlet } from "react-router-dom";

import AviNav from "@/Components/avi/AviNav";

const AuthLayout = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className="relative">
      <AviNav showNav={showNav} setShowNav={setShowNav} />
      {!showNav && (
        <div className="fixed left-0 top-0 z-10 flex h-screen w-full items-center justify-center bg-black/25 md:hidden" />
      )}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
