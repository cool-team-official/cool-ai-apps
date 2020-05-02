<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="info-title">程序员到底要不要读研，过来人给你几点建议程序员到底要不要读研，过来人给你几点建议程序员到底要不要读研，过来人给你几点建议</div>
        <div class="info-tip">知识</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="padding-top:10px;">
        <img
          class="list-header"
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2056493224,2680815097&fm=26&gp=0.jpg"
        />
        <div class="list-name">UMU</div>
        <div class="info-time">发布于2020年4月11日 星期六</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="info-text">程序员到底要不要读研，过来人给你几点建议程序员到底要不要读研，过来人给你几点建议程序员到底要不要读研，过来人给你几点建议</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="info-zan">
          <i class="list-zan iconfont icon-zan"></i>
          <div class="list-num">10</div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-input type="textarea" v-model="form.desc" placeholder="写下你的评论"></el-input>
      </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
          <el-button type="primary">发布</el-button>
        </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="replay-title">全部评论</div>
      </el-col>
    </el-row>
    <div class="replay">
        <el-row>
          <el-col :span="24" style="padding-top:10px;">
            <img
              class="list-header"
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2056493224,2680815097&fm=26&gp=0.jpg"
            />
            <div class="list-name">王尔尔</div>
            <div class="info-time">13:59</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="info-text">程序员到底要不要读研，过来人给你几点建议程序员到底要不要读研，过来人给你几点建议程序员到底要不要读研，过来人给你几点建议</div>
          </el-col>
        </el-row>
    </div>
    <div class="replay">
        <el-row>
          <el-col :span="24" style="padding-top:10px;">
            <img
              class="list-header"
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2056493224,2680815097&fm=26&gp=0.jpg"
            />
            <div class="list-name">王尔尔</div>
            <div class="info-time">13:59</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="info-text">程序员到底要不要读研，过来人给你几点建议程序员到底要不要读研</div>
          </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "info",
  data() {
    return {
      form: {
        desc: ""
      }
    };
  }
};
</script>
<style scoped lang="scss">
$color: #1b1b1b;
$colorwhite: #ffffff;
$size12: 12px;
$size18: 18px;
$lineheight18: 18px;
$lineheight24: 24px;
@mixin font($color, $size, $lineheight) {
  color: $color;
  font-size: $size;
  line-height: $lineheight;
}
.info-title {
  @include font($color, $size18, $lineheight24);
  float: left;
  max-width: 90%;
}
.info-tip {
  @include font($colorwhite, $size12, $lineheight18);
  background-color: #3d15dd;
  margin-left: 5px;
  height: 18px;
  border-radius: 2px;
  float: left;
  margin-right: 5px;
  margin-top: 3px;
  padding: 0 3px;
}
.list-header {
  width: 26px;
  height: 26px;
  border-radius: 26px;
  float: left;
  margin-right: 10px;
}
.list-name {
  @include font(#1b1b1b, 14, 26px);
  float: left;
  font-weight: 300;
}
.info-time {
  @include font(#828282, 14px, 28px);
  height: 26px;
  margin-left: 10px;
  float: left;
  font-weight: 300;
}
.info-text {
  @include font($color, 14px, 26px);
  margin-top: 20px;
  text-align: left;
  font-weight: 300;
}
.info-zan {
  float: left;
  background-color: #f8f8f8;
  border-radius: 24px;
  height: 24px;
  padding: 0 10px;
  margin-top: 25px;
}
.list-zan {
  @include font(#272727, 24px, 26px);
  cursor: pointer;
  float: left;
}
.list-num {
  @include font(#272727, 14px, 26px);
  margin-left: 5px;
  float: left;
  font-weight: 300;
}
.el-textarea {
  margin-top: 30px;
  /deep/ .el-textarea__inner {
    padding: 10px 15px;
    background-color: #f8f8f8;
    border: 1px solid #ededed;
    min-height: 100px !important;
  }
}
.replay{
    padding:25px 0;
    border-bottom: 1px solid #f0f0f0;
}
.replay-title {
  @include font($color, $size18, $lineheight18);
  margin-top: 35px;
}
.el-button--primary{
    margin-top:15px;
    padding:8px 20px;
}
</style>