import axios from "axios";
export async function getToken(userName, passwd, code) {
    let token = "";
    await axios
    .post("https://nihlm.jlhuafa.com/api/exchg/system/login", {
        act: userName,
        code,
        codeType: "google",
        pwd: passwd
    }).then(function(response) {
        console.log(response.data);
        if(response.data.code === 200) {
            token = response.data.msg.token;
        }
    })
    return token;
}
export async function getOrderList(token) {
    let orderList = [];
    await axios
    .get("https://nihlm.jlhuafa.com/api/exchg/order/queryPendingOrders", {
      headers: {
        "x-token": token
      },
      params: {
        page: 1,
        count: 10
      }
    })
    .then(function(response) {
      console.log(response.data);
      if(response.data.code === 200 ) {
         orderList = response.data
      }
    })
    return orderList;
}
export async function getYzOrderList(token, captcha) {
    let orderList = [];
    await axios
    .get("https://nihlm.jlhuafa.com/api/exchg/order/queryPendingOrders", {
      headers: {
        "x-token": token
      },
      params: {
        page: 1,
        count: 10,
        captcha
      }
    })
    .then(function(response) {
      console.log(response.data);
      if(response.data.code === 200 && response.data.msg) {
          if(response.data.msg.totalCount > 0) {
              response.data.msg.data.forEach(d => {
                lockOrder(d.oid, d.status, token);
              })
          }
         orderList = response.data
      }
    })
    return orderList;
}
export async function lockOrder(oid, status, token) {
    console.log("LockOrder: ", {oid, status});
    axios
    .post("https://nihlm.jlhuafa.com/api/exchg/order/lockOrder", {
        headers: {
            "x-token": token
        },
        oid,
        status
    })
    .then(function(res) {
        console.log("LockOrder: ", res.data);
    })
    .catch(function(error) {
        console.log(error);
    });
}
export function scan(username, passwd, code) {
    let token = getToken(username, passwd, code);
}