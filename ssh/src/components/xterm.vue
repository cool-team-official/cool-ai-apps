<template>
  <div>
    <el-dialog
      :title="form.conn.id ? '编辑' : '新增'"
      :visible.sync="dialogVisible"
      width="80%"
    >
      <el-form
        v-if="activeIndex == '1'"
        ref="connForm"
        :rules="rules"
        label-position="left"
        :model="form.conn"
        label-width="65px"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.conn.name"></el-input>
        </el-form-item>
        <el-form-item label="IP地址" prop="ipAddress">
          <el-input v-model="form.conn.ipAddress"></el-input>
        </el-form-item>
        <el-form-item label="用户" prop="username">
          <el-input v-model="form.conn.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.conn.password"></el-input>
        </el-form-item>
      </el-form>
      <el-form
        v-if="activeIndex == '2'"
        ref="commandForm"
        :rules="rules"
        label-position="left"
        :model="form.command"
        label-width="65px"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.command.name"></el-input>
        </el-form-item>
        <el-form-item label="命令" prop="content">
          <el-input
            type="textarea"
            v-model="form.command.content"
            rows="5"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button
          type="primary"
          @click="submitForm(activeIndex == '1' ? 'connForm' : 'commandForm')"
          size="small"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <div class="terminal">
      <img @click="showMenu" src="@/assets/menu.png" />
      <img
        v-if="drawer"
        @click="openForm"
        style="z-index:100000"
        src="@/assets/add.png"
      />
      <div v-if="showTerm" id="terminal"></div>
      <el-drawer direction="rtl" :visible.sync="drawer" :with-header="false">
        <context-menu ref="context-menu"></context-menu>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#253238"
          text-color="#fff"
          @select="menuSelect"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <i class="el-icon-s-help"></i>
            <span slot="title" class="noselect">连接</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-s-flag"></i>
            <span slot="title" class="noselect">命令</span>
          </el-menu-item>
        </el-menu>
        <el-menu
          :default-active="openIndex"
          mode="vertical"
          background-color="#253238"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 460px;overflow-y: scroll;"
        >
          <el-menu-item
            v-show="activeIndex == '1'"
            v-for="(item, index) in connList"
            :key="'conn' + index"
            :index="item.id.toString()"
            style=" width: 100%;text-align: left;"
            @dblclick.native="doAction(item)"
          >
            <span
              slot="title"
              @contextmenu="e => openMenu(e, item)"
              class="noselect"
              >{{ item.name }}</span
            >
          </el-menu-item>
          <el-menu-item
            v-show="activeIndex == '2'"
            v-for="(item, index) in commandList"
            :key="'command' + index"
            :index="item.id.toString()"
            style=" width: 100%;text-align: left;"
            @dblclick.native="doAction(item)"
          >
            <span
              slot="title"
              @contextmenu="e => openMenu(e, item)"
              class="noselect"
              >{{ item.name }}</span
            >
          </el-menu-item>
        </el-menu>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import "xterm/css/xterm.css";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import ContextMenu from "@/components/context-menu";

