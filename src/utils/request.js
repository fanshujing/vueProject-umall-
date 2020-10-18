import axios from "axios"

// 响应拦截
axios.interceptors.response.use(res => {
    console.log("本次请求地址是：" + res.config.url);
    console.log(res);
    return res;
})
let baseUrl = "/api";
// 请求拦截
axios.interceptors.request.use(req => {
    if (req.url != baseUrl + "/api/userlogin") {
        req.headers.authorization = localStorage.getItem("token")
    }
    return req;
})
export const reqBanner = () => {
    return axios({
        url: baseUrl + "/api/getbanner",
    })
}
export const reqList = () => {
    return axios({
        url: baseUrl + "/api/getindexgoods",
    })
}
export const reqDetail = (id) => {
    return axios({
        url: baseUrl + "/api/getgoodsinfo",
        params: {
            id: id
        }
    })
}
export const reqCatetree = () => {
    return axios({
        url: baseUrl + "/api/getcatetree",
    })
}
export const reqGoods = (id) => {
    return axios({
        url: baseUrl + "/api/getgoods",
        params: {
            fid: id
        }
    })
}
export const reqCarlist = (id) => {
    return axios({
        url: baseUrl + "/api/cartlist",
        params: {
            uid: id
        }
    })
}
export const reqCartadd = (uid, goodsid, num) => {
    return axios({
        url: baseUrl + "/api/cartadd",
        method: "post",
        data: {
            uid: uid,
            goodsid: goodsid,
            num: num,
        }
    })
}
// reqCartedit
export const reqCartedit = (id, type) => {
    return axios({
        url: baseUrl + "/api/cartedit",
        method: "post",
        data: {
            id: id,
            type: type
        }
    })
}
export const reqDelete = (id) => {
    return axios({
        url: baseUrl + "/api/cartdelete",
        method: "post",
        data: {
            id: id,
        }
    })
}
