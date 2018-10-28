<template>
  <div class="password">
        <div class="pass-box">
            <div class="pass-title">
                <a href="#">修改密码</a>
            </div>
            <div class="pass-body">
                <table class="pass-table">
                    <tr>
                        <td >账号:</td>
                        <td><input type="text" name=""  class="account"></td>
                    </tr>
                    <tr>
                        <td>原密码:</td>
                        <td><input type="password" name="" class="oldPass" ></td>
                    </tr>
                    <tr>
                        <td>新密码:</td>
                        <td><input type="password" name="" class="newPass"></td>
                    </tr>
                    <tr class="pass-action" >
                        <td colspan="2"><input type="submit" value="确认" class="pass-action-bt"></td>
                    </tr>
                </table>
            </div>
            <div class="returnToHome">
                <a href="#">返回主页</a>
            </div>
        </div>
    </div>
</template>

<script>
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
  .pass-box {
    width: 656px;
    margin: 60px auto 0;
    background: #fff;
    border-top: 2px #fa7d3c solid;
    border-radius: 2px;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
    font: 12px/1.3 'Arial','Microsoft YaHei';
}
.pass-table {
    margin: 0 auto;
}
.pass-title {
    height: 46px;
    padding-left: 10px;
    line-height: 46px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: #d9d9d9;
    font-size: 14px;
}
.pass-box a {
    color: #eb7350;
    margin: 0 5px;
}

.pass-body {
    padding: 40px;
    width: 100%;
    height: 400px;
}
.pass-table tr {
    width: 100%;
    height: 47px;
    text-align: right;
    margin-top: 10px;
}
.pass-table input {
    display: block;
    width: 400px;
    height: 37px;
    border:  1px solid #ebebeb;
}
input.pass-action-bt {
    display: block;
    font-size: 14px;
    width: 94px;
    padding: 0 16px;
    line-height: 32px;
    color: #fff;
    background-color: #0084ff;
    text-align: center;
    cursor: pointer;
    border: 1px solid;
    border-radius: 3px;
    margin: 0 auto;
}
.returnToHome {
    height: 40px;
    text-align: right;
    line-height: 40px;
    padding-right: 10px;
    font-size: 14px;
}
</style>
