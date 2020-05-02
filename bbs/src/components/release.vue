<template>
  <div id="editorContent">
    <el-row>
      <el-col :span="24">
        <el-button type="primary">发布</el-button>
      </el-col>
      <el-col :span="24" style="margin-top:15px; padding-left:8px">
        <el-input v-model="input" placeholder="添加标题"></el-input>
      </el-col>
      <el-col :span="24">
        <div id="editor"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
export default {
  name: "release",
  data() {
    return {
      input: "",
      editor: null
    };
  },
  mounted() {
    this.editor = new EditorJS({
      placeholder: "...",
      holderId: "editor",
      hideToolbar: true,
      tools: {
        header: Header,
        list: List
      },
      onReady: () => {
        // this.editor.focus(true);
        this.editor.toolbar.close();
      },
      data:{
  "time": 1588435535347,
  "blocks": [
    {
      "type": "paragraph",
      "data": {
        "text": "First text"
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "Second text"
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "3213"
      }
    },
    {
      "type": "link",
      "data": {
        "link": "https://www.google.com",
        "meta": {}
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "213"
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "12131"
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "32113"
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "13"
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "13321313"
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "32121333131"
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "3213132132111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
      }
    }
  ],
  "version": "2.17.0"
}
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>
<style scoped lang="scss">
.el-button--primary {
  margin-top: 15px;
  padding: 8px 20px;
  float: right;
}
.el-input {
  /deep/ .el-input__inner {
    border: none;
    font-size: 20px;
    border-bottom: 1px solid #f0f0f0;
    height: 60px;
    line-height: 60px;
  }
}
#editor {
  padding: 0 35px 0 25px;
}
#editorContent {
  padding-left: 11px;
}
</style>