import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const {user} = useSelector(state => state.user)
    if(user === null){
        <Navigate to="/login"></Navigate>
    }
    else{
     return children
    }
};

export default ProtectedRoutes