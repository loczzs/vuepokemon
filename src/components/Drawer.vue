<template>
  <div>
    <a-button type="primary" @click="visible = !visible">Open</a-button>
    <a-drawer
      :width="500"
      :visible="visible"
      class="custom-class"
      
      title="Cart"
      placement="right"
      @close="visible = !visible"
    >
      <!-- <button @click="visible = !visible">X</button> -->
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  data() {
    return {
      visible: false,
    };
  },
  methods: {},
});
</script>
<style>
.ant-drawer-header{
  background: #14141f !important;
  box-shadow: 3px 3px 6px -3px #e250e5;
}
.ant-drawer-body{
  background: #14141f !important;
}
.ant-drawer-close{
  color: white !important;
}
.ant-drawer-title{
  color: white !important;
}
</style>
