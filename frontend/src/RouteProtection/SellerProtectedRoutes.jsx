import Loader from '@/components/Loader';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const SellerProtectedRoutes = ({children}) => {
    const {isLoading,seller} = useSelector(state => state.seller)
   
   if(isLoading){
    return <Loader></Loader>
   }
    if(seller === null){
      return  <Navigate to="/login" replace></Navigate>
    }
  
     return children
  
};

export default SellerProtectedRoutes