import RegInit from "../app/RegInit";

const PrivateRoute = ({ children, accesGranted }) => {
    return accesGranted ? children  : <RegInit />;
}

export default PrivateRoute