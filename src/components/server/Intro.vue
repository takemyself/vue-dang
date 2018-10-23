<template>
  <div class="intro">
    <div class="intro_out">
      <div class="intro_img">
        <img src="../../assets/mast/intro.png" alt="">
        <div class="intro_con">
          <p>Who we are,what we do and how we do it</p>
          <div class="intro_cate">
            <div class="intro_cate_img intro_cate_logo">
              <img :src="logoimg" alt="">
            </div>
            <div class="intro_cate_img intro_cate_cate" v-bind:class="{intro_active:id}" @click="id=true">
              <img src="../../assets/mast/intro-logo.png" alt="">
              <span>公司简介</span>
            </div>
            <div class="intro_cate_img intro_cate_cate" v-bind:class="{intro_active:!id}" @click="id=false">
              <img src="../../assets/mast/intro-logo2.png" alt="">
              <span>业务内容</span>
            </div>
          </div>
        </div>
      </div>
      <div class="intro_mess" v-show="id">
        <div class="intro_title">
          公司介绍
        </div>
        <div class="intro_content" v-html="com.scontent"></div>
      </div>
      <div class="intro_intro_content" v-show="!id">
        <div class="intro_intro">
          <div class="intro_title">
            业务介绍
          </div>
          <div class="intro_content">
            <ul>
              <li class="intro_cate_content" v-for="v in mess" v-bind:key="v.wid" @click="sta=v.wid">
                <img :src="globaldata.imgurl+v.wpic" alt="">
                <span>{{ v.wname }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="intro_intro">
          <div class="intro_title">
            业务详情
          </div>
          <div class="intro_content" v-for="v in mess" v-bind:key="v.wid" v-show="sta==v.wid" v-html="v.wcontent"></div>
        </div>
      </div>
      <router-link class="intro_sub" to="/server/sub">
        立即咨询
      </router-link>
    </div>
  </div>
</template>
<script>
import { getServerContent } from '../../api/servers'
export default {
  name: 'Intro',
  data () {
    return {
      id: true,
      sta: 1,
      mess: '',
      com: '',
      logoimg: ''
    }
  },
  mounted () {
    let sid = this.$route.params
    getServerContent(sid).then(res => {
      this.mess = res.data.works
      this.com = res.data.com
      this.logoimg = this.globaldata.imgurl + res.data.com.spic
    })
  }
}
</script>
<style scoped>
  .intro{
    width: 100%;
    background: #f4f4f4;
    overflow: hidden;
  }
  .intro_out{
    width: 1200px;
    margin: 0 auto 100px;
    overflow: hidden;
  }
  .intro_img{
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .intro_img>img{
    display: block;
    width: 100%;
  }
  .intro_mess{
    width: 100%;
    padding: 0 100px;
    background: white;
    margin-top: 20px;
    overflow: hidden;
  }
  .intro_intro_content{
    width: 100%;
    overflow: hidden;
  }
  .intro_intro{
    width: 100%;
    padding: 0 100px;
    background: white;
    margin-top: 20px;
    overflow: hidden;
  }
  .intro_con{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .intro_con>p{
    color: white;
    font-size: 22px;
    margin-top: 72px;
    padding-left: 80px;
  }
  .intro_cate{
    width: 100%;
    height: 124px;
    padding: 0 50px;
    background: rgba(0,0,0,0.2);
    margin-top: 50px;
    overflow: hidden;
  }
  .intro_cate_img{
    float: left;
  }
  .intro_cate_logo{
    width: 700px;
  }
  .intro_cate_logo>img{
    display: block;
    width: 142px;
    height: 38px;
    margin-top: 43px;
  }
  .intro_cate_cate{
    width: 94px;
    height: 100%;
    text-align: center;
    color: white;
    cursor: pointer;
  }
  .intro_cate_cate>img{
    display: block;
    margin: 25px auto;
  }
  .intro_active{
    background: #1f7ebf;
  }
  .intro_title{
    width: 112px;
    line-height: 42px;
    background: #1f7ebf;
    color: white;
    text-align: center;
    margin-top: 30px;
    position: relative;
  }
  .intro_title:after{
    display: block;
    width: 0;
    height: 0;
    content: "";
    border-top: 10px solid #1f7ebf;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    left: 80px;
    bottom: -8px;
  }
  .intro_content{
    width: 100%;
    margin-top: 30px;
    padding-bottom: 50px;
    overflow: hidden;
  }
  .intro_cate_content{
    margin-right: 30px;
    float: left;
    text-align: center;
    cursor: pointer;
  }
  .intro_cate_content>img{
    display: block;
  }
  .intro_cate_content>span{
    line-height: 40px;
  }
  .intro_form{
    width: 100%;
    margin-top: 20px;
    background: white;
    overflow: hidden;
  }
  .intro_sub{
    display: block;
    width: 583px;
    line-height: 56px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    background: #1f7ebf;
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
  }
  .pro_content{
    width: 920px;
    margin: 0px auto 50px;
    overflow: hidden;
  }
  .pro_title{
    width: 100%;
    height: 40px;
    margin-top: 30px;
    overflow: hidden;
  }
  .pro_title_out{
    width: 500px;
    height: 2px;
    background: black;
    margin: 20px auto;
    position: relative;
    text-align: center;
  }
  .pro_title_out>span{
    display: block;
    width: 300px;
    position: absolute;
    left: 50%;
    top: -20px;
    transform: translateX(-50%);
    font-size: 36px;
    line-height: 40px;
    background: white;
  }
  .pro_title_two{
    text-align: center;
    color: #ccc;
    line-height: 30px;
    overflow: hidden;
  }
  .pro_input{
    width: 980px;
    overflow: hidden;
  }
  .pro_input>input{
    display: block;
    width: 430px;
    height: 56px;
    font-size: 18px;
    margin: 20px 60px 0 0;
    border: 1px solid #ccc;
    float: left;
    padding-left: 10px;
  }
  .pro_input>input::placeholder{
    font-size: 14px;
  }
  .pro_mess,.pro_sub{
    margin-top: 20px;
    overflow: hidden;
  }
  #pro_text{
    width: 100%;
    height: 250px;
    padding: 15px;
    resize:none;
    border: 1px solid #ccc;
    outline: none;
  }
  .pro_sub>span{
    display: block;
    width: 583px;
    line-height: 56px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    background: #1f7ebf;
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
  }
</style>
