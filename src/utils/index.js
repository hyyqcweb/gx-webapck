// 请求封装
import axios from 'axios';

const request = (options) => {
  let { method = 'get', data, url } = options;
  if (process.env.NODE_ENV === "production") {
    url = "https://easy-mock.com/mock/5b85f226b6eb682fc7f9ef9d/bicycleApi/" + url.substring(4); // 可以做全局环境判断
  }
  return axios({
    method: method.toLowerCase(),
    url,
    data,
  }).then( (response) => {
    const { statusText, status } = response;
    let data = response.data;
    return Promise.resolve({
      success: 'ok',
      message: statusText,
      statusCode: status,
      ...data,
    });
  }).catch( (error) => {
     console.log(error); // error 可以抽一个 function
  });
};

export default request;
