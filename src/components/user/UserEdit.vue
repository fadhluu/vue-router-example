<template>
  <div class="mt-4">
    <h3>User Edit</h3>
    <p>Editing User with ID: {{ id }}</p>
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
