<template class="blue-background">
  <div class="blue-background">
    <login-card></login-card>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginCard from '@/components/LoginCard.vue';

export default {
  name: 'login-view',
  components: {
    LoginCard,
  },

  mounted() {
    // clear storage, if at login, past login data must be deleted
    localStorage.clear();
  },
};
</script>

<style lang="less" scoped>
.no-padding {
  padding: 0;
}

.blue-background {
  width: 100vw;
  height: 100vh;
  background-color: #5179fd;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
