<template>
  <div>
    <div class="list-li" v-for="(item, index) in list" :key="index">
      <el-row>
        <el-col :span="24">
          <div class="list-tip">{{item.tip}}</div>
          <div class="list-title">{{item.titles}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="list-info">{{item.info}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="padding-top:10px;">
          <img
            class="list-header"
            src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2056493224,2680815097&fm=26&gp=0.jpg"
          />
          <div class="list-name">{{item.name}}</div>
          <div class="list-right">
            <i class="list-zan iconfont icon-zan"></i>
            <div class="list-num">{{item.zan}}</div>
          </div>
          <div class="list-right lsit-right-20">
            <i class="list-zan iconfont icon-pinglun"></i>
            <div class="list-num">{{item.pinglun}}</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div v-if="showLoading">加载更多</div>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      showLoading: false,
      list: [
        {
          tip: "知识",
          titles: "1111111",
          info: "为什么Http协议要用文本做协议，用二进制不更节约宽带吗?",
          name: "UMU",
          zan: 10,
          pinglun: 20
        },
        {
          tip: "知识",
          titles: "为什么Http协议要用文本做协议，用二进制不更节约宽带吗?",
          info: "为什么Http协议要用文本做协议，用二进制不更节约宽带吗?22222222",
          name: "UMU",
          zan: 100,
          pinglun: 20
        },
        {
          tip: "知识",
          titles: "为什么Http协议要用文本做协议，3333",
          info: "为什么Http协议要用文本做协议，用二进制不更节约宽带吗?33333",
          name: "UMU",
          zan: 200,
          pinglun: 20
        },
        {
          tip: "知识",
          titles: "为什么Http协议要用文本做协议，4444",
          info: "为什么Http协议要用文本做协议，用二进制不更节约宽带吗?44444",
          name: "UMU",
          zan: 105,
          pinglun: 20
        },
        {
          tip: "知识",
          titles: "为什么Http协议要用文本做协议，用二进制不更节约宽带吗5555?",
          info: "为什么Http协议要用文本做协议，用二进制不更节约宽带吗?5555555",
          name: "UMU",
          zan: 100,
          pinglun: 20
        },
        {
          tip: "知识",
          titles: "为什么Http协议要用文本做协议，66666",
          info: "为什么Http协议要用文本做协议，用二进制不更节约宽带吗?66666",
          name: "UMU",
          zan: 200,
          pinglun: 20
        },
        {
          tip: "知识",
          titles: "为什么Http协议要用文本做协议，777",
          info: "为什么Http协议要用文本做协议，用二进制不更节约宽带吗?7777777",
          name: "UMU",
          zan: 105,
          pinglun: 20
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log(111);
      this.scroll(this.list);
    },
    scroll(list) {
      let isLoading = false;
      window.onscroll = () => {
        // 距离底部200px时加载一次
        let bottomOfWindow =
          document.documentElement.offsetHeight -
            document.documentElement.scrollTop -
            window.innerHeight <=
          50;
        if (bottomOfWindow && isLoading == false) {
          isLoading = true;
          this.showLoading = true;
          let newList = [
            {
              tip: "1",
              titles: "1",
              info: "11",
              name: "UMU",
              zan: 10,
              pinglun: 20
            },
            {
              tip: "2",
              titles: "22",
              info: "22",
              name: "UMU",
              zan: 100,
              pinglun: 20
            },
            {
              tip: "33",
              titles: "33",
              info: "33",
              name: "UMU",
              zan: 200,
              pinglun: 20
            }
          ];
          setTimeout(() => {
            newList.forEach(v => {
              list.push(v);
            });

            isLoading = false;
            this.showLoading = false;
            console.log("加载成功");
          }, 800);
        }
      };
    }
  }
};
</script>

<style scoped lang="scss">
.list-li {
  margin-bottom: 20px;
  padding: 15px 0;
  border-radius: 5px;
  &:hover {
    background-color: #f8f8f8;
  }
  .list-tip {
    color: #ffffff;
    background-color: #3d15dd;
    font-size: 12px;
    line-height: 22px;
    height: 22px;
    border-radius: 2px;
    float: left;
    margin-right: 5px;
    padding: 0 6px;
  }
  .list-title {
    color: #1b1b1b;
    font-size: 14px;
    line-height: 22px;
    height: 22px;
    float: left;
    font-weight: 600;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      cursor: pointer;
      text-decoration-line: underline;
    }
  }
  .list-info {
    width: 100%;
    color: #1b1b1b;
    font-size: 14px;
    line-height: 22px;
    height: 22px;
    font-weight: 300;
    text-align: left;
    margin-top: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .list-header {
    width: 26px;
    height: 26px;
    border-radius: 26px;
    float: left;
    margin-right: 10px;
  }
  .list-name {
    font-size: 14px;
    color: #1b1b1b;
    float: left;
    font-weight: 300;
    line-height: 26px;
  }
  .list-zan {
    color: #a8afc1;
    font-size: 24px;
    line-height: 26px;
    cursor: pointer;
    float: left;
  }
  .list-num {
    color: #a8afc1;
    font-size: 14px;
    line-height: 26px;
    margin-left: 5px;
    float: left;
  }
  .lsit-right-20 {
    margin-right: 20px;
  }
  .list-right {
    float: right;
  }
}
</style>