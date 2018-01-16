<template>
  <div class="home">
    <div v-if="show">
      <ul class="list">
        <li :key="post.id" v-for="post in posts">
          <router-link :to="'post/' + post.id">{{ post.title }}</router-link>
        </li>
      </ul>
    </div>
    <div class="loading" v-else>
      加载中...
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    show () {
      return this.posts.length
    },
    posts () {
      return this.$store.state.post.all
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  background-color: #00bcd4;
  display: flex;
}
.list {
  width: 400px;
  margin: 20px auto;
}
.loading {
  color: white;
}
li {
  list-style: none;
  background-color: #fff;
  margin: 20px 0;
}

li:hover {
  box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
  cursor: pointer;
}

li a {
  color: #212121;
  display: block;
  padding: 10px;
}
</style>
