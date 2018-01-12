<template>
  <div class="post-body">
    <h1>{{ postId }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'PostBody',
    props: ['postId']
  }
</script>

<style scoped>
  .post-body {
    background-color: #fff;
    width: 400px;
    min-height: 30vh;
    margin: 20px auto;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  }
</style>
