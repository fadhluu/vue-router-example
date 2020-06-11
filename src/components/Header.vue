<template>
  <nav class="navbar navbar-expand navbar-dark bg-success">
    <ul class="navbar-nav mr-auto">
      <router-link
        to="/"
        tag="li"
        active-class="active"
        class="nav-item"
        exact=""
        ><a class="nav-link">Home</a></router-link
      >
      <router-link to="/user" tag="li" active-class="active" class="nav-item">
        <a class="nav-link">User</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
