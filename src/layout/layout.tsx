import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RouterLinks } from "../const/RouterLinks";

const Layout: React.FC = () => {
	const token = localStorage.getItem("token");
	const role = localStorage.getItem("role");

	if (!token) {
		return <Navigate to={RouterLinks.LOGIN} />;
	}

	if (role === "U") return <Navigate to={RouterLinks.ORDER_PAGE} />;
	if (role === "M") return <Navigate to={RouterLinks.CHEF_PAGE} />;

	return (
		<div>
			<Outlet />
		</div>
	);
};

export default Layout;
