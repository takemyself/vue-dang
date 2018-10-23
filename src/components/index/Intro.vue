<template>
  <div class="intro">
    <h2>平台介绍</h2>
    <ul>
      <li class="intro_items">
        <router-link to="">
          <div class="intro_img">
            <img src="../../assets/img/intro-img.png" alt="">
          </div>
          <div class="intro_tiele">
            服务商
          </div>
          <div class="intro_intro">
            简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
            简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
          </div>
        </router-link>
      </li>
      <li class="intro_items">
        <router-link to="">
          <div class="intro_img">
            <img src="../../assets/img/intro-img2.png" alt="">
          </div>
          <div class="intro_tiele">
            服务商
          </div>
          <div class="intro_intro">
            简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
            简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
          </div>
        </router-link>
      </li>
      <li class="intro_items">
        <router-link to="">
          <div class="intro_img">
            <img src="../../assets/img/intro-img3.png" alt="">
          </div>
          <div class="intro_tiele">
            服务商
          </div>
          <div class="intro_intro">
            简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
            简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Intro'
}
</script>
<style scoped>
  .intro{
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px 50px 15px;
    overflow: hidden;
  }
  h2{
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    line-height: 150px;
  }
  .intro>ul{
    width: 100%;
    margin-bottom: 50px;
  }
  .intro_items{
    width: 380px;
    float: left;
    margin-right: 15px;
    padding: 15px 20px 30px 20px;
    box-shadow: 0 0 10px #999;
    overflow: hidden;
  }
  .intro_items:last-of-type{
    margin-right: 0;
  }
  .intro_img{
    width: 210px;
    height: 210px;
    margin: 15px auto;
    border-radius: 50%;
    overflow: hidden;
  }
  .intro_img>img{
    width: 100%;
    height: 100%;
  }
  .intro_tiele{
    font-size: 24px;
    text-align: center;
    line-height: 40px;
  }
  .intro_intro{
    font-size: 14px;
    line-height: 20px;
    height: 40px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>
