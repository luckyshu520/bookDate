<template>
   <div class="home-page">
        <div class="w">
            <div class="person-wall">
                <div class="top-img">
                    <a href="#">
                        <img src="@/assets/images/personIcon.jpg" alt="" class="photo">
                    </a>
                </div>
                <div class="wall-userName"><em>LuckyShu</em></div>
                <div class="wall-signature"><em>发现爱，用力爱,you can do</em></div>
                <div class="attention">
                    <button class="addHe">关注</button>
                </div>
            </div>
            <div class="home-content clearfix">
                <div class="content-left">
                    <div class="content-header">
                        <ul class="header-lists clearfix">
                            <li class="header-list">
                                <a href="" class="header-list-name">动态</a>
                            </li>
                            <li class="header-list">
                                <a href="" class="header-list-name">笔记</a>
                                <span>2</span>
                            </li>
                            <li class="header-list">
                                <a href="" class="header-list-name">留言板</a>
                                <span>3</span>
                            </li>
                            <li class="header-list">
                                <a href="" class="header-list-name">关注</a>
                                <span>30</span>
                            </li>
                            <li class="header-list">
                                <a href="" class="header-list-name">粉丝</a>
                                <span>200</span>
                            </li>
                        </ul>
                    </div>
                    <div class="content-template">
                      <router-view></router-view>
                    </div>
                </div>
                <div class="content-right">
                    <div class="personal-info">
                        <div class="info-title">个人信息</div>
                        <ul class="info-lists">
                            <li class="info-list clearfix">
                                <span class="pt-title">昵称：</span>
                                <span class="pt-detail">LuckyShu</span>
                             </li>
                            <li class="info-list clearfix">
                                <span class="pt-title">生日：</span>
                                <span class="pt-detail">1995-11-17</span>
                            </li>
                            <li class="info-list clearfix">
                                <span class="pt-title">性别：</span>
                                <span class="pt-detail">男</span>
                            </li>
                            <li class="info-list clearfix">
                                <span class="pt-title">简介：</span>
                                <span class="pt-detail">摩羯座一枚</span>
                            </li>
                        </ul>
                        <div class="info-bt">
                            <button class="info-update">修改</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '@/styles/home.css'
export default {
  name: 'home',
  data () {
    return {

    }
  }
}
</script>
import '@/styles/home.css'
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
