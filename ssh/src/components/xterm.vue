<template>
  <div class="terminal">
    <button @click="test">测试13123</button>
    <div id="terminal"></div>
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
      sshClient: null,
      term: null,
      stream: null
    };
  },
  methods: {
    test() {
        this.stream.write(`cd /home \r`)
    }
  },
  mounted() {
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
    // term.onKey(data=>{
    //     console.log('键盘输入回调111', data)
    // })
    // term.fit()
    // term.on("key", function(key, ev) {
    //   console.log("key==========", ev.keyCode);
    //   term.write(key); //输入
    //   //term.writeln(key)//输入并换行
    // });
  }
};
</script>

<style scoped lang="scss">
.terminal {
  div {
    width: 100%;
    height: calc(100vh);
  }
}
</style>
