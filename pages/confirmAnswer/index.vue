<template>
  <v-card class="elevation-1">
    <v-row>
      <h3 class="mt-7 mb-5 ml-5">ຢືນຢັນຄຳຕອບ >> ຄຳຕອບມາໃໝ່</h3>
    </v-row>
    <v-row class="my-5 mt-n11 d-flex justify-center">
      <v-badge
        v-if="getTypeAndStatus.length > 0"
        color="error"
        :content="getTypeAndStatus.length"
      >
        <h2>ລາຍການຄຳຕອບມາໃໝ່</h2>
      </v-badge>
      <h2 v-else>ລາຍການຄຳຕອບມາໃໝ່</h2>
    </v-row>
    <v-divider></v-divider>
      <!-- _______________________________________________________________-2-___________________________________ -->
        <v-card flat>
          <v-data-table
            :search="newsearch"
            :headers="newHeaders"
            :items="getTypeAndStatus"
            :single-expand="true"
            :expanded.sync="newexpanded"
            class="elevation-3"
          >
            <template #[`item.sale_date`]="{ value }">
              <div>
                {{ formatDateLo(value) }}
              </div>
            </template>
            <template #top>
              <v-toolbar flat>
                <v-text-field
                  v-model="newsearch"
                  append-icon="mdi-magnify"
                  label="ຄົ້ນຫາຂໍ້ມູນ"
                  single-line
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-toolbar>
            </template>
            <template #[`item.actions`]="{ item }">
              <v-tooltip bottom color="green">
                <template #activator="{ on, attrs }">
                  <v-icon
                    large
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                    @click="viewItem(item)"
                  >
                    mdi-forum
                  </v-icon>
                </template>
                <span>ກວດສອບ ແລະ ຢືນຢັນ</span>
              </v-tooltip>
              <v-tooltip bottom color="error">
                <template #activator="{ on, attrs }">
                  <v-icon
                    large
                    color="error"
                    v-bind="attrs"
                    v-on="on"
                    @click="deleteItem(item.id)"
                  >
                    mdi-close-outline
                  </v-icon>
                </template>
                <span>ຍົກເລີກລາຍການສັ່ງຊື້</span>
              </v-tooltip>
            </template>
          </v-data-table>
        </v-card>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    newsearch:null,
    text: '',
    dialog: false,
    search: '',
    dialogDelete: false,
    getTypeAndStatus: [
      {
        idx: 1,
        customerName: 'John Doe',
        customerPhone: '123-456-7890',
        sale_date: '2023-09-06',
        actions: '...',
      },
      {
        idx: 2,
        customerName: 'Jane Smith',
        customerPhone: '987-654-3210',
        sale_date: '2023-09-07',
        actions: '...',
      },
      {
        idx: 3,
        customerName: 'Alice Johnson',
        customerPhone: '555-123-4567',
        sale_date: '2023-09-08',
        actions: '...',
      },
      // Add more objects as needed
    ],
    newHeaders: [
      { text: 'ລໍາດັບ', value: 'idx' },
      { text: 'ຜູ້ຕັ້ງຄຳຕອບ', value: 'customerName' },
      { text: 'ເບີ້ໂທ', value: 'customerPhone' },
      { text: 'ວັນທີ່ຕັ້ງຄຳຕອບ', value: 'sale_date' },
      { text: 'ຈັດການ', value: 'actions' },
    ],
  }),
  methods: {
    viewItem(item) {
      this.$router.push('/order_online/' + item.id)
    },
    deleteItem(id) {
      this.$swal
        .fire({
          title: 'ທ່ານແນ່ໃຈບໍ?',
          text: `ທີ່ຈະຍົກເລີກຂໍ້ມູນລາຍການນີ້!`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'ຢືນຢັນລືບ!',
          cancelButtonText: 'ຍົກເລີກ',
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            this.loading = true
            await this.$axios.delete(`/sale/${id}`)
            await this.$store.dispatch('sale/selectByTypeAndStatus', {
              type: 'online',
              status: 'pending',
            })
            this.loading = false
            this.$swal.fire({
              title: 'ລືບສຳເລັດ!',
              text: 'ຂໍ້ມູນໄດ້ຖືກລືບສຳເລັດ.',
              icon: 'success',
              confirmButtonText: 'OKAY',
              customClass: {
                container: 'my-swal-container',
              },
            })
          }
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.tcenter {
  width: 200px;
  min-width: 100px;
}
.tcenter >>> input {
  text-align: center;
}
</style>
