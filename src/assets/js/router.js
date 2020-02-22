import VueRouter from 'vue-router'
import index from '../../component/index.vue'
import home from '../../component/home.vue'
import cate from '../../component/cate.vue'
import cart from '../../component/cart.vue'
import member from '../../component/member.vue'
import footer from '../../component/footer.vue'
import nanzi from '../../component/nanzi.vue'
import nvzi from '../../component/nvzi.vue'
import peijian from '../../component/peijian.vue'
import ertong from '../../component/ertong.vue'
import pinpai from '../../component/pinpai.vue'
import login from '../../component/login.vue'
export default new VueRouter({
  routes:[
    {
      path:'/',component:index,
      children:[
        {
          path:'/home',component:home,
        }
      ],
      redirect:'/home'
    },
    {
      path:'/cate',component:cate,
      children:[
        {
          path:'/nanzi',component:nanzi
        },
        {
          path:'/nvzi',component:nvzi,
        },
        {
          path:'/peijian',component:peijian,
        },
        {
          path:'/ertong',component:ertong,
        },
        {
          path:'/pinpai',component:pinpai,
        }
      ]
    },
    {
      path:'/cart',component:cart,
    },
    {
      path:'/member',component:member,
    },
    {
      path:'/footer',component:footer,
    },
    {
      path:'/login',component:login,
    }
  ]
})
