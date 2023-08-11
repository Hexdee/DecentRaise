/* eslint-disable react/prop-types */
import Navbar from "../ui/navbar";

const AuthLayout = ({ children }) => (
  <div className="h-[100vh]">
    <Navbar />
    <div>{children}</div>
  </div>
);

export default AuthLayout;
