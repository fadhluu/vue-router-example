<template>
  <div>
    <h1>User Page</h1>
    <hr />
    <button class="btn btn-primary" @click="navigateToHome">
      Back to Home
    </button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style></style>
