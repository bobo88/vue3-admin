<template>
  <div class="common-layout wrapper">
    <el-container style="width: 100%; height: 100%">
      <Left />
      <el-main style="padding: 0">
        <el-container style="height: 100%">
          <Top />
          <el-main style="width: 100%; height: 100%">
            {{ userInfo }}
            <div>
              {{ userInfoToRefs }}
            </div>
            <div>
              {{ userInfoToRefs.name }}
            </div>
            <p>id: {{ id }}</p>
            <p>name: {{ name }}</p>
            <p>age: {{ age }}</p>
            <p>gender: {{ gender }}</p>
            <p>ageName: {{ ageName }}</p>

            <ul>
              <li
                class="item"
                :class="{ cur: curIndex === index }"
                v-for="(item, index) in 5"
                :key="index"
                @click="curIndex = index"
              >
                {{ item }}
              </li>
            </ul>

             <router-link to="/about">
              <el-button type="primary">about</el-button>
             </router-link>

            <div class="pt30">

            </div>
          </el-main>
          <el-footer class="footer-box" style="background: rgba(0, 0, 0, 0.1)">Footer</el-footer>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Left from '@/layout/Left.vue'
import Top from '@/layout/Top.vue'
import {
  onBeforeUnmount,
  computed,
  onMounted,
  reactive,
  ref,
  toRefs,
  watch,
  watchEffect,
  provide,
  getCurrentInstance
} from "vue";
import type { ComputedRef } from "vue";
import useGlobalProperties from "@/hooks/useGlobal";
import { useRoute } from "vue-router";
import bus from '@/libs/bus'
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import { useMainStore } from '@/store/index';
// import { storeToRefs } from 'pinia'
import { ComponentInternalInstance } from 'vue';
// 获取原型
const { proxy } = getCurrentInstance() as ComponentInternalInstance
console.log('proxy: ', proxy?.name)

interface Member {
  id: number;
  name: string;
  age: number;
  gender: string;
}

// 定义好数据
// const msg= 'Hello World!';
const msg = ref<string>('Hello World!');
const tags: string[] = ['a', 'b', 'c'];
// provide出去
provide('msg', msg);
provide('tags', tags);
setTimeout(() => {
  msg.value = 'Hi, woo';
  tags.push('d')
}, 2000)

const curIndex = ref<number>(0);

// 点击 上面的about按钮，触发路由变化监听
const route = useRoute();
watch(() => route.path, () => {
console.log('-------- 监听到路由的变化 --------------')
});


// EventBus
const sayHi = (msg: string = 'Hello world'): void => {
  console.log(msg)
}
// console.log(bus, 3888)
bus.$on('sayHi', sayHi)
// 在组件卸载之前移除监听
onBeforeUnmount( () => {
  bus.$off('sayHi', sayHi);
})

const userInfo = reactive<Member>({
  id: 11,
  name: "xxx",
  age: 12,
  gender: "M",
});

const userInfoToRefs = toRefs<Member>(userInfo);
setTimeout(() => {
  userInfo.id = 2;
  userInfo.name = "Tom";
  userInfo.age = 20;
}, 2000);

const { id, name, age, gender } = reactive({ ...userInfoToRefs });

// 钩子函数
onMounted(() => {
  console.log("onMounted ......");
});

// 监听
watch(userInfo, () => {
  console.log("userInfo change......");
});
// 监听某个值
watch(
  () => userInfo.name,
  () => {
    console.log("userInfo.name change......", userInfo.name);
  }
);
// 监听某个值，获取新旧值
watch(
  () => userInfo.age,
  (newVal: number, oldVal: number) => {
    console.log("userInfo.age change......", userInfo.age, newVal, oldVal);
  }
);

const getUserInfo = (): void => {
  console.log("WatchEffect: ", {
    name: userInfo.name,
    age: userInfo.age,
  });
};
// WatchEffect 会默认执行一次。监听的数据变化后又会执行一次
watchEffect(getUserInfo);

const ageName: ComputedRef<string> = computed(
  () => `${userInfo.age}+${userInfo.name}`
);
console.log("ageName: ", ageName.value);

const { $store } = useGlobalProperties();
console.log(588, $store);


// cbSetModel('xxx')

// const countNum = ref<number>(0)
// const main = useMainStore()
// // extract specific store properties
// const { counter, doubleCount } = storeToRefs(main)
// const Increment = () => main.increment();
// const CountPlus = () => main.countPlus(+countNum.value);
</script>
<style lang="scss">
  .footer-box {
    height: 48px;
    line-height: 48px;
    color: $color6;
    font-size: 14px;
    text-align: center;
    background: rgba(0, 0, 0, 0.1);
  }
  .item {
    margin-bottom: 10px;
    height: 30px;
    line-height: 30px;
    &.cur {
      color: #fff;
      font-size: 20px;
      background: rgba(0, 0, 0, 0.6);
    }
  }
</style>
