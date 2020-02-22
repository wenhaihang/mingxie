<template>
 <main id="cart">
   <div class="span1">
      <div class="span1-2" style="left: 0;"><router-link to="/home" class="back"><img src="../assets/images/cart-1.png" alt=""></router-link></div>
      <div class="span1-2" style="left: 48px;"><router-link to="" class="cat"><img src="../assets/images/cart-2.png" alt=""></router-link></div>
      <div class="span1-1">S.CN名鞋库 我的购物.</div>
      <div class="span1-2" style="right: 48px;"><router-link to="/member" class="cat"><img src="../assets/images/cart-3-1.png" alt=""></router-link></div>
      <div class="span1-2" style="right: 0;"><router-link to="/cart" class="cart"><img src="../assets/images/cart-4.png" alt=""></router-link></div>
   </div>
   <div class="span2">
     <div class="span2-1"></div>
     <div class="span2-2">您还没有挑选商品哦</div>
     <router-link to="">去挑选商品</router-link>
   </div>
   <components></components>
 </main>
</template>
<script>
  export default {
     name:'cart',
     components:{
       components:require('./footer.vue').default
     }
  }
</script>

<style>
  body{
    background-color: #F0F0F0;
  }
</style>

<style scoped>
 .span1{
  height: 44px;
  width: 100%;
  max-width: 640px;
  border-bottom: 2px solid #900;
  background: #b91d23;
  display: -webkit-box;
  overflow: hidden;
  position: relative;
 }
 .span1-2{
   position: absolute;

 }
 .span1 a{
    display: inline-block;
    width: 48px;
    height: 44px;
    text-indent: -10em;
    overflow: hidden;
    position: relative;
 }
 .span1 .back{
   border-right: 1px solid #900;
 }
 .span1 .cat{
   border-right: 1px solid #900;
   border-left: 1px solid #c00;
 }
 .span1 .cart{
   border-left: 1px solid #c00;
 }
 .span1 img{
   width: 18px;
   height: 16px;
   position: absolute;
   top: 12px;
   left: 17px;
 }
 .span1-1{
    font-size: 1.6rem;
    line-height: 44px;
    padding: 0 106px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
    font-weight: 700;
    text-align: center;
    width: 100%;
 }
 .span2{
   padding: 20px;
   text-align: center;
 }
 .span2-1{
   width: 135px;
   height: 100px;
   background: url(../assets/images/cart-5.png) no-repeat;
   background-size: contain;
   margin: 0 auto 10px;
   padding-right: 20px;
   box-sizing: content-box;
 }
 .span2-2{
   font-size: 20px;
   font-weight: 700;
   color: #CCCCCC;
   text-align: center;
 }
 .span2 a{
   line-height: 42px;
   display: block;
   border-radius: 2px;
   background-color: #ff8a00;
   color: #FFFFFF;
   font-size: 16px;
   text-shadow: -1px -1px 1px #BD5C02;
   margin: 15px;
   font-weight: 700;
   box-shadow: 0 -1px 1px #AF2200 inset;
 }
</style>
