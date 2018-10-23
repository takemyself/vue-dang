<template>
  <div class="sub" v-bind:style="{backgroundImage:'url('+ require('../../assets/mast/sub.jpg') +')'}">
    <div class="sub_form">
      <div class="sub_title">
        提交需求
      </div>
      <div class="sub_title_two">
        对哪种办公感兴趣？
      </div>
      <div class="sub_person">
        <span class="sub_top">注册服务</span>
        <span class="sub_top">注册服务</span>
        <span class="sub_top">注册服务</span>
      </div>
      <div class="sub_title_two">
        需要多大的面积？
      </div>
      <div class="sub_person">
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
          </ul>
        </div>
      </div>
      <div class="sub_title_two">
        哪些地方感兴趣？
      </div>
      <div class="sub_person">
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
          </ul>
        </div>
      </div>
      <div class="sub_title_two">
        填写您的个人信息
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
  /*#717171*/
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
    text-align: center;
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
    width: 896px;
    text-align: center;
    float: left;
  }
  .sub_cate li{
    float: left;
    width: 163px;
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
  .sub_top{
    display: inline-block;
    width: 197px;
    color: white;
    line-height: 54px;
    background: #1f7ebf;
    border-radius: 5px;
    margin: 0 5px;
    overflow: hidden;
  }
</style>
