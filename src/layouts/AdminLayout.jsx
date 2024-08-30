import { Outlet } from "react-router-dom";
import AdminSideNav from "@/Components/admindashboard/AdminSideNav";

function AdminLayout() {
  return (
    <div className="relative">
      <AdminSideNav />
      <main className="ml-[249px] px-6">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
