<template>
  <div class="mt-4">
    <h3>User Edit</h3>
    <p>Editing User with ID: {{ id }}</p>
    <div class="form-group">
      <button class="btn btn-success" @click="confirmed = !confirmed">
        Confirmed
      </button>
      status: {{ confirmed }}
    </div>
    <p>Query Params:</p>
    <ul class="list-group">
      <li class="list-group-item">Locale: {{ this.$route.query.locale }}</li>
      <li class="list-group-item">
        Unique ID: {{ this.$route.query.unique_id }}
      </li>
    </ul>
    <div style="height: 700px;"></div>
    <p id="data">Another data</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      confirmed: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else if (confirm('Are you sure?')) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style></style>
