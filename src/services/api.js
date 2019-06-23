import axios from "axios";

export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method](path, data)
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
