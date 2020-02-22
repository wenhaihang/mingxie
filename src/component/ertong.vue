<template>
  <main id="nanzi">
    <div class="span1">
        <dl>
          <dt><router-link to="">专区></router-link></dt>
          <dd>
            <ul>
              <li v-for="(v,i) in list">
                <router-link to="">
                  <img :src="v.images" alt="">
                  <span>{{v.con}}</span>
                </router-link>
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt><router-link to="">品牌></router-link></dt>
          <dd>
            <ul>
              <li v-for="(v,i) in list1">
                <router-link to="">
                  <img :src="v.images" alt="">
                  <span>{{v.con}}</span>
                </router-link>
              </li>
            </ul>
          </dd>
        </dl>
    </div>
  </main>
</template>

<script>
  export default{
    data(){
      return{
        list:[
          {
            images:require('../assets/images/ertong-1.jpg'),
            con:'儿童专区'
          },
          {
            images:require('../assets/images/ertong-1.jpg'),
            con:'儿童专区'
          },
          {
            images:require('../assets/images/ertong-1.jpg'),
            con:'儿童专区'
          },
          {
            images:require('../assets/images/ertong-1.jpg'),
            con:'儿童专区'
          }
        ],
        list1:[
          {
            images:require('../assets/images/ertong-2.jpg'),
            con:'adidas'
          },
          {
            images:require('../assets/images/ertong-2.jpg'),
            con:'adidas'
          },
          {
            images:require('../assets/images/ertong-2.jpg'),
            con:'adidas'
          },
          {
            images:require('../assets/images/ertong-2.jpg'),
            con:'adidas'
          }
        ]
      }
    }
  }
</script>

<style>
</style>
<style scoped>
  .span1{
    overflow: hidden;
  }
  .span1 dl{
    margin-top: .56rem;
    margin-bottom: 0;
  }
  .span1 dl dt{
    margin-bottom: .32rem;
    padding-left: .3rem;
    height: 2.64rem;
    line-height: 2.64rem;
    font-size:1.4rem ;
  }
  .span1 dt a{
    color: #999999;
    line-height: 2.64rem;
    font-weight: 200;
  }
  .span1 dl dd{
    width: 100%;
    overflow: hidden;
  }
  .span1 dd li{
    float: left;
    margin: .6rem .6rem 0 0;
    width: 31%;
    background-color: #FFFFFF;
    height: 50%;
  }
  .span1 dd li:nth-child(3n+3){
    margin-right: 0;
  }
  .span1 dd a{
    display: block;
    padding: 0;
    width: 100%;
    height: 100%;
    color: #999999;
    text-align: center;
  }
  .span1 dd img{
    width: 100%;
  }
</style>