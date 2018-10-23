<template>
  <div class="news">
    <div class="news_title">
      新闻资讯
    </div>
    <ul>
      <li class="news_items" v-for="item in news" :key="item.nid">
        <router-link :to="{path:'/news/content/'+item.nid}">
          <div class="news_img">
            <img :src="globaldata.imgurl+item.pic" alt="">
          </div>
          <div class="news_content_title">
            {{ item.nname }}
          </div>
          <div class="news_content">
            {{ item.nintro }}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { getnews } from '../../api/indexs'
export default {
  name: 'News',
  data () {
    return {
      news: ''
    }
  },
  mounted () {
    getnews().then(res => {
      this.news = res.data
    })
  }
}
</script>
<style scoped>
  .news{
    width: 1200px;
    margin: 0 auto 60px;
    overflow: hidden;
  }
  .news_title{
    width: 100%;
    font-size: 30px;
    line-height: 150px;
    text-align: center;
    overflow: hidden;
  }
  .news_items{
    width: 366px;
    float: left;
    margin-right: 51px;
    overflow: hidden;
  }
  .news_items:last-of-type{
    margin-right: 0;
  }
  .news_img{
    width: 100%;
    height: 244px;
    overflow: hidden;
  }
  .news_img>img{
    width: 100%;
  }
  .news_content_title{
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .news_content{
    width: 100%;
    margin-top: 10px;
    line-height: 20px;
    height: 80px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
</style>
