<template>
  <div class="home">
    <h1>Home</h1>
    {{ posts }}
    <router-link to="post/123">Post123</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    posts () {
      return this.$store.state.post.all
    }
  }
}
</script>
