import commonStyles from '@/styles/commonStyles';
import { server } from '../../../Constant';
import { useState } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Account = () => {
    const {user} = useSelector(state => state.user)
  
    const [profileInfo,setProfileInfo] = useState({
        name : user?.name,
        email : user?.email,
        avatar : user?.avatar,
        phoneNumber : user?.phoneNumber,
    })

    const handleImage =()=>{
    }
  
    const handleSubmit =()=>{

    }


    return (
        <div className='mx-auto md:ms-40'>
        <div className="flex justify-start w-full h-fit mx-auto my-5">
          <div className="relative">
            <img
              src={`http://localhost:8000/uploaded-images/${profileInfo.avatar}`}
              className="w-[150px] h-[150px]  object-cover border-[3px] border-[#3ad132]"
              alt="Profile"
            />
            <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
              <input
                type="file"
                id="image"
                className="hidden w-full"
                onChange={handleImage}
              />
              <label htmlFor="image" className="flex items-center justify-center w-full h-full">
                <AiOutlineCamera />
              </label>
            </div>
          </div>
        </div>
  
        <div className="w-full  flex justify-start mt-10">
          <form onSubmit={handleSubmit} className="w-full max-w-[800px]">
            <div className="w-full flex flex-col md:flex-row pb-3">
              <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-4 md:mb-0">
                <label className="block pb-2">Full Name</label>
                <input
                  type="text"
                  className={`${commonStyles.input} !w-full !h-[50px]`}
                  required
                  value={profileInfo?.name}
                  onChange={(e) => setProfileInfo({ ...profileInfo, name: e.target.value })}
                />
              </div>
              <div className="w-full md:w-1/2 pl-0 md:pl-2 mb-4 md:mb-0">
                <label className="block pb-2">Email Address</label>
                <input
                  type="text"
                  className={`${commonStyles.input} !w-full !h-[50px]`}
                  required
                  value={profileInfo?.email}
                  onChange={(e) => setProfileInfo({ ...profileInfo, email: e.target.value })}
                />
              </div>
            </div>
  
            <div className="w-full flex flex-col md:flex-row pb-3">
              <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-4 md:mb-0">
                <label className="block pb-2">Phone Number</label>
                <input
                  type="number"
                  className={`${commonStyles.input} !w-full !h-[50px]`}
                  required
                  value={profileInfo?.phoneNumber}
                  onChange={(e) => setProfileInfo({ ...profileInfo, phoneNumber: e.target.value })}
                />
              </div>
              <div className="w-full md:w-1/2 pl-0 md:pl-2 mb-4 md:mb-0">
                <label className="block pb-2">Enter your password</label>
                <input
                  type="password"
                  className={`${commonStyles.input} !w-full !h-[50px]`}
                  required
                  value={profileInfo?.password}
                  onChange={(e) => setProfileInfo({ ...profileInfo, password: e.target.value })}
                />
              </div>
            </div>
  
            <div className="flex justify-center">
              <input
                className="w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer"
                value="Update"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default Account;