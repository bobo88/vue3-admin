<!--
  内容：用户管理 - VIP
  作者：BOBO
  日期： 20220317
-->
<template>
  <div>
    <h3 class="main-title">Vip用户列表</h3>
  </div>
</template>

<script lang="ts" setup>
  import { onActivated, onDeactivated } from 'vue'
  onActivated(() => {
    console.log('user-vip: 激活')
  })
  onDeactivated(() => {
    console.log('user-vip: 失活')
  })
</script>

<style lang="scss" scoped>

</style>
