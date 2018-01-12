<template>
  <div class="post">
    <div class="upper">
      <PostBody :title="title" />
    </div>
    <div class="bottom">
      <CommentBox />
    </div>
  </div>
</template>

<script>
  import PostBody from './PostBody'
  import CommentBox from './CommentBox'
  
  export default {
    name: 'Post',
    data: () => ({
      title: 'React 技巧'
    }),
    components: {
      PostBody,
      CommentBox
    }
  }
</script>

<style scoped>
  .post {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .upper {
    display: flex;
    min-height: 40vh;
    background-color: #00bcd4;
  }
  .bottom {
    display: flex;
    flex-grow: 1;
    background-color: rgba(240, 240, 240, .5);
  }
</style>
