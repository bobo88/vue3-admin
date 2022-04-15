<!--
  内容：用户管理 - 用户列表
  作者：BOBO
  日期： 20220317
-->
<template>
  <div>
    <h3 class="main-title">用户列表</h3>
  </div>
</template>

<script lang="ts" setup>
  import { onActivated, onDeactivated } from 'vue'






  interface ArgType {
    length: number
  }
  // 泛型 测试
  function Test<T, U extends ArgType> (msg: T, value: U): U {
    console.log(msg)
    return value
  }
  console.log(Test('Hello', 'Bob'))

  interface Person {
    name: string;
    age: number;
  }
  const lzl: Person = {
    name: '林志玲',
    age: 18,
  }
  console.log(688, typeof lzl)
  type LzlType = typeof lzl;
  const lisi: LzlType = {
    name: '',
    age: 11,
  }
  type P = keyof Person; // 'name' | 'age'
  const userName: P = 'name'
  console.log(userName)

  function fn<T extends Person, K extends keyof T >(obj: T, key: K): T[K] {
    return obj[key]
  }
  console.log(fn(lzl, 'name'))
  console.log(fn(lzl, 'age'))
  // console.log(fn(lzl, 'gender'))














  onActivated(() => {
    console.log('user-all: 激活')
  })
  onDeactivated(() => {
    console.log('user-all: 失活')
  })
</script>

<style lang="scss" scoped>

</style>
