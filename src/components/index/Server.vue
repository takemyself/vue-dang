<template>
  <div class="server" v-bind:style="{backgroundImage:'url('+ require('../../assets/img/index-bg-server.jpg') +')'}">
    <div class="server_out">
      <div class="server_title">
        服务优势
      </div>
      <ul>
        <li class="server_items" v-for="(item, keys) in servers" :key="item.id">
          <div class="server_mess server_num">
            {{ keys+1 }}
          </div>
          <div class="server_mess server_text">
            {{ item.content }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { servers } from '../../api/indexs'
export default {
  name: 'Server',
  data () {
    return {
      servers: ''
    }
  },
  mounted () {
    servers().then(res => {
      this.servers = res.data
    })
  }
}
</script>
<style scoped>
  .server{
    width: 100%;
    padding: 60px 0 100px 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
  }
  .server_out{
    width: 700px;
    margin: 0 auto;
    overflow: hidden;
  }
  .server_title{
    font-size: 30px;
    text-align: center;
    color: white;
  }
  .server_out>ul{
    margin-top: 50px;
  }
  .server_items{
    width: 100%;
    margin-top: 30px;
    overflow: hidden;
  }
  .server_mess{
    float: left;
    color: white;
  }
  .server_text{
    width: 626px;
  }
  .server_num{
    width: 54px;
    height: 54px;
    border-radius: 50%;
    font-size: 30px;
    border: 1px solid white;
    text-align: center;
    line-height: 54px;
    margin-right: 20px;
  }
  .server_text{
    line-height: 28px;
  }
</style>
