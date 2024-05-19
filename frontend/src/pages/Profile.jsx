import SecondHeader from "@/components/SecondHeader";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import commonStyles from "@/styles/commonStyles";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <>
    <SecondHeader></SecondHeader>

    <div className={`${commonStyles.section}`}>

      <div className="flex gap-3">
       <div className="w-1/4">
       <ProfileSidebar></ProfileSidebar>
       </div>

        <div className="w-full py-8">
            <Outlet></Outlet>
        </div>
      </div>

    </div>
    </>
  );
};

export default Profile;
