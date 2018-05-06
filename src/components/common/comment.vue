<template>
  <div>
     <h4>发表评论</h4>
    <hr>
    <textarea name="" id="" cols="30" rows="3" v-model="content"></textarea>
    <mt-button type="primary" size="large" @click="send">发表评论</mt-button>

 <ul class="mui-table-view">

      <li v-for="(v, i ) in commentList" :key="i" class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <p class="comment-tilte">
            <span>第{{i+1}}楼</span>
            <span>发表时间：{{v.add_time | dateformat("YYYY-MM-DD HH:mm:ss")}}</span>
            <span class="mui-pull-right">
              {{v.user_name}}
            </span>
          </p>
          <img src="../../assets/images/menu1.png" class="mui-media-object mui-pull-right">
          <div class="mui-media-body">
            <p class="mui-ellipsis comment-content" v-text="v.content"></p>
          </div>
        </a>
      </li>
    </ul>
<mt-button type="danger" size="large" :plain="true" @click="more" v-show="isshow">加载更多</mt-button>

  </div>
</template>

<script>
import axios from "axios"
import dateformat from "../../filters/dateformat"
import { Toast } from 'mint-ui';


export default {
  data(){
    return{
      commentList:[],
      currentIndex:1,
      isshow:true,
      content:""
    }
  },
  filters:{
    dateformat
  },
  //因为评论组件会被多个页面复用，所以用到该组件的时候必须告诉它当前是给谁评论的
  //可以通过父组件向子组件传递值得方式将评论内容的id传过去
  props:["id"],
  created(){
    this.getData()
},
methods:{

  getData(){
      axios({
       url:"http://www.escook.cn:3000/api/getcomments/" + this.id + "?pageindex=" + this.currentIndex
    }).then(res=>{
      if(res.data.status == 0){
        this.commentList.push(...res.data.message) 
        if(res.data.message.length == 0){
          this.isshow = false;
          Toast("没有更多数据了。。。");
        }
      }
    })
    },
  more(){
    this.currentIndex++,
    this.getData()
  },
  send(){
    if(this.content.trim()){
      axios({
        url:"http://www.escook.cn:3000/api/postcomment/"+this.id,
        method:"post",
        data:"content="+this.content
      }).then(res=>{
        if(res.data.status == 0){
          this.commentList.unshift({
            add_time:new Date(),
            content:this.content,
            user_name:"jyz"
          });

          this.content = ""
        }
      });
      
    }
  }
}
}
</script>

<style>

</style>
