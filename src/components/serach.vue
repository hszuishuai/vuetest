<template>

	<div>
    <h1>购物车</h1>
    <ul class="list">
      <li class="item" v-for="(item,index) in $store.state.cart" :key="index">

        <mt-cell-swipe
          :right="[
                {
                    content: '删除',
                    style: { background: '#ff7900', color: '#fff'},
                    handler: () => {
                    $store.commit('delcart',index)
                    }
                }
            ]">
     <div class="shop-list">
       <input type="checkbox">
          <p>小米6A</p>
          <p>{{item.price}}</p>
          <div>
            <div class="td-num">
              <span @click="$store.commit('updatedelnum',index)">-</span><div ref="num" class="num1">{{item.couter}}</div>
              <span @click="$store.commit('updateaddnum',index)">+</span>
            </div>
          </div>
  </div>
        </mt-cell-swipe>
      </li>
    </ul>

  </div>

</template>

<script type="text/javascript">
export default{
	created(){
		this.$store.state.showNav=true;
	},
  methods:{
	  delcart(index){
	    this.$store.commit('delcart',index)
    }
  }
}

</script>
<style  scoped>
  a{
    text-decoration: none;
  }
  .td-num>.num1 {
    width: 30px;
    height: 30px;
    padding: 0;
    text-align: center;
    border: 1px solid rgba(143, 143, 148, 0.29);
    float: left;
    line-height: 30px;
  }
  span{
    display: inline-block;
    width: 30px;
    height: 30px;
    float: left;
    text-align: center;
    line-height: 30px;
  }
  .td-num{
    display: flex;
    justify-content: center;
  }
  li{
    list-style: none;
  }

  .shop-list{
    display: flex;
    justify-content: space-between;
    width: 100%;
    /*top:0*/
  }
  .item{

  }
ul{
  margin-left: -40px;
}
  .shop-list>p{
    margin-left: 60px;
  }
p{
  margin: 8px 0;
}
  input[type=checkbox]{
    margin-top: 8px;
  }
</style>
