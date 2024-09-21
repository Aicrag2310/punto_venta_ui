<template>
  <div>
    <v-toolbar color="primary">
      <v-app-bar-nav-icon dark @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      absolute
      temporary
      color="primary"
    >
      <v-list dense nav class="py-0">
        <v-list-item two-line :class="'px-0'">
          <v-list-item-avatar tile>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Menu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item to="/dashboard">
          <v-list-item-icon>
            <v-icon>mdi-package-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/dashboard">
          <v-list-item-icon>
            <v-icon>mdi-cash</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Productos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/inventory">
          <v-list-item-icon>
            <v-icon>mdi-store</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Inventario</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/Ventas">
          <v-list-item-icon>
            <v-icon>mdi-cash-register</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Ventas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/Ajustes">
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Ajustes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/login">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'app-navigation',
  data: () => ({
    drawer: null,
    miniVariant: false,
  }),
};
</script>

<style lang="less">
.v-list .v-list-item--active,
.v-list .v-list-item--active .v-icon {
  color: white !important;
}

.white-text {
  color: white !important;
}
</style>
