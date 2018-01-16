<template>
  <div class="comment-box">
    <div class="comment-form">
      <input v-model="message" placeholder="请填写评论" />
      <button @click="submitComment">提交</button>
    </div>
    <div class="list">
      <div v-bind:key="comment.id" v-for="comment in reversedComments">
        {{ comment.body }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommentBox',
    data: () => ({
      message: ''
    }),
    computed: {
      postId() {
        return this.$route.params.id
      },
      comments() {
        return this.$store.getters.getComments(this.postId)
      },
      reversedComments() { return this.comments.slice().reverse() }
    },
    methods: {
      submitComment () {
        let comment = {
          body: this.message,
          post: this.postId
        }
        this.$store.dispatch({ type: 'addComment', comment })
        this.message = ''
      }
    }
  }
</script>

<style scoped>
  .comment-box {
    background-color: #fff;
    width: 400px;
    min-height: 30vh;
    margin: 20px auto;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    padding: 20px;
  }
  .comment-form {
    display: flex;
  }

  .list {
    margin-top: 20px;
  }

  .list > div {
    border-bottom: 1px solid rgba(0, 0, 0, .4);
    padding: 5px;
  }

  .comment-form input {
    flex-grow: 1;
  }

  .comment-form button {
    margin-left: 5px;
  }
</style>
