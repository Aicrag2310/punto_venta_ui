<template>
<div>
    <v-row class="d-flex center justify-space-between mx-2 mt-3">
    <h1 class="title-text">Inventario</h1>
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
        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="secondary" class="ml-2 white--text"
               fab small v-bind="attrs" v-on="on" @click="exportXlsx">
                <v-icon>
                  mdi-file-download
                </v-icon>
              </v-btn>
            </template>
            <span>Descargar plantilla</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" class="ml-2 white--text" fab small v-bind="attrs" v-on="on"
                @click="openBulkUpdateUploadFileDialog">
                <v-icon>
                  mdi-upload
                </v-icon>
              </v-btn>
            </template>
            <span>Subir actualización</span>
          </v-tooltip>
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
        no-data-text="Producto no encontrado"
        >
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
      text: 'Producto',
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
      text: 'Cantidad Min',
      value: 'status',
      align: 'center',
      sortable: false,
    },
    {
      text: 'Main',
      value: 'status',
      align: 'center',
      sortable: false,
    },
    {
      text: 'Edit Inventory',
      value: 'editInventory',
      align: 'center',
      sortable: false,
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
