import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const {user} = useSelector(state => state.user)
    if(user === null){
      return  <Navigate to="/login" replace></Navigate>
    }
  
     return children
  
};

export default ProtectedRoutes