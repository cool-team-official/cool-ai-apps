<template>
  <div id="editorjs"></div>
</template>

<script>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    new EditorJS({
      placeholder: '请输入发布的内容',
      holderId: "editorjs",
      tools: {
        header: Header,
        list: List
      }
    });
  }
};
</script>
