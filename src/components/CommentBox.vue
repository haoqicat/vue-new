<template>
  <div class="comment-box">
    <div v-for="comment in comments">
      {{ comment }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommentBox',
    data: () => ({
      comments: [
        '评论1',
        '评论2'
      ]
    })
  }
</script>

<style scoped>
  .comment-box {
    background-color: #fff;
    width: 400px;
    min-height: 30vh;
    margin: 20px auto;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  }
</style>
