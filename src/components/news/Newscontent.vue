<template>
  <div>
    <div class="news_out">
      <div class="news_img">
        <img src="../../assets/img/newsbanner.jpg" width="100%" alt="">
      </div>
      <div class="news_tiels">{{ mess.nname }}</div>
      <div class="news_content" v-html="mess.ncontent"></div>
    </div>
  </div>
</template>
<script>
import { getnewscontent } from '../../api/news'
export default {
  name: 'Newscontent',
  data () {
    return {
      mess: ''
    }
  },
  mounted () {
    let nid = this.$route.params
    getnewscontent(nid).then(res => {
      this.mess = res.data
    })
  }
}
</script>
<style scoped>
  .news_out{
    width: 100%;
    min-width: 1200px;
    overflow: hidden;
  }
  .news_img>img{
    display: block;
  }
  .news_tiels{
    width: 100%;
    margin-top: 30px;
    text-align: center;
    font-size: 24px;
  }
  .news_content{
    width: 1200px;
    margin: 40px auto;
    overflow: hidden;
  }
  .news_left{
    width: 270px;
    float: left;
  }
  .content_items{
    width: 100%;
    overflow: hidden;
  }
  .content_title{
    width: 100%;
    padding: 10px 0;
    position: relative;
    overflow: hidden;
  }
  .content_title:before{
    width: 100%;
    height: 2px;
    content: "";
    background: #ccc;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
  .content_title:after{
    width: 100px;
    height: 2px;
    content: "";
    background: #4F7FB6;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
  .content_title>span{
    display: block;
    float: left;
    font-size: 24px;
    line-height: 32px;
  }
  .content_title>a{
    display: block;
    float: right;
    line-height: 4px;
  }
  .content_news{
     width: 100%;
     overflow: hidden;
   }
  .content_news>a{
    display: block;
    width: 100%;
  }
  .content_news>a>span{
    display: block;
    font-size: 14px;
    line-height: 30px;
    color: #666;
    float: left;
  }
  .content_news>a>span:first-of-type{
    width: 230px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .content_news>a>span:last-of-type{
    float: right;
  }
  .news_right{
    width: 900px;
    float: right;
  }
  .news_right>p:first-of-type{
    text-align: center;
    font-size: 24px;
  }
  .news_right>p:nth-of-type(2){
    margin-top: 30px;
  }
</style>
