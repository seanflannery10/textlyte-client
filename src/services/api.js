import axois from "axios";

export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axois[method](path, data)
      .then(res => {
        // Axios returns res.data
        return resolve(res.data);
      })
      .catch(err => {
        // Gets error from Axios subdata (response.data.error)
        return reject(err.response.data.error);
      });
  });
}
