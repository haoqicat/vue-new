<template>
  <div class="post-body">
    <h1>{{ postId }}</h1>
    <div class="comment-count">
      {{ commentCount }}评论
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PostBody',
    props: ['postId'],
    computed: {
      commentCount() { return this.$store.state.comment.all.length }
    }
  }
</script>

<style scoped>
  .post-body {
    background-color: #fff;
    width: 400px;
    min-height: 30vh;
    margin: 20px auto;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    position: relative;
  }

  .comment-count {
    position: absolute;
    bottom: 10px;
    right: 10px;
    border-bottom: 1px solid gray;
  }
</style>
