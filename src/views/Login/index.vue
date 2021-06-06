<template>
    <div id="login">
        <div class="login-warp">
            <!-- 登录与注册 -->
            <ul class="menu-tab">
                <li v-for="item in menuTab" :key="item.id" :class="{'current':item.current}" @click="toggleMenu(item)">{{item.txt}}</li>
            </ul>
            <!-- 表单 -->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="110px" class="login-form" size="medium ">
                <el-form-item label="邮箱" prop="username" class="from-item">
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" class="from-item">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code" class="from-item">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-input v-model.number="ruleForm.code" minlength="6" maxlength="6"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <el-button type="success">获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div> 
</template>

<script>
/* import {xxx} from ''; 组件，有引入组件时，放置组件的名称*/
//验证表单的封装方法
import { stripscript,validateUserNames,vaildatePasswords,vaildateCodes } from '@/utils/validate';

export default {
    name: 'login',
    /* components: {xxx} 组件引用*/ 
    /* data数据，v-model绑定数据使用 */
    data(){ 
       //验证用户名（邮箱）
      var validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        }else if(validateUserNames(value)){
          callback(new Error('输入用户名格式有误'));
        }else {
          callback();
        }
      };
      //验证密码
      var validatePass = (rule, value, callback) => {
       //过滤特殊符号stripscript()
       this.ruleForm.password = stripscript(value) 
        value =  this.ruleForm.password
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (vaildatePasswords(value)) {
          callback(new Error('密码应为6-20位之间'));
        } else {
          callback();
        }
      };
      //验证码校验
       var validateCode = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('验证码不能为空'));
        }else if(vaildateCodes(value)){
          return callback(new Error('输入验证码格式有误'));
        }else{
          callback();
        }
      };
        return{
            // 登录与注册数据 
            menuTab:[ /* 引用数据类型，指向同一个对象 */
                {txt:'登录',current:true}, 
                {txt:'注册',current:false}
            ],
            // 表单数据 
             ruleForm: {
                username: '',
                password: '',
                code: ''
                },
            rules: {
                username: [
                    { validator: validateUserName, trigger: 'blur' } //失去焦点触发事件
                ],
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                code: [
                    { validator: validateCode, trigger: 'blur' }
                ]
            }
        }
    },
     /* 创建完成时 */
    created(){},
    /* 挂载完成时 */
    mounted(){}, 
    /* 定义函数 */
    methods:{
        //登录与注册方法
        toggleMenu(data){
            this.menuTab.forEach((elem,index) => {
                elem.current = false
            });
            //高光
            data.current = true;
        },
        // 表单方法
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    }, 
    /* props:{}, 子组件接收父组件参数 */
    /* watch:{}  子组件接收父组件参数 */
}
</script>

/* scoped样式仅对本页面有效 */
<style lang="scss" scoped> 
#login {
    height: 100vh;
    background-image: linear-gradient(to bottom right,#7FF8E6,#7FF8B7);
    background-image: -webkit-linear-gradient(to bottom right,#7FF8E6,#7FF8B7);
}
.login-warp{
    width: 350px;
    margin: auto;
}
.menu-tab{
    text-align: center;
    li{
        list-style: none;
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: white;
        border-radius: 3px;
        cursor: pointer;
        margin-top: 50px;
    }
    .current{
        background-color: rgba(144,38,188, .1);
    }
    li:nth-child(1){
        margin: 0px 0px 20px 100px;
    }
}
.login-form{
    text-align: center;
    .from-item{
        margin-right: 10px;
        margin-bottom: 18px;
    }
    .el-form-item:nth-child(4){
        margin-right: 20px;
    }
    .el-button{
        width: 70px;
        margin-left: 10px;
        }
    .el-button:nth-child(1){
        background-color: #F56C6C;
    }
    .el-button:nth-child(2){
        background-color: #E6D7D7;
    }
    .el-button:nth-child(1):hover{
        color: white;
    }
    .el-button:nth-child(2):hover{
        color: white;
    }
    .el-button:nth-child(2):focus{
        color: white;
    }
    .from-item .el-row .el-col .el-input{
        width: 135px;
        margin-right: 10px;
    }
    .from-item .el-row .el-col .el-button{
        width: 80px;
        margin-left: 85px;
       background-color: #67C13A;
    }
}
</style>
