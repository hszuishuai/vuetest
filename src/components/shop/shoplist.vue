<template>

<div id='serach-box'>
	<div class="serach-top">
    <div class="serach-left1"><span @click="back" class="glyphicon glyphicon-menu-left">返回</span></div>
		<input class='input-box' type="text" name="">
		<img class="Eid" src='../../images/3.png' width="20px" height="20px">
	</div>

<div class="tab">
	<div class="tab-item">
<router-link to='/home/shoplist/allshop'>全部</router-link>
</div>
	<div class="tab-item">
<router-link to='/home/shoplist/catshop'>天猫</router-link>
</div>
	<div class="tab-item">
<router-link to='/home/shoplist/storeshop'>店铺</router-link>
</div>
	<div class="tab-item">
<router-link to='/home/shoplist/seashop'>海淘攻略</router-link>
</div>
	<!-- <div class="tab-item"> -->
<!-- <router-link to=''>挑尖货</router-link>
</div> -->
</div>
<router-view/>
</div>

</template>
<script type="text/javascript">
	export default{
 data(){
 	return{

 	}
 },
 created(){
 	this.$store.state.showNav=false;
 },
 methods:{
  back(){
     this.$router.push('/home')
    // this.$router.go(-1);这种也可以返回上个页面
  }
 },

	}
</script>
<style scoped>
#serach-box{
 margin-top: -40px;
width:100%;
text-align: center;
position:absolute;
top:40px;

}
a{
	text-decoration: none;
}
.glyphicon-menu-left:before{
	color: #ffffff;
	font-size: 16px;
}
.input-box{
	border:2px solid #ffffff;
	width: 60%;
	border-radius:10px;
	height:20px;
	 margin-top: 8px;
}
.serach-top{
	display:flex;
	justify-content: space-between;
	background:#faa500;
}
.Eid{
	 margin: 10px 10px;
}
#serach-box .serach-top>.serach-left1{
	 margin-top: 10px;
  color: #ffffff;
}
.serach-left>P{
  display: inline-block;

}
.tab{
	height: 40px;
	line-height: 40px;
	background: #faa500;
	border-bottom: 1px solid rgba(7,17,27,0.1);
}
.tab-item{
	float: left;
	width: 25%;
	text-align: center;
	font-size: 14px;
	color:rab(77,85,93);

}
.tab-item a{
  	display: block;
  	position: relative;
  	text-decoration: none;
 	color: #ffffff;
 }
  .tab-item a .router-link-active{
  	color: #02a774;
  }
  /*.tab-item a .router-link-active:after{

  }*/
  .tab-item .router-link-active:after{
/*  	color: red;
*/  content: '';
  	position: absolute;
  	left: 50%;
  	bottom: 4px;
  	width: 35px;
  	height: 2px;
  	transform:  translateX(-50%);
  	background: #fff;
  }

</style>
