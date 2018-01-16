<template>
  <div class="post-body">
    <h1>{{ post.title }}</h1>
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
      commentCount() { return this.$store.state.comment.all.length },
      post() {
        return this.$store.state.post.all.find(
          t => t.id === this.postId
        )
      }
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
    display: flex;
  }

  .post-body h1 {
    text-align: center;
    width: 100%;
    margin-top: 20px; 
  }

  .comment-count {
    position: absolute;
    bottom: 10px;
    right: 10px;
    border-bottom: 1px solid gray;
  }
</style>
