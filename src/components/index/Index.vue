<template>
  <div>
    <Lunbo></Lunbo>
    <Question></Question>
    <Supplier></Supplier>
    <Server></Server>
    <News></News>
    <Firendlink></Firendlink>
  </div>
</template>
<script>
import Lunbo from './Lunbo'
import Supplier from './Supplier'
import Server from './Server'
import News from './News'
import Firendlink from './Firendlink'
import Question from './Question'
export default {
  name: 'Index',
  data () {
    return {
      data: ''
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {
    Lunbo,
    Supplier,
    Server,
    News,
    Firendlink,
    Question
  }
}
</script>
