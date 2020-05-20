<template>
  <div class="terminal">
    <!-- <button @click="test">测试13123</button> -->
    <img @click="showMenu" src="@/assets/menu.png" />
    <div v-if="showTerm" id="terminal"></div>
    <el-drawer title="我是标题" direction="rtl" :visible.sync="drawer" :with-header="false">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#253238"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <i class="el-icon-s-help"></i>
          <span slot="title">连接</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-flag"></i>
          <span slot="title">命令</span>
        </el-menu-item>
      </el-menu>
      <el-menu
        :default-active="activeIndex"
        mode="vertical"
        background-color="#253238"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="height: 460px;overflow-y: scroll;"
      >
        <el-menu-item
          v-for="n in 20"
          :key="n"
          :index="n.toString()"
          style=" width: 100%;text-align: left;"
        >
          <span slot="title">阿里云服务器{{n}}</span>
        </el-menu-item>
        <!-- <el-menu-item index="2" style=" width: 100%;text-align: left;">
          <span slot="title">华为云服务器</span>
        </el-menu-item>-->
      </el-menu>
    </el-drawer>
  </div>
</template>

<script>
import "xterm/css/xterm.css";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";

export default {
  name: "xterm",
  props: {
    msg: String
  },
  data() {
    return {
      activeIndex: "1",
      drawer: false,
      sshClient: null,
      term: null,
      stream: null,
      showTerm: false
    };
  },
  methods: {
    showMenu() {
      this.drawer = !this.drawer;
    },
    test() {
      this.stream.write(`cd /home \r`);
    },
    initConn() {
      this.term = new Terminal({
        cursorBlink: true, // 光标闪烁
        cursorStyle: "underline", // 光标样式  null | 'block' | 'underline' | 'bar'
        scrollback: 800, //回滚
        tabStopWidth: 8, //制表宽度
        screenKeys: true,
        theme: {
          background: "#253238"
        }
      });

      const fitAddon = new FitAddon();
      this.term.loadAddon(fitAddon);
      this.term.open(document.getElementById("terminal"));
      this.term.write("欢迎使用 COOL-AI SSH \r\n");
      this.term.focus();
      fitAddon.fit();

      window.sshClient
        .on("ready", () => {
          this.sshClient = window.sshClient;
          window.sshClient.shell((err, stream) => {
            this.stream = stream;
            this.term.onData(data => {
              stream.write(data);
            });
            stream.on("data", data => {
              this.term.write(data.toString("utf-8"));
            });
            stream.on("close", function(code, signal) {
              console.log(
                "Stream :: close :: code: " + code + ", signal: " + signal
              );
              this.term.write("长时间未操作，已失去连接，请重连！ \r\n");
              this.sshClient.end();
            });
          });
        })
        .connect({
          host: "123.57.135.188",
          port: 22,
          username: "root",
          password: "abc123456+",
          keepaliveInterval: 10000
        });
    }
  },
  mounted() {
    this.showTerm = true;
    this.$nextTick(() => {
      this.initConn();
    });
  }
};
</script>

<style scoped lang="scss">
/deep/ .el-drawer__body {
  background-color: #253238;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu-demo {
  width: 100%;
}
.el-menu-item {
  width: 50%;
  text-align: center;
}
.terminal {
  width: 100%;
  img {
    position: absolute;
    width: 25px;
    z-index: 10;
    right: 0;
    bottom: 0;
    margin: 0 10px 10px 0px;
    cursor: pointer;
  }
  div {
    width: 100%;
    height: calc(100vh);
  }
}
</style>
