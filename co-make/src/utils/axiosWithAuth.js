import axios from "axios";

const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
    baseURL: "https://co-make-backend-tt16.herokuapp.com/",
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;
