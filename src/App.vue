<template>
  <v-app style="background-color: #f5f5f5;">
      <app-navigation v-if="!['login'].includes($route.name)"></app-navigation>
      <v-main>
          <router-view></router-view>
          <router-link to="/dashboard"></router-link>
      </v-main>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue';
import { TokenUtils } from '@/utils/TokenUtils';
import * as AppUtils from '@/utils/AppUtils';

export default {
  name: 'App',

  components: {
    AppNavigation,
  },

  data: () => ({}),

  async mounted() {
    if (TokenUtils.hasToken()) {
      const payload = TokenUtils.getJwtData();
      console.log(payload);
      if (window.location.pathname === '/') {
        AppUtils.redirectToUserSectionByAttributes(this.$router);
      }
    } else {
      this.$router.push('/login');
    }
  },
};
</script>

<style lang="less">

.title-text {
font-size: 2rem;
font-weight: 300;
color: #0d1d4e;
}

.subtitle-text {
font-size: 1.2rem;
font-weight: 300;
margin-bottom: 0 !important;
}

.swal2-popup {
font-family: 'Roboto', sans-serif !important;
}

.success-notif {
background-color: #4ed289;
color: white;

.title {
  color: white;
}
}

.snotifyToast {
&__title {
  font-size: 1.2rem;
}
}

.snotify-icon {
max-width: 36px;
max-height: 36px;
}

.snotify-async {
background-color: #4e6dd2da;
}

.snotify-success {
background-color: #4caf4fc9;
}

.snotify-error {
background-color: #f44336da;
}
.center{
display: flex;
text-align: center;
justify-content: center;
align-items: center;
}
.w-full{
width: 100%;
}
.h-full{
height: 100%;
}
.gap-2{
gap: 0.5rem;
}
.flex-nowrap{
flex-wrap: nowrap;
}
</style>
