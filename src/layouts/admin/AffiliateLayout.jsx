import { Link, Outlet, useLocation } from "react-router-dom";

import AdminNav from "@/Components/admindashboard/AdminNav";
import { cn } from "@/lib/utils";

const AffiliateLayout = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <AdminNav>
        <ul className="flex items-center gap-4 *:capitalize">
          <li
            className={cn(
              "after:contents-[''] relative h-full cursor-pointer py-4 text-sm font-medium capitalize text-[#344054] transition-colors duration-150 *:capitalize after:absolute after:-bottom-[14px] after:left-0 after:m-auto after:h-[2px] after:w-0 after:bg-primary-color-600 after:transition-all after:duration-150 hover:text-primary-color-600 hover:after:w-full",
              pathname==="/admin/affiliate"
                ? "text-primary-color-600 after:w-full"
                : "",
            )}
          >
            <Link to={"/admin/affiliate"}>Referrals</Link>
          </li>

          
          <li
            className={cn(
              "after:contents-[''] relative h-full cursor-pointer py-4 text-sm font-medium capitalize text-[#344054] transition-colors duration-150 *:capitalize after:absolute after:-bottom-[14px] after:left-0 after:m-auto after:h-[2px] after:w-0 after:bg-primary-color-600 after:transition-all after:duration-150 hover:text-primary-color-600 hover:after:w-full",
              pathname==="/admin/affiliate/withdrawal-request"
                ? "text-primary-color-600 after:w-full"
                : "",
            )}
          >
            <Link to={"/admin/affiliate/withdrawal-request"}>
              Withdrawal requests
            </Link>
          </li>
        </ul>
      </AdminNav>
      <Outlet />
    </div>
  );
};

export default AffiliateLayout;
