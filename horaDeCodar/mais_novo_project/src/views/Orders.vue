<template>
  <div class="main-container">
    <h1>Orders manager:</h1>
    <Dashboard />
  </div>
</template>
<script>
import Dashboard from '../components/Dashboard.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Orders',
  components: {
    Dashboard,
  },
};
</script>
