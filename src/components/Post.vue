<template>
  <div>
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
