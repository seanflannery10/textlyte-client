import axios from "axios";

export function setTokenHeader(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](path, data)
      .then(res => {
        // axios returns res.data
        return resolve(res.data);
      })
      .catch(err => {
        // Gets error from axios sub data (response.data.error)
        return reject(err.response.data.error);
      });
  });
}
