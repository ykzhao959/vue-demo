<template>
  <div class="home">
    <button @click="getFn">发起一个get请求</button>
    <br>
    <br>
    <br>
    <button @click="postFn">发起一个post请求</button>
  </div>
</template>

<script>
// @ is an alias to /src
import {GetJokeAPI,PostJokeAPI} from "@/request/api.js";

export default {
  name: "Home",
  methods: {
    getFn(){
      //发起一个get请求
      GetJokeAPI({
        num: '3'
      }).then(function(res){
        console.log(res);
      });
    },
    postFn(){
      // 发起一个post请求
      PostJokeAPI({
        username: "ykz"
      }).then(res=>{
        console.log(res)
      })
    }
  }
};
</script>
