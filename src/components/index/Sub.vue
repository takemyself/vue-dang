<template>
  <div class="sub" v-bind:style="{backgroundImage:'url('+ require('../../assets/mast/sub.jpg') +')'}">
    <div class="sub_form">
      <div class="sub_title">
        提交信息
      </div>
      <div class="sub_title_two">
        个人信息
      </div>
      <div class="sub_person">
        <div class="sub_person_input">
          <span class="sub_name">姓名：</span>
          <input type="text">
        </div>
        <div class="sub_person_input">
          <span class="sub_name">公司：</span>
          <input type="text">
        </div>
        <div class="sub_person_input">
          <span class="sub_name">电话：</span>
          <input type="text">
        </div>
        <div class="sub_person_input">
          <span class="sub_name">地址：</span>
          <input type="text">
        </div>
      </div>
      <div class="sub_title_two">
        业务详情（可多选）
      </div>
      <div class="sub_person">
        <span class="sub_name">行业：</span>
        <div class="sub_cate">
          <ul>
            <li>注册服务</li>
            <li>注册服务</li>
            <li>注册服务</li>
            <li>注册服务</li>
            <li>注册服务</li>
            <li>注册服务</li>
            <li>注册服务</li>
            <li>注册服务</li>
            <li>注册服务</li>
            <li>注册服务</li>
            <li>注册服务</li>
            <li>注册服务</li>
          </ul>
        </div>
      </div>
      <div class="sub_person">
        <span class="sub_name">IT服务</span>
        <ul class="sub_ul">
          <li class="sub_cate_item">网站建设</li>
          <li class="sub_cate_item">网站建设</li>
          <li class="sub_cate_item">网站建设</li>
          <li class="sub_cate_item">网站建设</li>
          <li class="sub_cate_item">网站建设</li>
        </ul>
      </div>
      <div class="sub_person">
        <span class="sub_name">网站建设</span>
        <ul class="sub_ul">
          <li class="sub_cate_item">网站建设</li>
          <li class="sub_cate_item">网站建设</li>
          <li class="sub_cate_item">网站建设</li>
          <li class="sub_cate_item">网站建设</li>
          <li class="sub_cate_item">网站建设</li>
        </ul>
      </div>
      <div class="sub_person">
        <span class="sub_name">留言：</span>
        <textarea name="" id="sub_text" cols="30" rows="10"></textarea>
      </div>
      <div class="sub_sub">
        提交信息
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sub'
}
</script>
<style>
  .sub{
    width: 100%;
    max-width: 1920px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center  center;
    overflow: hidden;
  }
  .sub_form{
    width: 1200px;
    margin: 30px auto 100px;
    border-radius: 10px;
    padding-bottom: 50px;
    background: rgba(0,0,0,0.3);
    overflow: hidden;
  }
  .sub_title {
    width: 100%;
    background: black;
    color: white;
    text-align: center;
    font-size: 24px;
    line-height: 68px;
    overflow: hidden;
  }
  .sub_title_two{
    width: 100%;
    color: white;
    text-align: center;
    font-size: 18px;
    margin-top: 30px;
    overflow: hidden;
  }
  .sub_person{
    width: 100%;
    padding: 0 152px;
    margin-top: 30px;
    overflow: hidden;
  }
  .sub_name{
    display: block;
    width: 66px;
    float: left;
    color: #cecdcd;
    line-height: 54px;
  }
  .sub_cate{
    width: 830px;
    float: left;
  }
  .sub_cate li{
    float: left;
    width: 150px;
    line-height: 54px;
    border-radius: 5px;
    text-align: center;
    background: #1f7ebf;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    color: white;
    overflow: hidden;
  }
  .sub_cate li:nth-of-type(5n){
    margin-right: 0;
  }
  .sub_person_input{
    width: 432px;
    float: left;
    margin-right: 30px;
    margin-bottom: 30px;
  }
  .sub_person_input:nth-of-type(2n){
    margin-right: 0;
  }
  .sub_person_input>input{
    display: block;
    width: 366px;
    float: left;
    line-height: 54px;
    background: white;
    border-radius: 5px;
    overflow: hidden;
    padding-left: 5px;
  }
  .sub_ul{
    width: 830px;
    padding-left: 10px;
    float: left;
  }
  .sub_cate_item{
    width: 110px;
    float: left;
    margin-right: 60px;
    line-height: 54px;
    text-align: center;
    color: white;
    border-bottom: 2px solid #1f7ebf;
    overflow: hidden;
  }
  .sub_cate_item:nth-of-type(5n){
    margin-right: 0;
  }
  #sub_text{
    display: block;
    border-radius: 5px;
    width: 830px;
    height: 328px;
    margin-top: 18px;
    padding: 15px;
    font-size: 16px;
    float: left;
    resize: none;
    outline: none;
    overflow: hidden;
  }
  .sub_sub{
    width: 266px;
    margin: 30px auto;
    background: #1f7ebf;
    border-radius: 5px;
    text-align: center;
    color: white;
    font-size: 18px;
    line-height: 54px;
    overflow: hidden;
    cursor: pointer;
  }
</style>
