<template>
    <div class="page news">
        <detail :article="newsinfo"></detail>
        <div class="news-comment">
           <comment :id="this.$route.params.id"></comment>
        </div>
    </div>
</template>

<script>

import axios from "axios";
import dateformat from "@/filters/dateformat"
import comment from "../common/comment.vue"
import detail from "../common/detail.vue"


export default {
  data(){
    return{
      newsinfo:{}
    }
  },
  created(){
    axios({
      url:"http://www.escook.cn:3000/api/getnew/"+ this.$route.params.id
    }).then(res=>{
      if(res.data.status == 0){
        this.newsinfo = res.data.message[0]
      }
    })
  },
  filters:{
    dateformat
  },
  components:{
    comment,
    detail
  }
}
</script>

<style>
/* 不需要scoped */
.news {
    padding-left: 5px;
    padding-right: 5px;
}


</style>


