<template id="footer">
   <main id="footer">
     <div class="box">
          <div class="span1">
            <router-link to="/login">登陆</router-link>
            <router-link to="">注册</router-link>
          </div>
          <div class="span2">
            <div>
              <router-link to="">
                <img src="../assets/images/footer-1.png" alt="">
                <span>正品保证</span>
              </router-link>
            </div>
            <div>
              <router-link to="">
                <img src="../assets/images/footer-2.png" alt="">
                <span>满399包邮</span>
              </router-link>
            </div>
            <div>
              <router-link to="">
                <img src="../assets/images/footer-3.png" alt="">
                <span>自由退货</span>
              </router-link>
            </div>
            <div>
              <router-link to="">
                <img src="../assets/images/footer-4.png" alt="">
                <span>货到付款</span>
              </router-link>
            </div>
          </div>
          <div class="span3">
            <div>
              <router-link to="">
                <img src="../assets/images/footer-5.png" alt="">
                <span>4001162228</span>
              </router-link>
            </div>
            <div>
              <router-link to="">
                <img src="../assets/images/footer-6.png" alt="">
                <span style="color: #666; font-weight: normal;">scnmall</span>
              </router-link>
            </div>
          </div>
          <div class="span4">
            <div class="span4-1">
              <router-link to="" style="color: #666666; border-radius: 0 5px 5px 0;">
                触屏版
                <img src="../assets/images/footer-7.png" alt="">
              </router-link>
              <router-link to="" style="margin-left:1%;border-radius: 5px 0 0 5px;">
                <img src="../assets/images/footer-8.png" alt="">
                电脑版
              </router-link>
            </div>
              ©2008-2018 s.cn 名鞋库 闽ICP备08106896号<br>
            <router-link to="">
              意见反馈
            </router-link>&nbsp;
            <router-link to="">商圈</router-link>
          </div>
     </div>
   </main>
</template>

<script>
</script>

<style>
  #footer{
    padding-top: 20px;
    background-color: #F0F0F0;
    font-size: 13px;
  }
</style>
<style scoped>
  .span1{
    background-color: #F7F7F7;
    height: 44px;
    line-height: 44px;
    padding: 0 15px;
    border-top: 1px solid #E3E3E3;
    border-bottom: 1px solid #E3E3E3;
  }
  .span1 a{
    padding: 0 8px;
    color: #06c;
  }
  .span2{
    border-bottom: .1rem solid #DCDCDC;
    overflow: hidden;
  }
  .span2 div{
    width: 25%;
    float: left;
  }
  .span2 a{
    display: inline-block;
    width: 100%;
    padding: 1.2rem 0;
    margin: 0 0 0 -1px ;
    text-align: center;
    color: #666;
  }
  .span2 img{
    width: 34px;
    height: 34px;
    margin: 0 33% .5rem;
  }
  .span3{
    padding: 1.2rem .5rem .5rem;
    overflow: hidden;
    border-bottom: 1px solid #E5E5E5;
    text-align: center;
  }
  .span3 div{
    width: 25%;
    float:left;
    margin: 0 4%;
  }
  .span3 a{
    display: inline-block;
    width: 100%;
    margin:0 4%;
    font-size: 1.6rem;
    text-align: center;
    color: #C00;
    font-weight: 700;
  }
  .span3 img{
    margin: 0 34%;
  }
  .span3 span{
    font-size: 12px;
  }
  .span4{
    padding: .5rem 0 .7rem;
    color: #999999;
    text-align: center;
    line-height: 2rem;
  }
  .span4-1{
    margin-bottom: 1rem;
  }
  .span4-1 a{
    display: inline-block;
    width: 49%;
    height: 42px;
    line-height:42px;
    font-size: 13px;
    padding: 0px;
    color: #999;
    background: #DCDCDC;
  }
  .span4>a{
    display: inline-block;
    padding: 0 10px;
    color: #999999;
    font-size: 13px;
  }
</style>
