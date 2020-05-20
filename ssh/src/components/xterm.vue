<template>
  <div class="terminal">
    <!-- <button @click="test">测试13123</button> -->
    <img @click="showMenu" src="@/assets/menu.png" />
    <div v-if="showTerm" id="terminal"></div>
    <el-drawer
      v-if="drawer"
      title="我是标题"
      direction="rtl"
      :visible.sync="drawer"
      :with-header="false"
    >
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#253238"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">连接</el-menu-item>
        <el-menu-item index="2">命令</el-menu-item>
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
      this.term.write("COOL-AI SSH \r\n");
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
          });
        })
        .connect({
          host: "123.57.135.188",
          port: 22,
          username: "root",
          password: "abc123456+"
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
.el-menu.el-menu--horizontal{
  border-bottom: none;
}
.terminal {
  width: 100%;
  img {
    position: absolute;
    width: 25px;
    z-index: 1000000;
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
