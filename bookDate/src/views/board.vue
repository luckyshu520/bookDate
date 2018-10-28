<template>
  <!--留言板-->
  <div class="board-box">
      <div class="board-write">
          <div class="board-write-title">留下寄语吧</div>
          <div class="board-write-content">
              <form action="">
                  <textarea name="" class="board-text"></textarea>
                  <input type="submit" value="留言" class="board-submit">
              </form>
          </div>
      </div>
      <div class="board-messages">
          <div class="board-message-info">留言<em>100</em></div>
          <div class="board-message-items">
              <div class="board-message-item">
                  <div class="board-message-person">
                      <span class="board-person-icon">
                          <img src="@/assets/images/zhao.jpg" alt="">
                      </span>
                      <span class="board-person-name">赵丽颖：</span>
                  </div>
                  <div class="board-message-content">来看你了。</div>
                  <div class="board-message-action clearfix">
                      <span class="board-message-action-time">2018-8-8 22:52:01</span>
                      <span class="board-message-action-name">删除</span>
                  </div>
              </div>
          </div>
          <div class="board-message-items">
              <div class="board-message-item">
                  <div class="board-message-person">
                      <span class="board-person-icon">
                          <img src="@/assets/images/zhao.jpg" alt="">
                      </span>
                      <span class="board-person-name">赵丽颖：</span>
                  </div>
                  <div class="board-message-content">来看你了。</div>
                  <div class="board-message-action clearfix">
                      <span class="board-message-action-time">2018-8-8 22:52:01</span>
                      <span class="board-message-action-name">删除</span>
                  </div>
              </div>
          </div>
          <div class="board-message-items">
              <div class="board-message-item">
                  <div class="board-message-person">
                      <span class="board-person-icon">
                          <img src="@/assets/images/zhao.jpg" alt="">
                      </span>
                      <span class="board-person-name">赵丽颖：</span>
                  </div>
                  <div class="board-message-content">来看你了。</div>
                  <div class="board-message-action clearfix">
                      <span class="board-message-action-time">2018-8-8 22:52:01</span>
                      <span class="board-message-action-name">删除</span>
                  </div>
              </div>
          </div>
          <div class="board-message-items">
              <div class="board-message-item">
                  <div class="board-message-person">
                      <span class="board-person-icon">
                          <img src="@/assets/images/zhao.jpg" alt="">
                      </span>
                      <span class="board-person-name">赵丽颖：</span>
                  </div>
                  <div class="board-message-content">来看你了。</div>
                  <div class="board-message-action clearfix">
                      <span class="board-message-action-time">2018-8-8 22:52:01</span>
                      <span class="board-message-action-name">删除</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="dynamic-page">
          <div class="dynamic-page-inner">
              <a href="" class="page-pre"><span>上一页</span></a>
              <a href="" class="page-number">1</a>
              <a href="" class="page-number">2</a>
              <a href="" class="page-number">3</a>
              <a href="" class="page-number">4</a>
              <a href="" class="page-number">5</a>
              <a href="" class="page-number">6</a>
              <a href="" class="page-number">...</a>
              <a href="" class="page-number">8</a>
              <a href="" class="page-next"><span>下一页</span></a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'board',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
