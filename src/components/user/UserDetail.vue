<template>
  <div class="mt-4">
    <h3>User Detail</h3>
    User ID: {{ id }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style></style>
