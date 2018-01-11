<template>
  <div class="post">
    <PostBody />
    <CommentBox />
  </div>
</template>

<script>
  import PostBody from './PostBody'
  import CommentBox from './CommentBox'
  
  export default {
    name: 'Post',
    components: {
      PostBody,
      CommentBox
    }
  }
</script>

<style scoped>
  .post {
    background-color: #00bcd4;
  }
</style>
