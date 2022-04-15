<!--
  内容：用户管理
  作者：BOBO
  日期： 20220317
-->
<template>
  <div class="user-list-mgt">
    <router-view v-slot="{ Component }">
      <keep-alive :max="2">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts" setup>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
