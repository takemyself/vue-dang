<template>
  <div class="about">
    <div class="about_img">
      <img src="../../assets/mast/about.jpg" alt="">
    </div>
    <div class="about_out">
      <!--<div class="about_cate">-->
        <!--<ul>-->
          <!--<li class="about_items">-->
            <!--<div class="about_cate_img">-->
              <!--<img src="../../assets/img/about1.png" alt="">-->
            <!--</div>-->
            <!--<div class="about_title">-->
              <!--企业文化-->
            <!--</div>-->
            <!--<div class="about_text">-->
              <!--企业文化企业文化企业文化企业文化企业文化企业文化企业文化-->
              <!--企业文化企业文化企业文化企业文化企业文化企业文化企业文化-->
              <!--企业文化企业文化企业文化企业文化企业文化企业文化企业文化-->
            <!--</div>-->
          <!--</li>-->
          <!--<li class="about_items">-->
            <!--<div class="about_cate_img">-->
              <!--<img src="../../assets/img/about1.png" alt="">-->
            <!--</div>-->
            <!--<div class="about_title">-->
              <!--企业文化-->
            <!--</div>-->
            <!--<div class="about_text">-->
              <!--企业文化企业文化企业文化企业文化企业文化企业文化企业文化-->
              <!--企业文化企业文化企业文化企业文化企业文化企业文化企业文化-->
              <!--企业文化企业文化企业文化企业文化企业文化企业文化企业文化-->
            <!--</div>-->
          <!--</li>-->
          <!--<li class="about_items">-->
            <!--<div class="about_cate_img">-->
              <!--<img src="../../assets/img/about1.png" alt="">-->
            <!--</div>-->
            <!--<div class="about_title">-->
              <!--企业文化-->
            <!--</div>-->
            <!--<div class="about_text">-->
              <!--企业文化企业文化企业文化企业文化企业文化企业文化企业文化-->
              <!--企业文化企业文化企业文化企业文化企业文化企业文化企业文化-->
              <!--企业文化企业文化企业文化企业文化企业文化企业文化企业文化-->
            <!--</div>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    </div>
    <div class="about_content" v-bind:style="{backgroundImage:'url('+ require('../../assets/mast/about_bg.png') +')'}">
      <div class="about_out">
        <div class="about_content_title">
          关于当日
        </div>
        <div class="about_content_title_en">
          ABOUT US
        </div>
        <div class="about_content_content" v-html="mess.about">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  props: ['mess']
}
</script>
<style scoped>
  .about{
    width: 100%;
    overflow: hidden;
  }
  .about_img{
    width: 100%;
    overflow: hidden;
  }
  .about_img>img{
    width: 100%;
  }
  .about_out{
    width: 1200px;
    margin: 0px auto 60px;
    overflow: hidden;
  }
  .about_cate{
    width: 1233px;
    overflow: hidden;
  }
  .about_items{
    width: 367px;
    float: left;
    margin-right: 33px;
  }
  .about_cate_img{
    width: 100%;
    overflow: hidden;
  }
  .about_cate_img>img{
    display: block;
    width: 100%;
  }
  .about_title{
    width: 100%;
    font-size: 20px;
    text-align: center;
    color: #363636;
    font-weight: 700;
    margin-top: 30px;
    overflow: hidden;
  }
  .about_text{
    width: 100%;
    text-align: center;
    margin-top: 20px;
    height: 75px;
    line-height: 25px;
    font-size: 14px;
    color: #666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .about_content{
    width: 100%;
    overflow: hidden;
  }
  .about_content_title{
    width: 100%;
    font-size: 24px;
    margin-top: 50px;
    text-align: center;
    overflow: hidden;
  }
  .about_content_title_en{
    width: 100%;
    padding: 0 100px;
    font-size: 14px;
    color: #999;
    text-align: center;
    margin-top: 10px;
    position: relative;
  }
  .about_content_title_en:before{
    width: 30%;
    height: 1px;
    content: "";
    background: #999;
    position: absolute;
    top: 7px;
    left: 10%;
  }
  .about_content_title_en:after{
    width: 30%;
    height: 1px;
    content: "";
    background: #999;
    position: absolute;
    top: 7px;
    right: 10%;
  }
  .about_content_content{
    width: 100%;
    margin-top: 50px;
  }
</style>
