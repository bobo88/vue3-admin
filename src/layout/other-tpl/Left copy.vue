<template>
  <el-aside
    width="300px"
    style="
      height: 100vh;
      padding: 20px 0;
      background: #f60;
      font-size: 16px;
    "
  >
    -{{ modelStyleClass }}-
    <el-button type="primary" @click="cbSetModel('xxxxdddd')"
      >点击我切换主题</el-button
    >
    <div style="padding: 10px; background: rgba(0, 0, 0, 0.5)">
      <p style="color:#fff;">(我是子组件） - 年龄：{{ userObj.age }} (props/emits)</p>
      <Test data-test="sth-attrs-test" :data-user="userObj" name="Bob" :age="userObj.age" @updateAge="updateAge" />
    </div>
    <div style="padding: 10px; background: rgba(0, 0, 0, 0.5)">
      <p style="color:#fff;">(我是子组件） - 名称：{{ userObj.name }} (v-model/emits)</p>
      <Test data-test="sth-attrs-test" :data-user="userObj" v-model:user-name="userObj.name" />
    </div>
    <div style="padding: 10px; background: rgba(0, 0, 0, 0.5)">
      <p style="color:#fff;">(我是子组件） - ID：{{ userObj.id }} (ref/emits)</p>
      <Test data-test="sth-attrs-test" ref="root" />
    </div>
    <div style="padding: 10px; background: rgba(0, 0, 0, 0.5)">
      <p style="color:#fff;">Inject获取的数据：{{msg}}</p>
      <p style="color:#fff;">Inject获取的数据：{{tags}}</p>
      <p style="color:#fff;">EventBus：{{busData}}</p>
    </div>
  </el-aside>
</template>

<script lang="ts" setup>
  import { onBeforeMount, onMounted, reactive, ref, inject } from 'vue'
  import useGlobalProperties from '@/hooks/useGlobal'
  import Test from '@/components/common/Test.vue'
  import bus from '@/libs/bus'

  interface userInfo {
    id: number,
    age: number,
    name: string
  }
  const busData = ref<string>('')
  // 注意： bus.$on写在onMounted里面 不会执行
  onBeforeMount(() => {
    console.log('######### Left onBeforeMount ##################')
  })
  bus.$on('sayHi', (data: string) => {
    console.log(555, data)
    busData.value = data
    console.log(busData, 666)
  })

  const msg: string = inject('msg') || '';
  const tags: string[] = inject('tags') || []

  const { $store } = useGlobalProperties()

  const userObj: userInfo = reactive({
    id: 11,
    age: 20,
    name: 'bobo'
  })

  const updateAge = (age: number): void => {
    userObj.age = age
  }

  onMounted(() => {
    console.log('子组件 onMounted......')
  })

  // 给子组件定义一个ref变量
  const root = ref(null);
  onMounted(() => {
    console.log(root.value.sayHi, 888)
  })

  let modelStyleClass = ref<string>("");
  const cbSetModel = (i: number): void => {
    const modelStyleList = ["", "refresh", "dark", "deep-dark"];
    console.log(i, modelStyleClass);
    modelStyleClass.value = modelStyleList[i || $store.get("modelStyle")] || "";
  };
</script>
