<template>
    <div>
        <h1 class="mb-5">Vista de Cobro</h1>
        <v-row>
            <!-- Autocompletar productos -->
            <v-col cols="12" md="6">
                <v-autocomplete v-model="search" :items="products"
                 label="Buscar producto" item-text="name"
                    item-value="id" @change="addProduct" solo></v-autocomplete>
            </v-col>
        </v-row>

        <!-- Total de la venta -->
        <v-row>
            <v-col cols="12">
                <h3>Total: ${{ total.toFixed(2) }}</h3>
            </v-col>
        </v-row>

        <!-- Botón de Cobrar -->
        <v-row>
            <v-col cols="12">
                <v-btn color="green" @click="openPaymentDialog">Cobrar</v-btn>
            </v-col>
        </v-row>

        <!-- Dialog para método de pago -->
        <v-dialog v-model="paymentDialog" max-width="500px">
            <v-card>
                <v-card-title class="headline">Selecciona el Método de Pago</v-card-title>
                <v-card-text>
                    <v-radio-group v-model="selectedPaymentMethod" column>
                        <v-radio label="Efectivo" value="efectivo"></v-radio>
                        <v-radio label="Tarjeta" value="tarjeta"></v-radio>
                        <v-radio label="Transferencia" value="transferencia"></v-radio>
                    </v-radio-group>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="green" @click="processPayment">Procesar Pago</v-btn>
                    <v-btn color="red" @click="paymentDialog = false">Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Dialog para actualizar cantidad de producto -->
        <v-dialog v-model="updateDialog" max-width="400px">
            <v-card>
                <v-card-title class="headline">Actualizar Cantidad</v-card-title>
                <v-card-text>
                    <v-text-field v-model="updatedQuantity" label="Cantidad"
                     type="number" min="1"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="blue" @click="updateProductQuantity">Actualizar</v-btn>
                    <v-btn color="red" @click="updateDialog = false">Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-data-table :headers="headers" :items="cart" class="elevation-1"
                     item-key="id">
                     <template slot="item.actions" slot-scope="{ item }">
                        <v-btn icon small color="blue" @click="openUpdateDialog(item)">
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn icon small color="red" @click="removeProduct(item)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                        </template>

                    </v-data-table>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'CobrarView',
    data: () => ({
        search: '',
        selectedPaymentMethod: 'efectivo',
        paymentDialog: false,
        updateDialog: false,
        updatedProduct: null,
        updatedQuantity: 1,
        products: [
            { id: 1, name: 'Producto A', price: 50.0 },
            { id: 2, name: 'Producto B', price: 30.0 },
            { id: 3, name: 'Producto C', price: 25.0 },
        ],
        cart: [],
        headers: [
            { text: 'Producto', value: 'name' },
            { text: 'Cantidad', value: 'quantity' },
            { text: 'Acciones', value: 'actions', sortable: false },
        ],
    }),
    computed: {
        // Calcular el total de la venta
        total() {
            return this.cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
        }
    },
    methods: {
        // Agregar producto al carrito
        addProduct(productId) {
            const product = this.products.find(p => p.id === productId);
            if (product) {
                const existingProduct = this.cart.find(p => p.id === productId);
                if (existingProduct) {
                    existingProduct.quantity += 1;
                } else {
                    this.cart.push({ ...product, quantity: 1 });
                }
            }
            this.search = ''; // Limpiar el campo de búsqueda
        },
        // Eliminar producto del carrito
        removeProduct(item) {
            const index = this.cart.indexOf(item);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        },
        // Abrir diálogo para actualizar la cantidad del producto
        openUpdateDialog(product) {
            this.updatedProduct = product;
            this.updatedQuantity = product.quantity;
            this.updateDialog = true;
        },
        // Actualizar la cantidad del producto en el carrito
        updateProductQuantity() {
            if (this.updatedProduct && this.updatedQuantity > 0) {
                this.updatedProduct.quantity = this.updatedQuantity;
                this.updateDialog = false;
            }
        },
        // Abrir diálogo para seleccionar método de pago
        openPaymentDialog() {
            this.paymentDialog = true;
        },
        // Procesar el pago
        processPayment() {
            if (this.cart.length > 0) {
                alert(`Pago procesado correctamente. Método de pago: ${this.selectedPaymentMethod}. Total: $${this.total.toFixed(2)}`);
                this.cart = []; // Limpiar carrito después del pago
                this.paymentDialog = false; // Cerrar diálogo de pago
            } else {
                alert('No hay productos en el carrito.');
            }
        }
    }
};
</script>

<style scoped>
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>