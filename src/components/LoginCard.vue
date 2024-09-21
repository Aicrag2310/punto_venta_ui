<template>
  <v-row class="login center">
    <v-col sm="5">
      <v-col cols="12" sm="12">
        <v-img src="../assets/logo.png" alt="" contain class="mt-16"></v-img>
      </v-col>
    </v-col>
    <v-col cols="12" sm="7" class="center">
      <v-row align="center" justify="center">
        <v-col cols="6" sm="12" md="8">
          <v-card class="elevation-12">
            <!-- LOGIN CARD TOOLBAR -->
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>
                <v-icon>mdi-login</v-icon>
                Login
              </v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <!-- LOGIN CARD TOOLBAR -->
            <!-- LOGIN INPUT FORM -->
            <v-card-text>
              <v-form @submit.prevent="authUser">
                <v-text-field outlined v-model="username"
                 label="Username" color="secondary" name="login"
                  prepend-icon="mdi-account" type="text" />
                <v-text-field outlined v-model="password"
                 id="password" label="Password" color="secondary" name="password"
                  prepend-icon="mdi-lock" type="password" @keypress.enter="authUser" />
              </v-form>
            </v-card-text>
            <!-- LOGIN INPUT FORM -->
            <!-- LOGIN BUTTONS -->
            <v-card-actions>
              <v-spacer />
              <v-btn @click="authUser" color="secondary">Enter</v-btn>
            </v-card-actions>
            <!-- LOGIN BUTTONS -->
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { TokenUtils } from '@/utils/TokenUtils';
import * as AppUtils from '@/utils/AppUtils';

export default {
  name: 'LoginCard',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async authUser() {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNDZjMzQ5NC1mM2I0LTRjYjktYjY0OC1kNWJiNzUyODg1ZjYiLCJpZGVudGl0eSI6MSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIiwicm9sZXMiOlsiQWRtaW5pc3RyYWRvciJdfQ.4siTeZw5IdFLqAZvMPOk360jRASdDgrS1WoY8k3fWOU';
      TokenUtils.setToken(token);
      // eslint-disable-next-line
      const payload = TokenUtils.getJwtData();
      AppUtils.redirectToUserSectionByAttributes(this.$router);
    },
  },
};
</script>

<style scoped>
.admin-text {
  z-index: 1;
}

h2 {
  letter-spacing: 0.25rem;
  color: white;
  font-size: 2rem;
  font-weight: 300;
}

.login {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .login {
    flex-direction: row

;
  }
}
</style>
