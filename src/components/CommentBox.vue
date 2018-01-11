<template>
  <div class="comment-box">
    <input v-model="message" placeholder="请填写评论" />
    <button @click="submitComment">提交</button>
    <div v-bind:key="comment.id" v-for="comment in reversedComments">
      {{ comment.body }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommentBox',
    data: () => ({
      message: '',
      comments: [
        {
          id: '1',
          body: '评论1'
        },
        {
          id: '2',
          body: '评论2'
        }
      ]
    }),
    computed: {
      reversedComments: function () { return this.comments.reverse() }
    },
    methods: {
      submitComment () {
        console.log('submitComment', this.message)
        let comment = {
          id: '3',
          body: this.message
        }
        this.comments.push(comment)
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
  }
</style>
