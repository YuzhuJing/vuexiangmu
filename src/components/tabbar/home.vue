<template>
    <div class="page">
      <mt-swipe :auto="4000">
       <mt-swipe-item v-for="(v,i) in pics" :key="i">
         <img :src="v.img" alt="">
       </mt-swipe-item>
       
      </mt-swipe>
    </div>
</template>

<script>
//引入axios
import axios from "axios"

export default {
  data(){
    return {
      pics:[]
    }
  },
  created(){
    axios({
      url:"http://www.escook.cn:3000/api/getlunbo"
    }).then(res => {

      if(res.data.status == 0){
        this.pics  = res.data.message;
      }
    })
  }
}
</script>

<style scoped>
  .mint-swipe{
    height: 157px;
  }
  .mint-swipe img{
    width: 100%;
    display:block;
  }
</style>


