<template>
  <div class="mt-4">
    <h3>User Detail</h3>
    <p>User ID: {{ id }}</p>
    <div class="form-group">
      <router-link tag="button" class="btn btn-warning" :to="link"
        >Edit User</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      link: {
        name: 'userEdit',
        params: { id: this.$route.params.id },
        query: { locale: 'EN-US', unique_id: 100 },
        hash: '#data',
      },
    };
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    },
  },
};
</script>

<style></style>
