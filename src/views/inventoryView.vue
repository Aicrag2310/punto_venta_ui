<template>
    <v-container>
        <inventory-component></inventory-component>
    </v-container>
</template>

<script>
import inventoryComponent from '@/components/inventory.vue';

export default {
  name: 'inventory-view',
  components: {
    inventoryComponent,
  },
};
</script>
