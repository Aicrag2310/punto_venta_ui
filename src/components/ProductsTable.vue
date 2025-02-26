<template>
  <div>
    <v-row class="d-flex center justify-space-between mx-2 mt-3">
      <h1 class="title-text">Productos</h1>
      <div class="d-flex center gap-2">
        <v-text-field
          v-model="filterQuery"
          @keypress.enter="onSearch"
          outlined
          append-icon="mdi-magnify"
          single-line
          label="Buscar Productos"
          color="secondary"
          hide-details
          dense
          @click:clear="
            filterQuery = '';
            onSearch();
          "
          @change="onSearch"
        ></v-text-field>
        <v-btn to="/new-product" color="primary" dark>
          <v-icon>mdi-plus</v-icon>
          Product
        </v-btn>
        <v-menu bottom right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="downloadTemplate">
              <v-list-item-title>Download Template</v-list-item-title>
            </v-list-item>
            <v-list-item @click="openDialog">
              <v-list-item-title>Bulk Update Data</v-list-item-title>
            </v-list-item>
            <v-list-item @click="exportProducts">
              <v-list-item-title>Export Products</v-list-item-title>
            </v-list-item>
            <v-list-item @click="preProcessImages">
              <v-list-item-title>Process Product Images</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <v-data-table
          :items="items"
          :loading="isTableLoading"
          :server-items-length="itemsCount"
          :headers="headers"
          :page.sync="tablePage"
          :footer-props="{ itemsPerPageOptions: [10, 30, 50, 100] }"
          :items-per-page.sync="tableLimit"
          @update:page="onUpdate"
          @update:items-per-page="onUpdate"
          no-data-text="Productos no encontrado"
        >
        <template slot="item.action" slot-scope="{ item }">
          <div class="center gap-2">
            <v-btn @click="editItem(item)" color="green" dark>
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn @click="removeProduct(item)" dark color="red">
              <v-icon small>mdi-delete</v-icon>
            </v-btn>
          </div>
        </template>

        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'products-table',
  data: () => ({
    headers: [{
      text: 'Producto ID',
      value: 'id',
      align: 'center',
      sortable: false,
    },
    {
      text: 'Nombre',
      value: 'status',
      align: 'center',
      sortable: false,
    },
    {
      text: 'Categoria',
      value: 'status',
      align: 'center',
      sortable: false,
    },
    {
      text: '',
      value: 'action',
      align: 'center',
    },
    ],
  }),
};
</script>

<style lang="less" scoped>
.main-container {
  background-color: #dddddd75;
  border-radius: 0.5rem;
  padding-top: 1.2rem;
  padding-bottom: 1rem;
  cursor: pointer;

  .title {
    text-align: center;
    margin: 0 auto;
    font-size: 1rem !important;
    font-weight: 300;
    font-size: 1.1rem !important;
    margin-bottom: 1rem;
    color: #4d4d4d75;
  }
}

.hidden {
  display: none;
}

.preview-container {
  .preview-file-container {
    position: relative;
    display: inline-block;
    max-width: 18%;
    margin: 0.5rem;
    -webkit-animation: fadein 1.5s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1.5s; /* Firefox < 16 */
    -ms-animation: fadein 1.5s; /* Internet Explorer */
    -o-animation: fadein 1.5s; /* Opera < 12.1 */
    animation: fadein 1.5s;

    .image-header {
      height: 20%;
      width: 100%;
      top: 0%;
      position: absolute;
      color: white;
      background: rgb(2, 0, 36);
      background: linear-gradient(
        180deg,
        rgba(35, 35, 37, 0.3) 0%,
        rgba(35, 35, 37, 0.2) 60%,
        rgba(69, 69, 75, 0) 100%
      );

      .header-text {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        left: 50%;
      }

      .close-icon {
        z-index: 3000;
        position: absolute;
        top: 8px;
        right: 16px;

        &:hover {
          color: red !important;
        }
      }
    }

    .preview-image {
      width: 100%;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
