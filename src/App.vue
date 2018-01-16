<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
import Post from './components/Post'

export default {
  name: 'app',
  components: {
    Post
  },
  created() {
    this.$store.dispatch({ type: 'loadComments' })
    this.$store.dispatch({ type: 'loadPosts' })
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
</style>
