<template>
  <div class="firend">
    <div class="firend_out">
      <div class="firend_title">
        友情链接
      </div>
      <div  class="firend_link">
        <a :href="item.urls" v-for="item in ships" :key="item.id" target="_blank">
          <img :src="globaldata.imgurl+item.pic" alt="" width="180" height="60">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { firendship } from '../../api/indexs'
export default {
  name: 'Firendlink',
  data () {
    return {
      ships: ''
    }
  },
  mounted () {
    firendship().then(res => {
      this.ships = res.data
    })
  }
}
</script>
<style scoped>
  .firend{
    width: 100%;
    background: #eee;
    overflow: hidden;
  }
  .firend_out{
    width: 1200px;
    margin: 0 auto 100px;
    overflow: hidden;
  }
  .firend_title{
    font-size: 30px;
    margin-top: 60px;
    text-align: center;
  }
  .firend_link{
    width: 100%;
    overflow: hidden;
  }
  .firend_link>a{
    display: block;
    width: 180px;
    float: left;
    margin-top: 20px;
    margin-right: 20px;
  }
  .firend_link>a:last-of-type{
    margin-right: 0;
  }
  .firend_link>a>img{
    width: 100%;
  }
</style>
