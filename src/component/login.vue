<template>
  <main id="login">
    <div class="span1">
      <router-link to="/member" class="span1-1"></router-link>
      <h3>名鞋库-用户登录</h3>
      <router-link to="" class="span1-2">注册</router-link>
    </div>
    <div class="span2">
      <div class="span2-1">
        <div class="span2-2">
          <ul>
            <li @click="msg='one'" :class="{lis1:msg=='one'}">账号登陆</li>
            <li @click="msg='two'" :class="{lis1:msg=='two'}"> 短信验证登陆</li>
            <li class="lis2" :class="{lis3:msg=='two'}"></li>
          </ul>
        </div>
        <div class="span9"  :class="{none:msg=='one'}">
			<div class="span2-3">
			  <ul>
			    <li>
			      <i style="background-position: 0px -382px;"></i>
			      <input type="text" placeholder="请输入手机或E-mail">
			      <b></b>
			    </li>
			    <li>
			      <i></i>
			      <input type="text" placeholder="请输入您的密码">
			      <b></b>
			    </li>
			    <li>
			      <i></i>
			      <drag-verify
			         :width="313"
			         :height="42"
			         handlerIcon='el-icon-d-arrow-right'
			         successIcon='el-icon-check'
			         text="请按住滑块.拖动到最右边"
			         success-text="验证通过"
			         background="rgba(0,0,0,0)"
			         progress-bar-bg="#7AC23C"
			         text-size="14px"
			         :circle="false">
			      </drag-verify>
			    </li>
			  </ul>
			</div>
			<div class="span2-4">
			  <div class="span2-5">
			    <input type="checkbox">
			    <span>一个月内免登陆</span>
			  </div>
			  <router-link to="">登陆</router-link>
			</div>
		</div>
		<div class="span10" :class="{none:msg=='two'}">
			<div class="span2-3">
			  <ul>
			    <li>
			      <i style="background-position: 0px -382px;"></i>
			      <input type="text" placeholder="请输入手机号">
			      <b></b>
			    </li>
			    <li>
			      <i></i>
			      <drag-verify
			         :width="313"
			         :height="42"
			         handlerIcon='el-icon-d-arrow-right'
			         successIcon='el-icon-check'
			         text="请按住滑块.拖动到最右边"
			         success-text="验证通过"
			         background="rgba(0,0,0,0)"
			         progress-bar-bg="#7AC23C"
			         text-size="14px"
			         :circle="false">
			      </drag-verify>
			    </li>
				<li>
				  <i></i>
				  <input type="text" placeholder="请输入手机验证码">
				  <button>发送验证码</button>
				</li>	
			  </ul>
			</div>
			<div class="span2-4">
			  <div class="span2-5">
			    <input type="checkbox">
			    <span>一个月内免登陆</span>
			  </div>
			  <router-link to="">登陆</router-link>
			</div>
		</div>
        <ul class="span2-6">
          <li><router-link to="">忘记密码？</router-link></li>
          <li style="float: right;"><router-link to="">立即注册</router-link></li>
        </ul>
      </div>
    </div>
    <div class="span3">
      无需注册，手机短信直接登录
    </div>
    <div class="span4">
      <div class="span4-1">
        <span>合作账号登陆</span>
      </div>
      <div class="span4-2">
        <router-link to=""></router-link>
        <router-link to="" style="background-position: -122px center;"></router-link>
      </div>
    </div>
  </main>
</template>

<script>
  import dragVerify from 'vue-drag-verify'
  export default {
    name: 'login',
	data(){
		return {
			msg:'one'
		}
	},
    components:{
        dragVerify
      }
  }
</script>

<style>
  body,html{
    background: #EEEEEE;
  }
</style>

