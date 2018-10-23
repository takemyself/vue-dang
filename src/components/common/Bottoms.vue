<template>
  <div class="bottomout">
    <div class="bottom">
      <ul>
        <li class="nav">
          <router-link to="/"><img src="../../assets/mast/logo-b.png" alt=""></router-link>
          <router-link to="/index">网站首页</router-link>
          <router-link to="">|</router-link>
          <router-link to="/server/company/0">找服务商</router-link>
          <router-link to="">|</router-link>
          <!--<router-link to="">常见问题</router-link>-->
          <router-link to="/news">新闻资讯</router-link>
          <router-link to="">|</router-link>
          <!--<router-link to="/shop">商城</router-link>-->
          <router-link to="/about">关于当日</router-link>
          <router-link to="">|</router-link>
          <router-link to="/contact">联系我们</router-link>
        </li>
        <li class="introduction">
          <div class="introduction_left">
            <p>{{ mess.company }}</p>
            <p>地址：{{ mess.address }}</p>
            <p>电话：{{ mess.phone }}</p>
            <p>邮箱：{{ mess.emails }}</p>
          </div>
          <div class="introduction_right">
            <router-link to="/">
              <img src="../../assets/mast/bottom-logo.png" width="121" height="120" alt="">
            </router-link>
            <span>扫一扫，关注公众号</span>
          </div>
        </li>
        <li class="copyright">
          {{ mess.beian }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Bottoms',
  data () {
    return {}
  },
  props: ['mess'],
  mounted () {
  }
}
</script>

<style scoped>
  .bottomout{
    width: 100%;
    padding-top: 12px;
    padding-bottom: 30px;
    background: #272727;
    overflow: hidden;
  }
  .bottom{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .nav{
    width: 100%;
    border-bottom: 1px solid white;
    font-size: 0;
  }
  .nav>a{
    display: inline-block;
    font-size: 16px;
    color: white;
    line-height: 58px;
    padding:0 5px;
    vertical-align: middle;
  }
  .nav>a>img{
    display: block;
  }
  .nav>a:first-of-type{margin-right: 20px;}
  .introduction{
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid white;
    overflow: hidden;
  }
  .introduction_left{
    float: left;
  }
  .introduction_left>p{
    color: white;
    line-height: 46px;
  }
  .introduction_right{
    padding-top: 20px;
    float: right;
    text-align: center;
  }
  .introduction_right>a{
    display: block;
  }
  .introduction_right>span{
    display: block;
    color: white;
    font-size: 12px;
  }
  .copyright{
    width: 100%;
    color: white;
    line-height: 46px;
    font-size: 12px;
  }
</style>
