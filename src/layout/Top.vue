<template>
  <div class="top-box clearfix">
    <slot :user="{name: 'Bob', age: 32}"></slot>
    <!-- fold:折叠, expand:展开 -->
    <span class="left-column-icon-box" @click="setIsCollapse">
      <el-icon v-if="!isCollapse" class="expand-icon"><expand /></el-icon>
      <el-icon v-else class="fold-icon"><fold /></el-icon>

      <span style="margin-left:20px;display:inline-block;color:#fff;vertical-align:top;">isCollapse(是折叠): {{isCollapse}}</span>
    </span>

    <el-dropdown class="el-dropdown-item">
      <span class="el-dropdown-link">
        语言设置
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>中文</el-dropdown-item>
          <el-dropdown-item>English</el-dropdown-item>
          <el-dropdown-item>русский</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-dropdown class="el-dropdown-item">
      <span class="el-dropdown-link">
        abc-user*** <el-icon><avatar /></el-icon>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>修改用户名</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
  import { ArrowDown, Avatar, Fold, Expand } from '@element-plus/icons-vue'
  import { useMainStore } from '@/store/index';
  import { storeToRefs } from 'pinia'
  import ConstantsPinia from '@/constants/pinia'

  // enum StatusType {
  //   fold = 'fold',
  //   expand = 'expand'
  // }

  const main = useMainStore()
  // extract specific store properties
  const { isCollapse } = storeToRefs(main)
  const setIsCollapse = (): void => {
    console.log(58888, isCollapse)
    main[ConstantsPinia.SET_LEFT_COLUMN](isCollapse.value ? false : true);
  }
</script>
<style lang="scss" scoped>
  .top-box {
    padding: 0 20px;
    height: 48px;
    line-height: 48px;
    background: #545c64;
    text-align: right;
  }
  .left-column-icon-box {
    float: left;
    height: 48px;
    line-height: 48px;
    .fold-icon, .expand-icon {
      color: $colorF;
      height: 48px;
      line-height: 48px;
      font-size: 24px;
      cursor: pointer;
    }
  }
  .el-dropdown-link {
    height: 48px;
    line-height: 48px;
    cursor: pointer;
    color: $colorF;
    display: flex;
    align-items: center;
  }
  .el-dropdown-item {
    margin-left: 20px;
  }
</style>
