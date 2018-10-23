<template>
  <div class="question">
    <router-link to="/sub">
      <img src="../../assets/img/question.jpg" alt="">
      <!--<div class="question_text">-->
        <!--所有服务一站选购-->
      <!--</div>-->
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Question'
}
</script>
<style>
  .question{
    width: 1200px;
    margin: 30px auto;
    position: relative;
    overflow: hidden;
  }
  .question>a{
    display: block;
    width: 100%;
  }
  .question>a>img{
    display: block;
    width: 100%;
  }
  .question_text{
    width: 100%;
    text-align: center;
    color: white;
    font-size: 24px;
    position: absolute;
    top: 80px;
    left: 0;
    cursor: pointer;
  }
</style>
