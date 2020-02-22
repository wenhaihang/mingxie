<template>
  <main id='member'>
    <div class="span1">
      <div class="span1-2" style="left: 0;"><router-link to="/home" class="back"><img src="../assets/images/cart-1.png" alt=""></router-link></div>
      <div class="span1-2" style="left: 48px;"><router-link to="" class="cat"><img src="../assets/images/cart-2.png" alt=""></router-link></div>
      <div class="span1-1">S.CN名鞋库 我的购物.</div>
      <div class="span1-2" style="right: 48px;"><router-link to="/member" class="cat"><img src="../assets/images/cart-3-1.png" alt=""></router-link></div>
      <div class="span1-2" style="right: 0;"><router-link to="/cart" class="cart"><img src="../assets/images/cart-4.png" alt=""></router-link></div>
    </div>
    <div class="span2">
      <ul class="span2-1">
        <li>
          <p>
            <i class="i-1">15019593919</i>
            <router-link to="">退出</router-link><br>
            你的会员等级:<i>注册会员</i><br>
            可用积分:<i>0分</i>
          </p>
        </li>
      </ul>
      <ul class="span2-2">
        <li><router-link to="">我的订单</router-link></li>
        <li><router-link to="">我的评论</router-link></li>
        <li><router-link to="">我的收藏</router-link></li>
        <li><router-link to="">我的优惠劵</router-link></li>
        <li><router-link to="">退换活服务</router-link></li>
      </ul>
      <ul class="span2-2">
        <li><router-link to="">账号安全</router-link></li>
        <li><router-link to="">收获地址</router-link></li>
        <li><router-link to="">修改地址</router-link></li>
      </ul>
    </div>
    <div class="span3">
      <ul class="span3-1">
        <li class="span3-2" style="color: #ee0a38; font-weight: 700;">热门活动</li>
        <li class="span3-2">男子</li>
        <li class="span3-2">女子</li>
        <li class="span3-2">品牌</li>
      </ul>
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
  #member{
    padding-bottom: 47px;
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
    overflow: hidden;
  }
  .span2 ul{
    margin: 15px;
    border: 1px solid #d5d5d5;
    background: #fff;
    border-radius: 4px;
  }
  .span2 ul li{
    display: block;
    line-height: 40px;
    border-bottom: 1px solid #e0e0e0;
    padding: 0 15px;
    position: relative;
    font-size: 16px;
  }
  .span2-1 p{
    line-height: 1.6em;
        padding: 8px 0;
  }
  .span2-1 .i-1{
    color: #F90;
    max-width: 80%;
    display: inline-block;
    margin-right: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .span2-1 i{
    vertical-align: baseline;
    color: #c00;
    font-style: normal;
  }
  .span2-2 a{
    display: block;
    width: 100%;
    padding: 0 15px;
    margin: 0 -15px;
    color: #333333;
  }
  .span2-2 li::after{
    content: '';
    border-right: 3px solid #ccc;
    border-bottom: 3px solid #ccc;
    height: 8px;
    width: 8px;
    position: absolute;
    top: 14px;
    right: 14px;
    transform: rotate(-45deg);
  }
  .span3{
    position: fixed;
    bottom: 0;
    height: 48px;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid rgba(0,0,0,0.1);
  }
  .span3-1{
    height: 100%;
  }
  .span3-2{
    width: 24.2%;
    display: inline-block;
    text-align: center;
    line-height: 47px;
    border-right: 1px solid rgba(0,0,0,.1);
    font-size: 15px;
    position: relative;
  }
  .span3-2::after{
    content: '';
    display: block;
    position: absolute;
    top: 18%;
    left: 50%;
    border-top: 1px solid rgba(0,0,0,.3);
    border-bottom: 1px solid rgba(0,0,0,.3);
    padding-top: 3px;
    width: 12px;
    transform: translate3d(-50%,-50%,0);
  }
</style>
