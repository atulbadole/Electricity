import axios from "axios";

const baseUrl = "http://localhost:8080/";


function getMethodRequest(url, callBackFunction) {
  console.log("came inside getMethodRequest");
  console.log(`${baseUrl}${url}`);
  axios({
    method: "get",
    url: `${baseUrl}${url}`,
  })
    .then((response) => {
      if (callBackFunction !== undefined) {
        callBackFunction(response);
      }
      return response;
    })
    .catch((err) => {
      console.log("err -- ", err);
    });
}

function postMethodRequest(url, data, callBackFunction) {
  axios
    .post(`${baseUrl}${url}`, data)
    .then((res) => {
      if (callBackFunction !== undefined) {
        callBackFunction(res);
      }
      return res;
    })
    .catch((err) => {
      console.log("err -- ", err);
    });
}

export function getResponse(methodType, callBackFunction, url, dataJson) {
  if (methodType === "get") {
    return getMethodRequest(url, callBackFunction);
  } else {
    return postMethodRequest(url, dataJson, callBackFunction);
  }
}
