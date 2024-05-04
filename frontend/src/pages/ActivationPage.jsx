import { server } from "../../Constant";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ActivationPage = () => {
  const { activationToken } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activationToken) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/user/activation`, {
            activationToken,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created successfully !</p>
      )}
    </div>
  );
};

export default ActivationPage;
