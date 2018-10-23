<template>
  <div>
    <Heard :mess="mess.four"></Heard>
    <router-view :mess="mess"></router-view>
    <Bottoms :mess="mess"></Bottoms>
  </div>
</template>
<script>
import Heard from './Heard'
import Bottoms from './Bottoms'
import { getlogos } from '../../api/indexs'
export default {
  name: 'Layout',
  data () {
    return {
      mess: ''
    }
  },
  mounted () {
    getlogos().then(res => {
      this.mess = res.data
    })
  },
  components: {
    Heard,
    Bottoms
  }
}
</script>
