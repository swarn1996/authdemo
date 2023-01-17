import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLogin } from '../actions/authSlice';



function PrivateRoute({ children }) {
    const isAuthenticated = useSelector(isLogin);
    
    if (!isAuthenticated) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/auth"  />
    }

    // authorized so return child components
    return children;
}

export default PrivateRoute;