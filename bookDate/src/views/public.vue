<template>
  <div class="write">
    <div class="w">
        <div class="write-content">
            <div class="write-paper">
                <div class="paper-header">
                    <h3>发表读书心得</h3>
                </div>
                <form action="">
                    <div class="paper-img">
                        <div class="paper-img-box">
                            <img src="" alt="" class="paper-show">
                            <i class="paper-img-icon glyphicon glyphicon-camera"></i>
                            <input type="file" name="" id="" alt="添加图片" class="paper-getImg">
                        </div>
                    </div>
                    <div class="paper-body">
                        <div class="paper-content-title">
                            <div class="paper-title-input">
                                <input type="text" placeholder="请写入书名">
                            </div>
                        </div>
                        <div class="paper-content">
                            <textarea name=""  class="write-text-input"></textarea>
                        </div>
                    </div>
                    <div class="paper-action">
                        <input type="submit" value="发表" class="paper-action-bt">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import '@/styles/write.css'

export default {
  name: 'Base',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
