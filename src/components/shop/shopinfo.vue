<template>
  <div>
    <div class="shopinfo-type" v-show="navBarFixed">
      <!--<div><span></span></div>-->
      <div class="shopinfo-item" :class="index===0 ? 'shopinfo-item1' :'shopinfo-item'">
        宝贝
      </div>
      <div class="shopinfo-item" :class="index===1 ? 'shopinfo-item1' :'shopinfo-item'">
        评价
      </div>
      <div class="shopinfo-item" :class="index===2 ? 'shopinfo-item1' :'shopinfo-item'">
        详情
      </div>
      <div class="shopinfo-item" :class="index===3 ? 'shopinfo-item1' :'shopinfo-item'">
        推荐
      </div>
    </div>
  <div class="shopinfo">
    <div class="shopconter">
    <!--顶部导航-->
      <ul ref="shopul">
    <!--顶部导航-->
    <!--商品轮播区域-->
        <li>
    <div id="swp">
<swiper></swiper>
    </div>
        </li>
    <!--商品轮播区域-->
    <!--商品宝贝详情-->
        <li class="shopinfo-content">
    <div class="shopinfo-content-title">
      <p class="shopprice">￥22</p>
      <p>2018年最强Xiaomi/小米 红米6a 正品手机红米6</p>
      <div class="shoptitle">
      <p>快递:免运费</p>
      <p>月销2222</p>
      <p>广东深圳</p>
      </div>
    </div>
    <div class="shopserve">
      <ul>
        <li>优惠</li>
        <li>服务&nbsp&nbsp&nbsp<span class="color1">7天无理由.运费险.公益宝贝</span><span class="glyphicon glyphicon-menu-right span"></span></li>
        <li>选择<span class="color1">&nbsp&nbsp&nbsp请选择&nbsp机身颜色</span><span class="glyphicon glyphicon-menu-right span"></span></li>
        <li>参数&nbsp&nbsp&nbsp<span class="color1">类型</span><span class="glyphicon glyphicon-menu-right span" @click="$store.commit('restates')"></span></li>
      </ul>
   </div>
    </li>
<!--商品宝贝详情-->

        <!--宝贝评价-->
        <li>
          <div class="shop-comment shoptitle">
            <p class="color1">宝贝评价(11111)</p>
            <p><span class="color2">查看全部<span class="glyphicon glyphicon-menu-right"></span></span></p>
          </div>
        </li>
        <!--宝贝评价-->
  </ul>
  </div>
    </div>
    <div class="shoptype" v-if="$store.state.showshop">
<div class="shoptype-img">
      <img src="http://7xi8d6.com1.z0.glb.clouddn.com/20171012073108_0y12KR_anri.kumaki_12_10_2017_7_30_58_141.jpeg">

</div>
      <div class="shoptype-info">
      <p class="shopprice" ref="price">￥888</p>
      <p>库存22键</p>
      <p class="color1">请选择 机身颜色吧套餐类型</p>
      </div>
      <div class="shopnum">
        <span class="color1"> 购买数量</span>
        <div>
          <span @click="$store.dispatch('del')">-</span><div ref="num" class="num1">{{$store.state.couter}}</div><span @click="$store.dispatch('add')">+</span>
        </div>
      </div>
      <div class="shopadd">
        <button type="button" @click="addCatr" class="mui-btn mui-btn-warning mui-btn-outlined">加入购物车</button>
        <button type="button" class="mui-btn mui-btn-danger mui-btn-outlined">立即购买</button>
      </div>
      <div class="pos"><span @click="$store.commit('restates')"  class="mui-icon mui-icon-close "></span></div>
    </div>
  </div>
</template>

