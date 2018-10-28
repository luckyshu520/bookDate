<template>
   <div class="banner">
    <div class="w banner-inner clearfix">
        <a class="logo" href="#"><img src="@/assets/images/logo.png" alt=""></a>
        <ul class="nav-ul clearfix">
            <li class="homeLink">
                <a href="#">
                    <em class="glyphicon glyphicon-home"></em>
                    <i href="" >首页</i>
                </a>
            </li>
            <li class="centerLink">
                <a href="#">
                    <em class="glyphicon glyphicon-user"></em>
                    <i href="">个人中心</i>
                </a>
            </li>
        </ul>
        <div class="searchBar">
            <form action="">
                <input type="text" class="search-box" placeholder="在想什么呢？">
                <div class='search-icon-box'>
                  <span class="search-icon glyphicon glyphicon-search"></span>
                </div>
            </form>
        </div>
        <div class="user-box">
            <button class="loginYes">
                <span class="wapper">
                    <img src="@/assets/images/header.jpg" alt="">
                    <span class="menu">
                        <a href="">
                            <em class="glyphicon glyphicon-user"></em>
                            <i>个人中心</i>
                        </a>
                        <a href="">
                            <em class="glyphicon glyphicon-share"></em>
                            <i>退出</i>
                        </a>
                    </span>
                </span>
            </button>
            <button class="noLogin">
                <!--没登录时显示-->
                <span class="pleaseLogin">请登录</span>
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Base',
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.banner {
  position: fixed;
  top: 0;
  width: 100%;
  min-width: 1032px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  background-clip: content-box;
  z-index: 100;
}
.banner-inner {
  position: relative;
  height: 52px;
  padding-left: 64px;
}
.logo {
  position: absolute;
  left: 0;
  top: 2px;
}
.nav-ul {
  margin-right: 18px;
  margin-left: 27px;
  float: left;
}
.nav-ul li {
  line-height: 52px;
  float: left;
  padding-right: 30px;
}
.nav-ul li em {
  color: #8590a6;
}

/*搜索框*/
.searchBar {
  float: left;
  margin-top: 9px;
  position: relative;
}
.search-box {
  width: 400px;
  height: 34px;
  line-height: 34px;
  padding: 4px 20px 4px 10px;
  font-size: 14px;
  background: #f6f6f6;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-sizing: border-box;
}
.search-icon-box {
  position: absolute;
  display: inline;
  right: 11px;
  top: 10px;
}
.search-icon {
  color: #2aabd2;
  cursor: pointer;
}

.user-box {
  position: relative;
  float: right;
  margin-top: 10px;
}
.loginYes img {
  width: 30px;
  height: 30px;
}
.loginYes {
  display: none;
}
.noLogin {
  display: block;
}
span.pleaseLogin {
  display: block;
  line-height: 52px;
  background: #ffffff;
}
</style>
