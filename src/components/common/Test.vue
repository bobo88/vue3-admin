<template>
  <div style="padding: 10px; background: rgba(255, 255, 255, 0.6);">
    <!--
      1、props / emits	props	emits
      2、v-model / emits	v-model	emits
      3、ref / emits	ref	emits
      4、provide / inject	provide	inject
      5、EventBus	emit / on	emit / on
      6、Vuex / pinia
     -->
    <p>(我是孙子组件）</p>
    <div style="background: rgba(255, 255, 255, 0.8)">
      <p>我是父组件传递过来的数据：{{ props }} --- {{name}} --- {{dataUser.age}}</p>
      <p>Inject获取的数据：{{msg}}</p>
    </div>
    <div style="padding: 10px 0;">
      <el-button v-if="props.name" type="primary" style="font-size: 12px;" @click="setAge(28)">点击Emit Age</el-button>
      <el-button v-else type="primary" style="font-size: 12px;" @click="setName">点击Emit Name</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, inject, useAttrs, PropType } from 'vue'

  // 获取 attrs (未被props的其他属性)
  const attrs = useAttrs()
  console.log('***Attrs: ----', attrs['data-test'])

  interface UserType {
    id: number,
    age: number,
    name: string
  }
  // interface propsType {
  //   name: string,
  //   dataUser: userType
  // }
  // props需要使用PropType泛型来约束
  const props = defineProps({
    name: {
      type: String,
      default: ''
    },
    dataUser: {
      type: Object as PropType<UserType>,
      required: true,
      default: (): UserType => {
        return {
          id: 0,
          age: 0,
          name: ''
        }
      }
    }
    // 会有警告
    // dataUser: function () {
    //   return {
    //     id: Number,
    //     name: String
    //   }
    // }
  })

  const msg: string = inject('msg') || '';

  const emit = defineEmits(['updateAge', 'update:userName'])
  const setAge = (age: number) => {
    // ?????? 校验年龄 大于18
    // console.log(111, 'emit')
    emit('updateAge', age)
  }
  const setName = () => {
    emit('update:userName', 'Bob(new)')
  }

  const sayHi = ref('== ref/emits Hello world from defineExpose ==')
  defineExpose({
    sayHi // 明确的暴露接口
  })



  // const dataUser = defineProps({
  //   dataUser: {
  //     type: Object,
  //     default: {}
  //   }
  // })
  // import { ref } from 'vue'
  // import useGlobalProperties from '@/hooks/useGlobal'

  // const { $store } = useGlobalProperties()

  // let modelStyleClass = ref<string>("");
  // const cbSetModel = (i: number) => {
  //   const modelStyleList = ["", "refresh", "dark", "deep-dark"];
  //   console.log(i, modelStyleClass);
  //   modelStyleClass.value = modelStyleList[i || $store.get("modelStyle")] || "";
  // };
</script>
