/* eslint-disable react/prop-types */
import Navbar from "../ui/navbar";


const AuthLayout = ({ children }) => (
    <div>
        <Navbar />
        <div>{children}</div>
    </div>
);

export default AuthLayout;