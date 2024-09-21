<template>
<v-container>
  <products-table></products-table>
</v-container>
</template>

<script>
import ProductsTable from '@/components/ProductsTable.vue';

export default {
  name: 'dashboard-view',
  components: {
    ProductsTable,
  },
};
</script>
