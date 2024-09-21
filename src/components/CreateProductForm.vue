<template>
  <v-container>
    <v-row class="mb-2">
      <v-col cols="12" sm="12">
        <div class="center justify-space-between">
          <v-btn
            color="red"
            dark
            class="ens-cobsd-close-btn mr-2"
            @click="goBack"
          >
            Go Back
          </v-btn>
          <h1 class="title-text">Crear nuevo producto</h1>
        </div>
      </v-col>
    </v-row>

    <v-expansion-panels :value="expansionPanelsValue" multiple>
      <v-expansion-panel value="0" class="mb-4">
        <v-expansion-panel-header>
          <p class="subtitle-text">
            <v-icon color="secondary">mdi-tag</v-icon>
            General Information
          </p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="upperForm">
            <v-row>
              <!-- Nombre del producto -->
              <v-col cols="12" sm="8">
                <v-text-field
                  :rules="requiredRules"
                  v-model="name"
                  :disabled="disabled"
                  color="secondary"
                  outlined
                  label="Nombre *"
                  counter="250"
                ></v-text-field>
              </v-col>

              <!-- Código de barras -->
              <v-col cols="12" sm="4">
                <v-row no-gutters>
                  <v-text-field
                    v-model="barCode"
                    :disabled="disabled"
                    color="secondary"
                    outlined
                    label="Código de barras"
                    append-icon="mdi-barcode"
                    counter="100"
                    @click:append="showBarcodeReader = true"
                  ></v-text-field>
                  <v-dialog v-model="showBarcodeReader" width="500">
                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        Barcode Reader
                      </v-card-title>

                      <v-card-text>
                        <StreamBarcodeReader
                          v-if="showBarcodeReader"
                          ref="barcodeReader"
                          @decode="onDecode"
                        >
                        </StreamBarcodeReader>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </v-row>
              </v-col>

              <!-- Codes -->
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="keys"
                  :disabled="disabled"
                  color="secondary"
                  outlined
                  label="Descripción"
                  counter="250"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="measuringUnitId"
                  :disabled="disabled"
                  :items="categorias"
                  item-text="label"
                  item-value="value"
                  color="secondary"
                  outlined
                  label="Categorias"
                  @contextmenu.prevent
                ></v-autocomplete>
              </v-col>
              <!-- Switch para alternar precios -->
              <v-col cols="12" sm="12">
                <v-switch
                  v-model="isPricePerKilo"
                  label="Precio por Kilo"
                  color="primary"
                ></v-switch>
              </v-col>

              <!-- Mostrar precios según el switch -->
              <template v-if="!isPricePerKilo">
                <!-- Precio Menudeo -->
                <v-col cols="12" sm="6">
                  <v-currency-field
                    outlined
                    v-model="retailPrice"
                    color="secondary"
                    label="Precio Menudeo"
                  >
                    <template v-slot:prepend-inner>
                      <v-icon color="green">mdi-currency-usd</v-icon>
                    </template>
                  </v-currency-field>
                </v-col>

                <!-- Precio Mayoreo -->
                <v-col cols="12" sm="6">
                  <v-currency-field
                    outlined
                    v-model="wholesalePrice"
                    color="secondary"
                    label="Precio Mayoreo"
                  >
                    <template v-slot:prepend-inner>
                      <v-icon color="green">mdi-currency-usd</v-icon>
                    </template>
                  </v-currency-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    outlined
                    v-model="retailPrice"
                    color="secondary"
                    label="Cantidad Actual"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    outlined
                    v-model="retailPrice"
                    color="secondary"
                    label="Cantidad Minima"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    outlined
                    v-model="retailPrice"
                    color="secondary"
                    label="Cantidad Maxima"
                  >
                  </v-text-field>
                </v-col>
              </template>

              <!-- Mostrar solo si el switch está activado (Precio por Kilo) -->
              <template v-if="isPricePerKilo">
                <v-col cols="12" sm="12">
                  <v-currency-field
                    outlined
                    v-model="pricePerKilo"
                    color="secondary"
                    label="Precio por Kilo"
                  >
                    <template v-slot:prepend-inner>
                      <v-icon color="green">mdi-currency-usd</v-icon>
                    </template>
                  </v-currency-field>
                </v-col>
              </template>
            </v-row>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  name: 'edit-product-form',
  data: () => ({
    expansionPanelsValue: [0, 1, 2, 3, 4, 5],
    name: '' || null,
    model: '' || null,
    keys: '' || null,
    brandId: null,
    measuringUnitId: null,
    baseCost: 0,
    description: '' || null,
    disabled: false,
    showBarcodeReader: false,
    barCode: null,
    weight: null,
    isBrandsACLoading: true,
    requiredRules: [(v) => !!v || 'Este campo es obligatorio'],
    isPricePerKilo: false,
    categorias: [],
  }),
  methods: {
    goBack() {
      window.history.back();
    },
    positiveNumberRule(value) {
      if (!value || value < 0) {
        return 'Weight must be a positive number';
      }
      return true;
    },
  },
};
</script>

<style>
.fab--no-radius {
    border-radius: 8px !important;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
