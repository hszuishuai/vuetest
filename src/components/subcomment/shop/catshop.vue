<template>
	<div id='catshop'>
		<div class="catshop-title">
			<div class="catshop-img">
				<img src="../../../images/1.jpg" width="10%">
				<span>小米官方旗舰店</span>
				<span>天猫</span>
			</div>
			<a>进店</a>
		</div>
<div class="mui-content">
	<div class="mui-row">
		<div class="mui-col-xs-4">
			<img src="../../../images/1.jpg" width="100%">
		</div>
		<div class="mui-col-xs-4">
			<img src="../../../images/1.jpg">
		</div>
		<div class="mui-col-xs-4">
			<img src="../../../images/1.jpg">
		</div>
	</div>
	<div class="catshop-footer">
       <span>购买过的店</span>
       <span>#相似店铺</span>
       <span>5年老店</span>
	</div>
</div>
	
</div>


</div>
</template>
<script type="text/javascript">
// export default{

// }
	
</script>
<style type="text/css" scoped>

#catshop{
    height: 15.84rem;
    border-bottom: 1px solid rgba(158, 158, 158, 0.48);
}
#catshop .mui-col-xs-4 img{
width: 100%;
padding:10px;
}
.mui-content{
	background: #fff;
}
.catshop-title{
	display: flex;
	justify-content: space-between;
}
.catshop-img{
    text-align: left;
    margin-left: 5%;
}
.catshop-img span:nth-of-type(2){
	display: inline-block;
	background:red;
	color: #fff;
	font-size: 6px;
}
.catshop-title>a{
	text-decoration: none;
	display: inline-block;
	border:1px solid #faa500;
	color: #faa500;
	font-size: 8px;
	border-radius: 5px;
	width: 50px;
    margin: auto 5%;
    line-height: 25px;
    border-radius: 15px;
    height: 25px;
}
.catshop-footer>span{
    display: inline-block;
    color: rgba(1, 1, 0, 0.74);
    font-size: 5px;
    float: left;
    margin-left: 2%;
    border-radius: 14px;
    padding: 4px;
    background: rgba(158, 158, 158, 0.26);

}

	
</style>