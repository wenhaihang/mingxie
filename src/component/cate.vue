<template>
  <main id="cate">
    <div class="span1">
      <div class="span1-1">
        <router-link to="/home">
          <img src="../assets/images/cate-span1-1.png" alt="">
        </router-link>
      </div>
      <div class="span1-2">
        <input type="text" placeholder="输入关键字搜索">
        <i class="glyphicon glyphicon-remove"></i>
        <button class="glyphicon glyphicon-search"></button>
      </div>
      <div class="span1-3" @click="hide()">
        <router-link to="">
          <img src="../assets/images/cate-span1-2.png" alt="">
        </router-link>
      </div>
    </div>
    <div class="span2">
      <div class="span2-1">
        <ul>
          <li @click="nanzi" :class="{lis:msg=='nanzi'}"><router-link to="/nanzi">男子</router-link></li>
          <li @click="nvzi" :class="{lis:msg=='nvzi'}"><router-link to="/nvzi">女子</router-link></li>
          <li @click="peijian" :class="{lis:msg=='peijian'}"><router-link to="/peijian">配件</router-link></li>
          <li @click="ertong" :class="{lis:msg=='ertong'}"><router-link to="/ertong">童鞋童装</router-link></li>
          <li @click="pinpai" :class="{lis:msg=='pinpai'}"><router-link to="/pinpai">全部品牌</router-link></li>
        </ul>
      </div>
      <div class="span2-2">
        <router-view></router-view>
      </div>
      <div class="span3">
        <transition name="fade" enter-active-class="enter" leave-active-class="leave">
          <div class="ming" v-show="show">
            <ul style="margin-bottom: 0px;">
              <li>
                <router-link to="/footer">
                  <i class="glyphicon glyphicon-home"></i><span>首页</span>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <i class="glyphicon glyphicon-registration-mark"></i><span>品牌</span>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <i class="glyphicon glyphicon-shopping-cart"></i><span>购物车</span>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <i class="glyphicon glyphicon-user"></i><span>我的</span>
                </router-link>
              </li>
            </ul>
          </div>
        </transition>
        <div :class="{tuoming:show}" @click="hide($event)"></div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'cate',
    data () {
      return {
        show:false
      }
    },
    methods:{
      hide(){
        this.show = !this.show
      },
      add(a){

      },
	  nanzi(){
		  this.$store.commit('nanziCartCount')
	  },
	  nvzi(){
	  	  this.$store.commit('nvziCartCount')
	  },
	  peijian(){
		  this.$store.commit('peijianCartCount')
	  },
	  ertong(){
	  	  this.$store.commit('ertongCartCount')
	  },
	  pinpai(){
	  	  this.$store.commit('pinpaiCartCount')
	  }
    },
	computed:{
		msg(){
			return this.$store.state.msg
		}
	}
  }
</script>

<style>

</style>

<style scoped>
	a{
		text-decoration: none;
	}
    .span1{
      position: fixed;
      top: 0px;
      background-color: #FFFFFF;
      width: 100%;
      height: 47px;
	  z-index: 100;
    }
    .span1-1,.span1-3{
      min-width: 48px;
      position: absolute;
      top: 0;
    }
    .span1-1 a,.span1-3 a{
      display: inline-block;
      width: 48px;
      height: 44px;
    }
    .span1-1 img, .span1-3 img{
      width: 18px;
      height: 16px;
      margin: 14px 15px;
    }
    .span1-1{
      left: 0;
    }
    .span1-3{
      right: 0;
    }
    .span1-2{
      padding:4px  48px 0;
      margin: 0 3px;
      height: 42px;
      width: 100%;
      min-width:48px
    }
    .span1-2 input{
      background: #EEEEEE;
      border: none;
      height: 34px;
      border-radius: .3rem;
      font-size: 1.1rem;
      padding-left: 0.6rem;
      outline: none;
      width: 100%;
      padding-right: 42px;
    }
    .span1-2 input::-webkit-input-placeholder{
      color: #CCCCCC;
    }
    .span1-2 i{
      display: none;
      width: 34px;
      height: 34px;
      line-height: 34px;
      color: #999999;
      font-size: 16px;
      position: absolute;
      top:4px;
      right: 100px;
      text-align: center;
    }
    .span1-2 button{
      width: 42px;
      height: 34px;
      line-height: 34px;
      font-size: 22px;
      color: #0B0A12;
      border: none;
      float:right;
      position:absolute;
      top: 4px;
      right: 48px;
      background-color: #EEEEEE;
      border-radius: 0 .3rem .3rem 0;
    }
    .span2{
      position: relative;
      margin-top: 47px;
    }
    .span2-1{
      width: 7.5rem;
      background-color: #FFFFFF;
      position: fixed;
    }
    .span2-1 li{
      font-size: 1.6rem;
      line-height: 5rem;
      text-align: center;
      padding: 0 .4rem;
      border-bottom: 1px solid #E5E5E5;
      border-right:1px solid #E5E5E5;
    }
    .span2-1 li a{
      color:#333333;
	  display: inline-block;
	  width: 80px;
	  height: 60px;
    }
    .span2-1 .lis{
      background-color:#F2F2F2;
      border-left:.42rem solid #DF2926;
      border-right: none;
    }
    .span2-1 .lis a{
      color:#E02B28;
    }
    .span2-2{
      margin-left: 7.5rem;
      padding: 0 .7rem .7rem;
      background-color: #F2F2F2;
    }
    .ming{
      width: 125px;
      position: fixed;
      top: 47px;
      right: 0px;
      z-index: 21;
      background-color: #FFFFFF;
    }
    .ming li{
      border-bottom: 1px solid #e5e5e5;
      border-left: 1px solid #e5e5e5;
    }
    .ming a{
      position: relative;
        width: 125px;
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        color: #9B9B9B;
    }
    .ming a i{
      font-size: 26px;
      margin: 9px 10px;
    }
    .ming a span{
      display: inline-block;
      margin: auto 0;
    }
    .tuoming{
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0px;
      background-color: #F5F5F5;
      opacity: .7;
      z-index: 20;
    }
    .enter{
    	animation: move 1s;
    }
    .leave{
    	animation: leave 1s
    }
    @keyframes move{
    	0%{
    		transform: translateX(125px)
    	}
    	100%{
    		transform: translateX(0px)
    	}
    }
    @keyframes leave{
      0%{
        transform: translateX(0px)
      }
      100%{
      	transform: translateX(125px)
      }
    }
</style>