export default {
  name: "xterm",
  props: {
    msg: String
  },
  data() {
    return {
      rules: {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        ipAddress: [
          { required: true, message: "请输入IP地址", trigger: "blur" }
        ],
        username: [{ required: true, message: "请输入用户", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        content: [
          { required: true, message: "请输入命令内容", trigger: "blur" }
        ]
      },
      form: {
        conn: {
          name: "",
          ipAddress: "",
          username: "",
          password: ""
        },
        command: {
          name: "",
          content: ""
        }
      },
      dialogVisible: false,
      openIndex: "1",
      activeIndex: "1",
      drawer: false,
      sshClient: null,
      term: null,
      stream: null,
      showTerm: false,
      connList: [],
      commandList: []
    };
  },
  watch: {
    dialogVisible: function(n, o) {
      console.log(n, o);
      this.resetForm("connForm");
      this.resetForm("commandForm");
    }
  },
  components: { ContextMenu },
  methods: {
    resetForm(formName) {
      this.$nextTick(() => {
        if (this.$refs[formName]) {
          this.$refs[formName].resetFields();
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          window.cool.db
            .upsert(
              this.activeIndex == "1" ? "conn" : "command",
              this.form[this.activeIndex == "1" ? "conn" : "command"]
            )
            .then(() => {
              this.initData();
              this.dialogVisible = false;
            });
        } else {
          return false;
        }
      });
    },
    openForm() {
      delete this.form.conn.id;
      this.resetForm("connForm");
      this.resetForm("commandForm");
      this.dialogVisible = true;
    },
    menuSelect(index) {
      this.activeIndex = index;
    },
    onmouseEvent() {
      document.onmousedown = () => {
        if (this.$refs["context-menu"]) {
          this.$refs["context-menu"].close();
        }
      };
    },
    showMenu() {
      this.drawer = !this.drawer;
      this.initData();
    },
    initData() {
      window.cool.db
        .find("conn", {
          orderBy: ["id DESC"]
        })
        .then(res => {
          this.connList = res;
        });
      window.cool.db
        .find("command", {
          orderBy: ["id DESC"]
        })
        .then(res => {
          this.commandList = res;
        });
    },
    exeCommand(content) {
      this.stream.write(`${content} \r`);
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
      this.term.write("欢迎使用 COOL-AI SSH www.cool-js.com \r\n");
      this.term.focus();
      this.term.onData(data => {
        this.stream.write(data);
      });
      fitAddon.fit();
    },
    connServe(conf) {
      if (this.sshClient) {
        this.exeCommand("exit");
      }
      const client = new window.sshClient();
      client
        .on("ready", () => {
          this.sshClient = client;
          client.shell((err, stream) => {
            this.term.clear();
            this.stream = stream;
            stream.on("data", data => {
              this.term.write(data.toString("utf-8"));
            });
            stream.on("close", function(code, signal) {
              console.log(
                "Stream :: close :: code: " + code + ", signal: " + signal
              );
              stream.end();
              stream.close();
              //this.stream = null;
              //this.term.write("长时间未操作，已失去连接，请重连！ \r\n");
              //this.sshClient.end();
            });
          });
        })
        .on("error", err => {
          console.log("链接失败", err);
          this.term.write("连接失败， 请检查账户密码是否正确 \r\n");
        })
        .connect({
          host: conf.ipAddress,
          port: 22,
          username: conf.username,
          password: conf.password,
          keepaliveInterval: 10000
        });
    },
    doAction(item) {
      if (this.activeIndex == "1") {
        this.connServe(item);
      } else {
        this.exeCommand(item.content);
      }
    },
    openMenu(e, item) {
      this.openIndex = item.id.toString();
      this.$refs["context-menu"].open(e, {
        list: [
          {
            label: this.activeIndex == 1 ? "打开" : "执行",
            callback: (e, close) => {
              this.doAction(item);
              close();
            }
          },
          {
            label: "编辑",
            callback: (e, close) => {
              console.log("打开的信息", item);
              this.resetForm("connForm");
              this.dialogVisible = true;
              this.$nextTick(() => {
                this.form[
                  this.activeIndex == "1" ? "conn" : "command"
                ] = Object.assign({}, item);
              });
              close();
            }
          },
          {
            label: "删除",
            callback: (e, close) => {
              window.cool.db
                .delete(this.activeIndex == "1" ? "conn" : "command", [
                  "id",
                  "=",
                  item.id
                ])
                .then(() => {
                  this.initData();
                  close();
                });
            }
          }
        ]
      });
    }
  },
  mounted() {
    window.cool.tools.join("", "preload.js");
    window.aaaa();
    //window.aaaa();
    this.showTerm = true;
    //this.onmouseEvent();
    this.$nextTick(() => {
      this.initConn();
    });
  }
};
</script>
<style lang="scss">
.el-dialog {
  /deep/ .el-dialog__body {
    padding: 20px 20px 0px !important;
  }
}
</style>
<style scoped lang="scss">
// .el-form {
//   /deep/ .el-form-item {
//     height: 45px;
//   }
// }
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

.noselect {
  padding: 20px 150px 20px 0px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
not supported by any browser */
}
</style>
