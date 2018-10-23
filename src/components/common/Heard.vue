<template>
  <div class="heardout">
    <ul>
      <li class="logo">
        <router-link to="/">
          <img src="../../assets/mast/logo.png" alt="">
        </router-link>
      </li>
      <li class="nav">
        <router-link to="/index">首页</router-link>
        <router-link to="/server/company/0">找服务商</router-link>
        <router-link to="/news">新闻资讯</router-link>
        <!--<router-link to="/shop">商城</router-link>-->
        <router-link to="/about">关于当日</router-link>
        <router-link to="/contact">联系我们</router-link>
      </li>
      <li class="regis">
        <router-link to="/login">登录</router-link>
        <router-link to="">|</router-link>
        <router-link to="/regis">注册</router-link>
      </li>
      <li class="mess">
        客服电话：{{ mess }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Heard',
  data () {
    return {
      logos: '../../assets/mast/logo.png'
    }
  },
  props: ['mess'],
  mounted: function () {
  },
  methods: {
  }
}
</script>

<style scoped>
  .router-link-active{
    color: #1779bd!important;
  }
  .heardout{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    background: white;
  }
  .heardout>ul{
    overflow: hidden;
  }
  .heardout>ul>li{
    /*font-weight: 700;*/
    overflow: hidden;
  }
  .heardout>ul>.logo{
    float: left;
    line-height: 0;
  }
  .nav{
    margin-left: 50px;
    font-size: 0;
    float: left;
    vertical-align: middle;
  }
  .nav>a{
    display: inline-block;
    font-size: 16px;
    padding: 0 20px;
    line-height: 60px;
  }
  .mess{
    line-height: 60px;
    float: right;
    margin-right: 50px;
  }
  .regis{
    float: right;
    font-size: 0;
  }
  .regis>a{
    display: inline-block;
    font-size: 16px;
    color: #1779bd;
    line-height: 60px;
    padding: 0 5px;
  }
</style>
