<template>
  <div class="mt-4">
    <h3>User Edit</h3>
    <p>Editing User with ID: {{ id }}</p>
    <p>Query Params:</p>
    <ul class="list-group">
      <li class="list-group-item">Locale: {{ this.$route.query.locale }}</li>
      <li class="list-group-item">
        Unique ID: {{ this.$route.query.unique_id }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    console.log(this.$route);
  },
};
</script>

<style></style>
