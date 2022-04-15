<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link>
  </div>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="你好 Bob"/>
  </div>
  <div>
    Test 123456嘻嘻嘻 -- {{ countNum }}
  </div>
  <p style="width:200px; margin:0 auto;">
    <el-input v-model="countNum" placeholder="Please input" />
  </p>
  <p>{{ main }}</p>
  <p>{{ counter }}</p>
  <p>{{ doubleCount }}</p>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="primary" plain @click="Increment">点击(Increment) - pinia</el-button>
  <el-button type="primary" plain @click="CountPlus">点击(CountPlus) - pinia</el-button>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  import { useMainStore } from '@/store/index';
  import { storeToRefs } from 'pinia'

  const countNum = ref<number>(0)
  const main = useMainStore()
  // extract specific store properties
  const { counter, doubleCount } = storeToRefs(main)
  const Increment = () => main.increment();
  const CountPlus = () => main.countPlus(+countNum.value);
</script>
