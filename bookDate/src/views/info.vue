<template>
  <div class="info-update">
      <div class="pass-box">
          <div class="pass-title">
            <div class="top-img">
              <img src="@/assets/images/personIcon.jpg" alt="" class="photo">
              <input type="file" name="" id="" alt="添加图片" class="paper-getImg">
            </div>
          </div>
          <div class="pass-body">
              <table class="pass-table">
                  <tr>
                      <td>出生日期：</td>
                      <td><input type="date" name="" class="oldPass" ></td>
                  </tr>
                  <tr>
                      <td>性别：</td>
                      <td><input type="text" name="" class="newPass"></td>
                  </tr>
                  <tr>
                      <td>个性签名:</td>
                      <td><input type="text" name="" class="newPass"></td>
                  </tr>
                  <tr>
                      <td>简介:</td>
                      <td><textarea name="" class="intrandution"></textarea></td>
                  </tr>
                  <tr class="pass-action" >
                      <td colspan="2"><input type="submit" value="确认" class="pass-action-bt"></td>
                  </tr>
              </table>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'info',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .info-update {
    padding-top: 80px;
  }
   .pass-box {
    width: 656px;
    margin: 0px auto 0;
    background: #fff;
    border-radius: 2px;
    font: 12px/1.3 'Arial','Microsoft YaHei';
}
.pass-table {
    margin: 0 auto;
}
.pass-title {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: #d9d9d9;
    position: relative;
    font-size: 14px;
    width: 656px;
    height: 205px;
    background-size: cover;
    background-image: url("../assets/images/wall.jpg");
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
.intrandution {
    display: block;
    width: 400px;
    height: 60px;
    border:  1px solid #ebebeb;
}
.top-img {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  overflow: hidden;
  .photo {
    width: 100%;
    height: 100%;
  }
  .paper-getImg {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    top: 0;
    left: 0;
  }
}

</style>