<script>
  import lunbo from '../subcomment/swiper.vue'
  import BScroll from 'better-scroll'
    export default {
        name: "shopinfo",
      data(){
          return{
            lunbolist:[{"url":"http://7xi8d6.com1.z0.glb.clouddn.com/20171012073108_0y12KR_anri.kumaki_12_10_2017_7_30_58_141.jpeg"},
              {"url":"http://7xi8d6.com1.z0.glb.clouddn.com/20171011084856_0YQ0jN_joanne_722_11_10_2017_8_39_5_505.jpeg"},
              {"url":"http://7xi8d6.com1.z0.glb.clouddn.com/2017-10-10-sakura.gun_10_10_2017_12_33_34_751.jpg"}
            ],
            navBarFixed:'',
            scollY:0,
            tops:'',
            index:0,
            type:false
          }
      },
      created(){
        this.$store.state.showNav=false;
        this.$store.state.lunbodata=this.lunbolist;
      },
      mounted(){
        // better-sollor插件的运用
          this.$nextTick(()=>{
            if (!this.scroll) {
             const info = new BScroll(".shopinfo", {
                click: true,
                probeType:2
              });
              info.on('scroll',(event)=>{
                // console.log(event.y);
                this.scollY=Math.abs(event.y)
              });
            } else {
              this.scroll.refresh();
            }
          });
        console.log(this.scroll)
        this.getTops();
      },
      components:{
        "swiper":lunbo
      },
      //vue计算属性
     watch:{
          scollY:function() {
            const scollY = this.scollY;
            const tops = this.tops;
            if(scollY>=80){
              this.navBarFixed=true
            }else {
              this.navBarFixed=false
            }
            const index = tops.findIndex((top, index) => {
              // scollY>=当前top 小于下一个top
              return scollY >= top && scollY <= tops[index + 1]
            })
            this.index = index
          }
      },
      methods:{
          watchScroll(){
            if(this.scollY >70)
            {
              return false
            } else{
              return true
          }
            // console.log(typeof(this.scollY))
          },
        // 得到tops
        getTops(){
          let tops=[];
          let top=0;
          tops.push(top);
          const list=this.$refs.shopul.children;
          Array.prototype.slice.call(list).forEach(li =>{
            top+=li.clientHeight;
            tops.push(top)
          });
          this.tops=tops
        },
        //添加数据到购物车中
        addCatr(){
          let goodinfo={
            id:2,
            price:(this.$refs.price.innerHTML).substr(1,3),
            couter:this.$refs.num.innerHTML,
            select:true
          };
          this.$store.commit('addcart',goodinfo);
          this.$store.commit('restates')
        }
      }
    }
</script>

<style scoped="scoped">
  .color1{
    color: black;
  }
  .color2{
    color: #c8390c;
  }
 #swp li>.mint-swipe{
    height: 350px;
  }

.shopinfo-type{
  width: 100%;
  height: 40px;
  background: #d97c1e;
  /*margin-top:-40px ;*/
  line-height: 40px;
  position: fixed;
  top: 0;
  z-index: 55;
  /*display: none;*/
}
.shopinfo{
  height: 575px;
}
.shopinfo li>.shopinfo-content{
  height: 1000px;
}
  .shopinfo-item{
    float: left;
    width: 25%;
    text-align: center;
    color: #ffffff;
    position: relative;
  }
  .shopinfo-item1{
    float: left;
    width: 25%;
    text-align: center;
    color: #ffffff;
    position: relative;
  }

  .shopinfo-item1:after{
    content: '';
    position: absolute;
    width: 30%;
    background: #ffffff;
    bottom: 6px;
    left: 35%;
    height: 2px;
  }
  #swp{
    margin-top: -40px;
  }
.shopconter li{
  display: block;
  width: 100%;
  /*margin-top: 50px;*/
  /*background: red;*/
  list-style: none;
  padding: 1px;
  /*background: #2ac845;*/
}
.shopconter ul {
  padding: 0;
}
.shopprice{
    color: #c8230b;
    font-size: 20px;
  }
.shopinfo-content-title>p:nth-of-type(2){
  color: black;
  font-weight: bolder;
  font-size: 16px;
}
  .shoptitle{
    display: flex;
    justify-content: space-between;
    padding-left: 5px;
  }
  .shopserve>ul li{
    margin-top: 10px;
    color: #8f8f94;
    padding-left: 5px;
  }
  .span{
    display: inline-block;
    float: right;
  }
  .shop-comment{
    margin-top: 10px;
    height: 400px;
  }
  .shoptype{
    height: 80%;
    position: absolute;
    bottom: 50px;
    width: 100%;
    background: #ffffff;

  }
  .shoptype-img{
    width: 40%;
    float: left;

  }
  .shoptype-img img{
    width: 100%;
  }
  .shoptype-info{
    margin-top: 16.5%;
  }
.num1 {
  width: 30px;
  height: 30px;
  padding: 0;
  text-align: center;
  border: 1px solid rgba(143, 143, 148, 0.29);
  float: left;
  line-height: 30px;
}
.shopnum{
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

}
  .shopnum>div:nth-of-type(1){
    margin-right: 5%;
  }
  .shopnum>div:nth-of-type(1)>span{
    display: inline-block;
    padding: 10px;
    font-size: 20px;
    background: rgba(90, 90, 95, 0.45);
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 8px;
    float: left;
  }
  .mui-btn, button{
    width: 40%;

  }
  .shopadd{
    position: fixed;
    bottom: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .pos{
    position: absolute;
    top: 5px;
    right: 5px;

  }
  .mui-icon-close:before {
    font-size: 18px;
  }
</style>
