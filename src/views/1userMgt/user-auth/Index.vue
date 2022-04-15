<!--
  内容：用户管理 - 用户权限
  作者：BOBO
  日期： 20220317
-->
<template>
  <div>
    <h3 class="main-title">用户权限</h3>
    <div>
      {{ $pinia.state.value }}
    </div>
  </div>
</template>

<script lang="ts" setup>
  import useGlobalProperties from '@/hooks/useGlobal'
  const { $pinia, $store } = useGlobalProperties()
  console.log(5888, $pinia, $store)

  // 测试 泛型 &
  type A = {
    id: number
  }
  type B = {
    name: string
  }
  type C = {
    gender: string
  }

  function fn (usr: A & B & C): A & B & C {
    console.log(usr)
    return usr
  }
  fn({
    id: 1,
    name: 'xxx',
    gender: 'M'
  })

</script>

<style lang="scss" scoped>

</style>
