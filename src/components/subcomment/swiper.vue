<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for='(item,index) in $store.state.lunbodata' :key='index'><img :src='item.url'></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    export default {
        name: "swiper"
    }
</script>

<style scoped>
  .mint-swipe{
    height: 330px;
  }
  .mint-swipe img{
    width:100%;
  }
</style>
