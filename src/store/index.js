import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
	showNav: true,
  lunbodata:'',
  couter:1,//购物车商品数量
  showshop:false,
  cart:[],//购物车的参数
};
export default new Vuex.Store({
	state,
  mutations:{
	  addnum(state){
	    state.couter+=1;
    },
    deL(state){
	    state.couter-=1;
    },
    restates(state){
	    state.showshop=state.showshop?false:true;
      // console.log(1)
    },
    addcart(state,goodinfo){ //添加商品信息到购物车中
	    let flag=false;
	    state.cart.some(itme=>{
	      if(itme.id===goodinfo.id){
	        itme.couter=parseInt(goodinfo.couter)+parseInt(itme.couter);
	        flag=true;
          return flag
        }
      })
      if(!flag){
	      state.cart.push(goodinfo);
      }
      state.couter=1;
    },
    //删除购物车中的商品
    delcart(state,shopindex){
	    state.cart.splice(shopindex,1);
    },
    //更新购物车中商品的数量
    updateaddnum(state,index){
	    state.cart[index].couter++;
    },
    updatedelnum(state,index){
      state.cart[index].couter--;
    },
  },
  actions:{
	  add(context){
	    context.commit('addnum');
	    // context.commit('restates');
      // console.log(1)
    },
    del(context){
	    context.commit('deL')
    },
    // addcart(context){
	 //    context.commit('add')
    // }
  },
  getters:{
	  //更新购物车中的数量  计算属性
    getall(state){
      let c=0;
      state.cart.forEach(item=>{
        c+=parseInt(item.couter);
      })
      return c;
    }

  }
})
