<template>
    <div class="page">
      <detail :article="picinfo">
        <div slot="pics">
          <vue-preview :slides="littlepic"></vue-preview>
        </div>
      </detail>
      <comment :id="$route.params.id"></comment>
    </div>
</template>

<script>
import detail from "../common/detail.vue"
import comment from "../common/comment";
import axios from "axios"
export default {
  components:{
    detail,
    comment
  },
  data(){
    return{
      picinfo:{},
      littlepic:[]
    }
  },
  created(){
    axios({
      url:"http://www.escook.cn:3000/api/getimageInfo/"+this.$route.params.id
    }).then(res=>{
      if(res.data.status == 0){
        this.picinfo = res.data.message[0]
      }
    }),
    axios({
      url:"http://www.escook.cn:3000/api/getthumimages/" + this.$route.params.id
    }).then(res=>{
      if(res.data.status == 0){

        res.data.message.forEach(v=>{
            v.msrc = v.src;
            v.alt = "pic";
            v.title = "缩略图";
            v.w = 600;
            v.h = 400;
        })
        this.littlepic = res.data.message
      }
    })
  },

}
</script>

<style scoped>
  .pic-detail{
    padding-left: 5px;
    padding-right: 5px;
}

.my-gallery img{
  /* width: 20%; */
  width: 100%;
  margin: 1%;
  box-shadow: 0 0 3px 0px;
}

figure{
    display: inline-block;
    margin: 5px;
    width: 20%;
}
</style>


