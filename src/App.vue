<template>
<div>
  <el-form class="login-box"  ref="form" :model="user" shadow="always" label-width="60px" center>
    <el-form-item >
        <font color="black" size="3" style="padding-left:35%">注册/登录</font>
    </el-form-item>
    <el-form-item label="用户名">
      <el-input placeholder="请输入用户名" v-model="user.userName" ></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input placeholder="请输入密码" v-model="user.password" show-password></el-input>
    </el-form-item>
    <el-form-item >
      <el-button type="primary" @click="onSubmit" style="margin-left:25%">立即登陆</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      user:{
        userName:'',
        password:''
      }
}

  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
};
</script>
<style>
html{
  height: 100%;
  width: 100%;
  background:url("/static/loginBackground.png") center center no-repeat fixed;
}
.login-box {
  margin : 10% 35% 0 35%;
  padding: 2% 4% 4% 0%;
  width: 20%;
  height:30%;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
