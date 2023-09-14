import { useSelector } from "react-redux";
import { selectCurrentToken } from "./slices/authSlice.js";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" stage={{ from: location }} replace />
  );
};

export default RequireAuth;
