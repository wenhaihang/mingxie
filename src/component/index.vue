<template>
  <main id="index">
    <div id="box">
      <ul>
		<li>
			<router-link to="/home">
			  <P class="glyphicon glyphicon-home p-1"></P><br>
			  <P class="p-2">首页</P>
			</router-link>
		</li>
		<li @click="pinpai">
			<router-link to="/pinpai">
			  <p class="glyphicon glyphicon-registration-mark p-1"></p><br>
			  <p class="p-2">品牌</p>
			 </router-link>
		</li>
      	<li @click="nanzi">
			<router-link to="/nanzi">
			  <p class="glyphicon glyphicon-list p-1"></p><br>
			  <p class="p-2">分类</p>
			</router-link>
		</li>
      	<li>
			<router-link to="/cart">
			  <p class="glyphicon glyphicon-shopping-cart p-1"></p><br>
			  <p class="p-2">购物车</p>
			</router-link>
		</li>
      	<li>
			<router-link to="/member">
			  <p class="glyphicon glyphicon-user p-1"></p><br>
			  <p class="p-2">我的</p>
			</router-link>
		</li>
      </ul>
    </div>
    <router-view></router-view>
  </main>
</template>

<script>
	export default{
		name:'index',
		methods:{
			nanzi(){
				this.$store.commit('nanziCartCount')
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
  a{
    text-decoration:none;
  }
  a:visited{
    text-decoration:none;
  }
</style>
<style scoped>
  #box{
    position: fixed;
    bottom:0;
    width:100%;
    height: 4.1rem;
    padding-top: 0.5rem;
    background: #FFFFFF;
    z-index: 20;
    border-top: 1px solid #EEEEEE;
  }
  li{
	  float: left;
	  width: 20%;
  }
  a{
	width: 100%;
	display: inline-block;
    text-align: center;
    color: #717075;
  }
  li:nth-child(1) a{
    color: #EA4B47;
  }
  p{
    display: inline-block;
    margin-bottom: 0rem;
  }
  .p-1{
    font-size: 1.8rem;
    line-height: 1;
  }
  .p-2{
    margin-top: 0.2rem;
    font-size: 1.1rem;
    line-height: 1;
  }
</style>
