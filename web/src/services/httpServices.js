import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api/";
axios.defaults.headers.common["Authorization"] = getToken();
axios.defaults.headers.post["Content-Type"] = "application/json";

function handleError(error) {
  console.log(error);
}

function getToken() {
  let user = JSON.parse(localStorage.getItem("authUser"));
  return user ? "bearer " + user.token : "";
}

export function httpGet(url, callback) {
  axios
    .get(url)
    .then(response => {
      callback(response.data);
    })
    .catch(error => {
      handleError(error);
    });
}

export function httpPost(url, data, callback) {
  axios
    .post(url, JSON.stringify(data), {
      "Content-Type": "application/json"
    })
    .then(response => {
      callback(response);
    })
    .catch(error => {
      handleError(error);
    });
}

export function login(params, callback) {
  axios
    .post("users/login", params)
    .then(response => {
      callback(response);
    })
    .catch(error => {
      handleError(error);
    });
}
