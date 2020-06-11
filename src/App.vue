<template>
  <div class="container">
    <div class="row">
      <div class="col-8 mx-auto mt-4">
        <h1>Routing</h1>
        <Header></Header>
        <hr />
        <router-view></router-view>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components: {
    Header,
  },
};
</script>

<style></style>
