<template>
	<div>
		<ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media">
        <div @click="shopinfo(1)">
            <img class="mui-media-object mui-pull-left" src="../../../images/1.jpg">
            <div class="mui-media-body">
                <p class="shop-title">华硕a豆(adol) 13.3英寸四面窄边框轻薄笔记本电脑</p>
                <p class='mui-ellipsis'>公益宝贝</p>
                <div class="shop-info">
                <p class='shop-price'>￥22.2</p>
                <span class="span-left">22人付款</span>
                <span class="span-left">嘉兴</span>
              </div>
            </div>
        </div>
    </li>
</ul>
	</div>
</template>
<script type="text/javascript">
export default{
 methods:{
   shopinfo(id){

     //路由导航
     // this.$router.push("/home/shopinfo/"+id)
     //命名的路由 path与params不能同时使用
     this.$router.push({name:'shopinfo',params:{id}})
   }
 },


}

</script>
<style scoped>
	.shop-price{
	color:red;
}
.mui-media-body{
	width:60%;
}
.mui-table-view-cell>a:not(.mui-btn){
	    white-space:initial;

}
.shop-title{
	text-align: left;
}
.mui-table-view .mui-media-object{
	max-width: 120px;
	height: 120px;
}
.mui-ellipsis{
	display:block;
	margin-top: 30px;
	white-space:initial;
	width: 26%;
	border-radius: 10px;
	border:1px solid red;
	font-size: 10px;
	color: red;
	text-align: center !important;
	height: 17px;

}
.shop-info{
	display:flex;
}

.span-left{
	margin-left: 13px;
}
</style>
