import { Outlet } from 'react-router-dom';
import SellerHeader from './SellerHeader'
import SellerSidebar from './SellerSidebar';
const SellerDashboard = () => {
    return (
        <div>
        <SellerHeader />
        <div className="flex items-start justify-start w-full">
          <div className="w-[100px] md:w-[300px]">
            <SellerSidebar active={1} />
          </div>

         <div className='px-4 w-full'>
         <Outlet></Outlet>
         </div>
        </div>
      </div>
    );
};

export default SellerDashboard;