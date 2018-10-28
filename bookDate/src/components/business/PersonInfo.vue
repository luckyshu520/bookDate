<template>
  <div class="person-bg">
    <div class="bg-img"></div>
    <div class="person-header"><img src="@/assets/images/personIcon.jpg" alt=""></div>
    <div class="right-userName">LuckyShu</div>
    <ul class="user-atten clearfix">
      <li class="li-option">
        <a href="">
          <strong class="option-name">粉丝</strong>
          <span class="option-number">86</span>
        </a>
      </li>
      <li class="li-option">
        <a href="">
          <strong class="option-name">关注</strong>
          <span class="option-number">12</span>
        </a>
      </li>
      <li class="li-option">
        <a href="">
          <strong class="option-name">日记</strong>
          <span class="option-number">15</span>
        </a>
      </li>
      <li class="li-option">
        <a href="">
          <strong class="option-name">签到</strong>
          <span class="option-number">+1</span>
        </a>
      </li>
    </ul>
    <div class="bottom-option"></div>
  </div>
</template>

<script>
export default {
  name: 'PersonInfo',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
