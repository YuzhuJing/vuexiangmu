<template>
  <div class="page">
    <comment :id="$route.params.id"></comment>
  </div>
</template>

<script>
import comment from "../common/comment.vue"
export default {
  components:{
    comment
  }
}
</script>

<style>

</style>
