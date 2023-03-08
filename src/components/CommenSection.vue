<template lang="">
  <section className="common__section">
    <div >
      <h2 class="text-[#fff] text-center text-[2rem]">{{title}}</h2>
    </div>
  </section>
</template>
<script lang="ts">
import { any } from 'vue-types';

export default {
    props:["title"]
};
</script>
<style>
.common__section {
  background: url("../images/bg.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 150px;
}


</style>
