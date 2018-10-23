<template>
  <div class="supplier">
    <h2>找供应商</h2>
    <div class="suppliercout">
      <ul>
        <li class="supplier_items" v-for="item in cate" :key="item.cid">
          <router-link :to="{path:'/server/company/'+item.cid}">
            <div class="supplier_icon">
              <img :src="globaldata.imgurl+item.cpic" alt="">
            </div>
            <div class="supplier_out">
              <div class="supplier_img">
                <img :src="globaldata.imgurl+item.npic" alt="">
                <span class="supplier_text">
                {{ item.cname }}
              </span>
              </div>
              <div class="supplier_content">
                <div class="supplier_content_text">
                  {{ item.cintro }}
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { category } from '../../api/indexs'
export default {
  name: 'Supplier',
  data () {
    return {
      cate: ''
    }
  },
  mounted () {
    category().then(res => {
      this.cate = res.data
    })
  }
}
</script>
<style scoped>
  .supplier{
    width: 100%;
    background: #eee;
    overflow: hidden;
  }
  h2{
    font-weight: 400;
    font-size: 30px;
    line-height: 90px;
    margin-top: 30px;
    text-align: center;
  }
  .suppliercout{
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 60px;
    overflow: hidden;
  }
  .supplier_items{
    width: 270px;
    padding-top: 41px;
    float: left;
    margin-right: 40px;
    margin-top: 30px;
    position: relative;
    overflow: hidden;
  }
  .supplier_items:nth-of-type(4n){
    margin-right: 0;
  }
  .supplier_icon{
    width: 82px;
    height: 82px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 94px;
    z-index: 1;
    overflow: hidden;
  }
  .supplier_img{
    width: 100%;
    height: 140px;
    position: relative;
    overflow: hidden;
  }
  .supplier_img:after{
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
  }
  .supplier_img>img{
    width: 100%;
  }
  .supplier_text{
    display: block;
    color: white;
    line-height: 25px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    border-bottom: 2px solid white;
  }
  .supplier_content{
    width: 100%;
    padding: 42px 15px;
    background: white;
    overflow: hidden;
  }
  .supplier_content_text{
    line-height: 25px;
    height: 75px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>
