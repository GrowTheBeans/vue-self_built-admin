<template>
  <div class="login">
    <h2>叩丁狼电商管理系统</h2>
    <el-form
      :model="ruleForm"
      label-width="40px"
      class="login__rule-form"
    >
      <el-form-item label="账号">
        <el-input
          v-model="ruleForm.username"
          placeholder="请输入账号"
          autocomplete="off"
          minlength="6"
          maxlength="20"
          size="small"
          prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="ruleForm.userpass"
          placeholder="请输入密码"
          autocomplete="off"
          minlength="15"
          maxlength="30"
          size="small"
          prefix-icon="el-icon-lock"
        ></el-input>
      </el-form-item>
      <el-form-item class="login__form-btn">
        <el-button type="primary" @click="submitForm('ruleForm')" size="small">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: "",
        userpass: "",
      }
    };
  },
  methods: {
    submitForm(formName) {
      console.log(formName);
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  background-color: #324057;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 28px;
    color: #fff;
  }
  .login__rule-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 420px;
    height: 320px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 4px rgb(124, 124, 124);
    .login__form-btn {
      width: 60%;
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
