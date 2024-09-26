import Cookies from "js-cookie";

export const BASE_URL = import.meta.env.VITE_ADMIN_BASE_URL;

export const ADMIN_TOKEN = Cookies.get("adminToken");

