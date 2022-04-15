<template>
  <div class="common-layout wrapper">
    <el-container style="width: 100%; height: 100%">
      <Left :data-indx="8" @vnode-mounted="hookMounted" />
      <el-main style="padding: 0">
        <el-container style="height: 100%">
          <Top>
            <template v-slot:default="{ user }">
              <span style="color:#fff">作用域插槽Test - {{ user }}</span>
            </template>
          </Top>
          <el-main style="width: 100%; height: 100%">
            <!-- 主体内容 -->
            <router-view v-slot="{ Component }">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </router-view>
          </el-main>
          <el-footer class="footer-box" style="background: rgba(0, 0, 0, 0.1)">Footer</el-footer>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, nextTick, ref } from 'vue'
  import Left from '@/layout/Left.vue'
  import Top from '@/layout/Top.vue'
  const hookMounted = (str) => {
    console.log('hookMounted: ----------', str)
  }
  const message = ref('Hello!')
  const changeMessage = async newMessage => {
    message.value = newMessage
    await nextTick(function(){
      console.log(999)
    })
    console.log('Now DOM is updated')
  }
  console.log(111)
  changeMessage(message)
  console.log(222)
  // onMounted(() => {
  //   window.addEventListener('click', function(){
  //   }, {once: true})
  //   console.log(233)
  // })
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
