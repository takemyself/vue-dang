<template>
  <div id="lunbo">
    <div class="swiper-container" id="swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in data" :key="item.id">
          <img :src="globaldata.imgurl+item.pic" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div><!--左箭头-->
      <div class="swiper-button-next"></div><!--右箭头-->
    </div>
    <div class="cateout">
      <div class="cate_box">
        <div class="cate_content">
          <router-link :to="{path:'/server/company/'+item.cid}" v-for="item in cate" :key="item.cid">{{ item.cname }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { loadScript } from '../../assets/js/map'
import { swiperimgs, category } from '../../api/indexs'
export default {
  name: 'Lunbo',
  data () {
    return {
      data: '',
      cate: ''
    }
  },
  mounted () {
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.1.6/js/swiper.min.js', 'inswiper', function (res) {
      // eslint-disable-next-line
      let mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    })
    swiperimgs().then(res => {
      this.data = res.data
    })
    category().then(res => {
      this.cate = res.data
    })
  },
  components: {
  }
}
</script>

<style scoped>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.1.6/css/swiper.min.css';
  #lunbo{
    width: 100%;
    height: 540px;
    position: relative;
    overflow: hidden;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide>img{
    display: block;
    width: 100%;
    min-height: 540px;
  }
  .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
    background-image:url("../../assets/mast/right.png")
  }
  .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
    background-image:url("../../assets/mast/left.png")
  }
  .swiper-button-next, .swiper-button-prev{
  }
  .cateout{
    width: 100%;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .cate_box{
    width: 1200px;
    height: 0;
    margin: 0 auto;
  }
  .cate_content{
    padding: 30px 0;
    width: 280px;
    background: rgba(0,0,0,0.7);
  }
  .cate_content>a{
    display: block;
    width: 100%;
    letter-spacing:3px;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    color: white;
    overflow: hidden;
  }
  .cate_content>a:hover{
    background: #1f7ebf;
  }
</style>
