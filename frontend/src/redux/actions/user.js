import { server } from "../../../Constant";
import axios from "axios";
import { loadUserFail, loadUserRequest, loadUserSuccess } from "../features/userSlice";

export const loadUser = () => async (dispatch) => {
    try {
      dispatch({
        type: loadUserRequest,
      });
      const cookies =  cookies.get('token')
      console.log(cookies);
      const { data } = await axios.post(`${server}/user/get-user`, cookies, {    
        withCredentials: true,
      }
    
    );
      dispatch({
        type: loadUserSuccess,
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: loadUserFail,
        payload: error.response.data.message,
      });
    }
  };
  