<template>

	<div id="user">
    <div id="app" class="mui-views">
      <div class="mui-view">
        <div class="mui-navbar">
        </div>
        <div class="mui-pages">
        </div>
      </div>
    </div>
    <!--页面主结构结束-->
    <!--单页面开始-->
    <div id="setting" class="mui-page">
      <!--页面标题栏开始-->
      <!--页面标题栏结束-->
      <!--页面主内容区开始-->
      <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell mui-media">
                <a class="mui-navigate-right" href="#account">
                  <img class="mui-media-object mui-pull-left head-img" id="head-img" src="">
                  <div class="mui-media-body">
                    <router-link to="/home/shopcart/login"><p class='mui-ellipsis'>登入/注册</p>
                    </router-link>
                  </div>
                </a>
              </li>
            </ul>
            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell">
                <a href="#account" class="mui-navigate-right">账号与安全</a>
              </li>
            </ul>
            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell">
                <a href="#notifications" class="mui-navigate-right">新消息通知</a>
              </li>
              <li class="mui-table-view-cell">
                <a href="#privacy" class="mui-navigate-right">隐私</a>
              </li>
              <li class="mui-table-view-cell">
                <a href="#general" class="mui-navigate-right">通用</a>
              </li>
            </ul>
            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell">
                <a href="#about" class="mui-navigate-right">关于MUI <i class="mui-pull-right update">V3.1.0</i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script type="text/javascript">
export default{
	created(){
		this.$store.state.showNav=true;
	}
}

</script>
<style  scoped>
#user{
  overflow: hidden;
}
#user>.mint-header.is-fixed{
  z-index: 20;
}
  .mui-views,
  .mui-view,
  .mui-pages,
  .mui-page,
  .mui-page-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 20px;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #efeff4;
  }

  .mui-pages {
    top: 46px;
    height: auto;
  }
  .mui-scroll-wrapper,
  .mui-scroll {
    background-color: #efeff4;
  }
  .mui-page.mui-transitioning {
    -webkit-transition: -webkit-transform 300ms ease;
    transition: transform 300ms ease;
  }
  .mui-page-left {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .mui-ios .mui-page-left {
    -webkit-transform: translate3d(-20%, 0, 0);
    transform: translate3d(-20%, 0, 0);
  }

  a {
    text-decoration: none;
  }
  .mui-navigate-right{
    display: flex!important;
    align-items: center;
     }
</style>
