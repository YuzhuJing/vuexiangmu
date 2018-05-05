<template>
    <div class="page news">
        <div class="news-detail">
            <div class="news-title">
                <h4 v-text="newsinfo.title"></h4>
                <p class="news-info">
                    <span>发表时间: {{newsinfo.add_time | dateformat("YYYY年MM月DD日 HH:mm:ss")}}</span>
                    <span class="mui-pull-right">点击： {{newsinfo.click}}次</span>
                </p>
                <hr>
            </div>
            <div class="news-content" v-html="newsinfo.content">
                
            </div>
        </div>
        <div class="news-comment">
            
        </div>
    </div>
</template>

<script>

import axios from "axios";
import dateformat from "@/filters/dateformat"


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
  }
}
</script>

<style>
/* 不需要scoped */
.news {
    padding-left: 5px;
    padding-right: 5px;
}

.news-content img{
    width: 100%;
}

.news-comment{
    margin-bottom: 10px;
}
</style>


