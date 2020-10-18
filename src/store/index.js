import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)


// 引入axios请求
import { reqBanner, reqList, reqDetail, reqCatetree, reqGoods, reqCarlist, reqCartadd, reqCartedit,reqDelete } from "../utils/request"


export default new Vuex.Store({
    state: {
        banner: [],
        list: [],
        detail: {},
        catetree: [],
        goods: [],
        carlist: [],
        cartadd: {},
        cartedit: [],
        
    },
    mutations: {
        changeBanner(state, arr) {
            state.banner = arr;
        },
        changeList(state, arr) {
            state.list = arr;
        },
        changeDetail(state, obj) {
            state.detail = obj;
        },
        changeCatetree(state, arr) {
            state.catetree = arr
        },
        changeGoods(state, arr) {
            state.goods = arr
        },
        changeCarlist(state, arr) {
            state.carlist = arr;
        },
        changeCartadd(state, obj) {
            state.cartadd = obj
        },
        changeCartedit(state, arr) {
            state.cartedit = arr
        }
    },
    actions: {
        requestBanner(context) {
            reqBanner().then(res => {
                var a = JSON.parse(JSON.stringify(res.data.list));
                context.commit("changeBanner", a)
            })
        },
        requestList(context) {
            reqList().then(res => {
                var a = JSON.parse(JSON.stringify(res.data.list[0].content));
                context.commit("changeList", a)
            })
        },
        requestDetail(context, id) {
            reqDetail(id).then(res => {
                console.log(res.data.list[0]);
                var a = JSON.parse(JSON.stringify(res.data.list[0]));
                context.commit("changeDetail", a)
            })
        },
        requestCatetree(context) {
            reqCatetree().then(res => {
                var a = JSON.parse(JSON.stringify(res.data.list))
                context.commit("changeCatetree", a)
            })
        },
        requestGoods(context, id) {
            reqGoods(id).then(res => {
                var a = JSON.parse(JSON.stringify(res.data.list));
                context.commit("changeGoods", a)
            })
        },
        requestCarlist(context, id) {
            reqCarlist(id).then(res => {

                // var a = JSON.parse(JSON.stringify(res.data.list));
                var a=res.data.list==null? []:res.data.list;
                    for (let i = 0; i < a.length; i++) {
                        a[i].checked = false;
                    }
                    context.commit("changeCarlist", a)
                
            })
        },
        requestCartadd(context, obj) {
            console.log(obj.uid, obj.goodsid, obj.num);
            reqCartadd(obj.uid, obj.goodsid, obj.num).then(res =>{console.log(res);})
        },
        // requestCartedit
        requestCartedit(context, obj) {
            reqCartedit(obj.id, obj.type).then()
        },
        requestDelete(context,id) {
            reqDelete(id).then(res=>{
                console.log(res);
            })
        },
    },
    getters: {
        banner(state) {
            return state.banner;
        },
        list(state) {
            return state.list;
        },
        detail(state) {
            return state.detail;
        },
        catetree(state) {
            return state.catetree;
        },
        goods(state) {
            return state.goods;
        },
        carlist(state) {
            return state.carlist;
        },
        cartadd(state) {
            return state.cartadd;
        },
        cartedit(state) {
            return state.cartedit;
        }
    }
})