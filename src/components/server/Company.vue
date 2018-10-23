<template>
  <div class="company">
    <div class="company_img">
      <img src="../../assets/mast/pro.jpg" alt="">
    </div>
    <div class="company_out">
      <div class="company_cate">
        <span>{{ mess.type }}</span>
      </div>
      <ul>
        <li class="company_item" v-for="item in mess.mess" :key="item.nid">
          <div class="company_mess">
            <img :src="globaldata.imgurl+item.pic" alt="">
          </div>
          <div class="company_mess">
            <ul>
              <li class="company_title">{{ item.sname }}</li>
              <li class="company_intro">成立时间：{{ item.times }}</li>
              <li class="company_intro">雇员数量：{{ item.persons }}</li>
              <li class="company_intro">
                <div class="company_yefu">业务范围：</div>
                <div class="company_yefu">
                  <span v-for="vv in item.wnames" :key="vv.sid">{{ vv }}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="company_mess">
            <router-link :to="{path: '/server/intro/'+item.sid}">
              查看详情
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getServerCate } from '../../api/servers'
export default {
  name: 'Company',
  data () {
    return {
      mess: '',
      note: ''
    }
  },
  mounted () {
    let cid = this.$route.params
    getServerCate(cid).then(res => {
      this.mess = res.data
    })
  }
}
</script>
<style scoped>
  .company{
    width: 100%;
    overflow: hidden;
  }
  .company_img{
    width: 100%;
    height: 260px;
    overflow: hidden;
  }
  .company_img>img{
    width: 100%;
  }
  .company_out{
    width: 1200px;
    margin: 30px auto 100px;
    padding-bottom: 10px;
    overflow: hidden;
  }
  .company_cate{
    width: 100%;
    border-bottom: 2px solid #1f7ebf;
  }
  .company_cate>span{
    display: block;
    width: 112px;
    text-align: center;
    color: white;
    background: #1f7ebf;
    line-height: 40px;
  }
  .company_item{
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #eee;
    margin-top: 20px;
    box-shadow: 0px 5px 5px #eee;
    overflow: hidden;
  }
  .company_mess{
    float: left;
    margin-right: 20px;
  }
  .company_mess:first-of-type{
    border-radius: 10px;
    border: 1px solid #eee;
    overflow: hidden;
  }
  .company_mess>img{
    width: 100%;
    display: block;
  }
  .company_mess:nth-of-type(2){
    width: 600px;
  }
  .company_title{
    font-size: 24px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .company_intro{
    color: #666;
  }
  .company_yefu{
    float: left;
    color: #666;
    margin-top: 10px;
  }
  .company_yefu>span{
    display: inline-block;
    border-radius: 5px;
    padding: 0 15px;
    border: 1px solid #1f7ebf;
    line-height: 36px;
    margin-right: 5px;
    overflow: hidden;
  }
  .company_mess>a{
    display: block;
    width: 132px;
    line-height: 43px;
    border-radius: 5px;
    color: white;
    background: #1f7ebf;
    text-align: center;
    margin-top: 110px;
    margin-left: 20px;
  }
</style>