<style scoped>
  .span1{
    height: 44px;
    width: 100%;
    line-height: 44px;
    color: #666666;
    background-color: rgba(255,255,255,0.6);
    font-size: 16px;
    position: relative;
    text-align: center;
    box-shadow: 0 0 6px #ccc;
  }
  .span1-1{
    width: 60px;
    background: #F0F0F0;
    height: 44px;
    position: absolute;
    left: 0;
  }
  .span1-1::before{
    content: '';
    display: block;
    position: absolute;
    width: 40px;
    height: 18px;
    overflow: hidden;
    margin: 12px 0 0 18px;
    background:url(../assets/images/login-1.png) no-repeat 0 -223px;
    background-size: 55px auto;
  }
  .span1 h3{
    margin: 0px;
    padding: 0 60px;
    display: block;
    width: 100%;
    height: 44px;
     font-size: 1.4rem;
     line-height: 44px;
  }
  .span1-2{
    width: 60px;
    height: 44px;
    position: absolute;
    right: 0;
    top:0;
    background-color: #ffe5e5;
    color: #e98686;
    font-size: 1.4rem;
  }
  .span2{
    padding: 10px 10px 15px;
    background: url(../assets/images/login-2.jpg) no-repeat 0 0;
    background-size: cover;
    overflow: hidden;
  }
  .span2-2 ul{
    border-bottom: .4rem solid #DDD8CE;
    position: relative;
    margin: 0;
    height: 54.8px;
  }
  .span2-2 ul li{
    width: 50%;
    height: 50px;
    line-height: 50px;
    float: left;
    background-color: #FFFFFF;
    font-size: inherit;
    font-weight: 400;
    text-align: center;
  }
  .lis1{
    color: #06c1ae;
  }
  .lis2{
    position: absolute;
    height: .4rem !important;
    bottom: -.4rem;
    background-color: #46CFB0 !important;
	transition: all 0.5s;
	left: 0px;
  }
  .lis3{
	left: 177px;
  }
  .span9,.span10{
	  display: none;
  }
  .none{
	  display: block;
  }
  .span2-3 ul{
    font-size: 18px;
    border-radius: 4px;
    border: 1px solid #D5D5D5;
    background: rgba(255,255,255,.5);
  }
  .span2-3 ul li{
    height: 46px;
    line-height: 46px;
    padding: 0 10px;
    border-bottom: 1px solid #D5D5D5;
    position: relative;
  }
  .span2-3 li i{
    display: inline-block;
    width: 23px;
    height: 46px;
    background: url(../assets/images/login-1.png) no-repeat 0px 12px;
    background-size: 85px;
    position: absolute;
  }
  .span2-3 li:nth-child(3) i{
    background-position: 4px -72px;
  }
  .span2-3 li:nth-child(1) b{
    display:none;
    width: 20px;
    height: 20px;
    line-height: 46px;
    border-radius: 1em;
    background: #AAAAAA url(../assets/images/login-1.png) no-repeat 2px -368px;
    margin-top: 14px;
    position: absolute;
    right: 10px;
    top: 0;
  }
  .span2-3 li:nth-child(2) input{
    width: 76%;
  }
  .span2-3 li:nth-child(2) b{
    display:block;
    width: 55px;
    height: 46px;
    line-height: 46px;
    background:url(../assets/images/login-1.png) no-repeat 0px -93px;
    background-size: 55px;
    position: absolute;
    right: 10px;
    top: 0;
  }
  .span2-3 li:nth-child(3) button{
	display:block;
	height: 3rem;
	margin-top: .4rem;
	padding: 0 1.6rem;
	border-radius: .3rem;
	color: #FFFFFF;
	border: 0;
	background-color: #6db248;
	font-size: 1.4rem;
	line-height: 3rem;
	position: absolute;
	right: 10px;
	top: 0;
  }
  .span2-3 input{
    background: none;
    width: 87%;
    height: 24px;
    margin-top: 11px;
    border: 0;
    margin-left: 23px;
    font-size: 1.6rem;
    outline:none;
    padding-left:5px;
  }
  .span2-3 input::-webkit-input-placeholder{
    color: #CCCCCC;
  }
  .drag_verify{
    margin-left: 25px;
	margin-top: 5px;
  }
  .span2-4{
    margin: 20px 0 10px;
    display: -webkit-box;
  }
  .span2-4 input{
    display: block;
    width: 20px;
    height: 20px;
    background-color: #FFFFFF;
    border: 1px solid #e2dbd5;
    margin: 10px 7px 0 0;
  }
  .span2-4 span{
    display: block;
    width: 130px;
    color: #888888;
    font-size: 1.4rem;
    margin-top: 11px;
    border-radius: 2px;
  }
  .span2-4 a{
    display: block;
    line-height: 42px;
    background: #f77373;
    color: #FFFFFF;
    font-weight: 700;
    width: 50%;
    text-align: center;
  }
  .span2-5{
    display: -webkit-box;
    width: 50%;
  }
  .span2-6{
    margin: .28rem .2rem;
    font-size: 1.4rem;
  }
  .span2-6 li{
    display: inline-block;
  }
  .span2-6 li a{
    text-decoration: none;
    color: #333333;
  }
  .span3{
    text-align: center;
    background-color: rgb(109,178,72);
    height: 40px;
    margin: 10px 10px 0;
    line-height: 42px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 16px;
  }
  .span4-1{
    font-size: 1.2rem;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1.2rem;
    color: #999999;
    border-bottom: 1px dotted #DDDDDD;
    height: 8px;
  }
  .span4-1 span{
    background: #EEEEEE;
    padding: 0 1rem;
  }
  .span4-2{
    text-align: center;
    padding: 5px 0 25px;
  }
  .span4-2 a{
    display: inline-block;
    width: 60px;
    height: 60px;
    background: #FFFFFF url(../assets/images/login-3.png) no-repeat 15px center;
    background-size: 400%;
    border-radius: 50px;
    line-height: 20rem;
    overflow: hidden;
    border: 1px solid #DDDDDD;
  }
</style>

