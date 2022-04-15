<template>
  <div class="login login-component login-pop">
    <transition name="fade">
      <div class="login-pop-cont" v-loading.fullscreen.lock='loading'>
        <header class="header-logo">
          <h1>AC 管理后台</h1>
        </header>

        <main class="main-box">
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="120px"
            class="bo-ruleForm"
            :size="formSize"
          >
            <el-form-item class="mb30" label="用户名" prop="username">
              <el-input v-model="ruleForm.username" class="w300 tc" placeholder="请输入用户名">
                <template #prefix>
                  <el-icon class="el-input__icon"><avatar /></el-icon>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item class="mb30" label="密码" prop="password">
              <el-input v-model="ruleForm.password" class="w300 tc" placeholder="请输入密码">
                <template #prefix>
                  <el-icon class="el-input__icon"><lock /></el-icon>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item label="&nbsp;">
              <el-button class="w100" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
              <el-button class="w100" @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
          </el-form>
        </main>

        <footer class="link-admin tc">
          <p>没有账号和权限?<span class="color-link">请联系管理员</span></p>
          <p>DingTalk ID: <span class="fb">***ABC****</span></p>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { Avatar, Lock } from '@element-plus/icons-vue'
  import { AVC, ABC } from '@/constants/urls'
  import type { ElForm } from 'element-plus'
  type FormInstance = InstanceType<typeof ElForm>

  console.log('58888', AVC, ABC)

  const formSize = ref('')
  const ruleFormRef = ref<FormInstance>()
  const ruleForm = reactive({
    username: '',
    password: '',
  })

  const rules = reactive({
    username: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur',
      },
      {
        min: 3,
        max: 20,
        message: 'Length should be 3 to 5',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur',
      },
    ],
  })

  const submitForm = (formEl: FormInstance | undefined) => {
    console.log(formEl, 666)
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!')
        return false
      }
    })
  }

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
</script>
<style lang="scss" scoped>
  .login-pop {
    position: absolute;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
  }

  .login-pop-cont {
    position: absolute;
    z-index: 9999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 600px;
    height: 400px;
    color: #000;
    text-align: center;
    // border: 1px solid $colorBlue;
    // box-shadow: -5px 0 12px red,0 -5px 12px yellow,0 5px 12px blue,5px 0 12px green;
    box-shadow: -5px 0 12px #ccc,0 -5px 12px #ccc,0 5px 12px #ccc,5px 0 12px #ccc;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    .header-logo {
      padding: 20px 0 50px;
      h1 {
        height: 40px;
        line-height: 40px;
        font-size: 28px;
        font-family: 'PingFangSC-Medium', 'PingFang SC';
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
      }
    }

    .iconfont {
      font-size: 36px;
    }

    .main-box{
      margin: 0 auto 50px;
      width: 450px;
    }
    .main-box {
      .title {
        margin: 0 0 10px;
        padding: 0;
        line-height: 30px;
        font-size: 20px;
      }
      .item-form {
        margin: 0 0 34px 0;
      }

      .tips {
        line-height: 20px;
        font-size: 14px;
      }
    }
    .link-admin {
      p {
        height: 24px;
        line-height: 24px;
        color: #666;
        font-size: 14px;
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
