<template>
  <div>
    <v-row>
      <v-col cols="12">
        <div class="text-container">
          <h2 class="moving-text">Post question people like the most.</h2>
        </div>
      </v-col>
      <v-col cols="5">
        <v-row>
          <v-col cols="6" class="my-0 py-0">
            <v-dialog
              ref="startDialog"
              v-model="startModal"
              :return-value.sync="startDate"
              persistent
              width="290px"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                  v-model="startDate"
                  label="Start Date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="startDate" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="startModal = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.startDialog.save(startDate)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="6" class="my-0 py-0">
            <v-dialog
              ref="endDialog"
              v-model="endModal"
              :return-value.sync="endDate"
              persistent
              width="290px"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                  v-model="endDate"
                  label="End Date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="endDate" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="endModal = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.endDialog.save(endDate)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="6" class="my-0 py-0">
            <v-select
              v-model="selectedOption"
              outlined
              dense
              :items="options"
              label="Select an option"
              class="pl-8"
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="7" class="d-flex justify-end">
        <v-card class="mb-2 teal white--text">
          <div class="pa-10">
            <div class="d-flex">
              <h3 class="mr-1">ລວມໂພສຕ໌ຄຳຖາມທັງໝົດ:</h3>
              <span> {{ formatPrice(totalSaleTotal) }} ໂພສຕ໌</span>
            </div>
            <div class="d-flex">
              <h3 class="mr-1">ລວມຈຳນວນຜູ້ໂພສຕ໌ຄຳຖາມທັງໝົດ:</h3>
              <span> {{ formatPrice(0) }} ຄົນ</span>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" class="d-flex justify-end">
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Exports
            </v-btn>
          </template>
          <v-list class="py-0" justify="start">
            <v-btn block text color="success"
              ><v-icon left>mdi-microsoft-excel</v-icon> excel</v-btn
            >
            <v-btn block text color="error"
              ><v-icon left>mdi-file-pdf-box</v-icon> pdf</v-btn
            >
            <v-btn block text color="primary" @click="generateAndPrintBill"
              ><v-icon>mdi-printer</v-icon> print</v-btn
            >
          </v-list>
        </v-menu>
      </v-col>
    </v-row>

    <!-- :items="filteredSalesData" -->
    <v-data-table
      :headers="newHeaders"
      :items="salesData"
      :search="newSearch"
      class="elevation-3"
      item-key="id"
    >
      <template #[`item.sale_date`]="{ value }">
        <div>{{ formatDateBill(value) }}</div>
      </template>
      <template #[`item.sale_total`]="{ value }">
        {{ formatPrice(value) }} ກີບ
      </template>
      <template #[`item.actions`]="{ item }">
        <div>
          <v-btn text small @click="review(item.id)"
            ><v-icon>mdi-eye</v-icon></v-btn
          >
        </div>
      </template>
    </v-data-table>

    <!-- ______________________dialog___________________ -->
    <v-dialog v-model="dialog" max-width="1000">
      <!-- _______________________________table show details_____________________________ -->
      <div v-if="getDetail">
        <v-data-table :headers="newdetailHeader" :items="getDetail">
          <template #[`item.profile`]="{ value }">
            <v-icon v-if="!value" color="primary" large
              >mdi-file-image-remove</v-icon
            >
            <v-img v-else :src="value" width="50" height="50"></v-img>
          </template>
          <template #[`items.`]>
            <div></div>
          </template>
          <template #top>
            <div class="d-flex align-center justify-space-between">
              <div>
                <h3 class="pa-2">ລາຍລະອຽດການສັ່ງຊື້</h3>
              </div>
              <div class="d-flex align-center justify-space-between mt-n2">
                <v-tooltip top>
                  <template #activator="{ on }">
                    <v-btn
                      text
                      class="red white--text"
                      v-on="on"
                      @click="dialog = false"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </template>
                  <span>ປິດ</span>
                </v-tooltip>
              </div>
            </div>
          </template>
          <template #[`item.total`]="{ item }">
            {{ formatPrice(item.sale_price * item.quantity) }} ກີບ
          </template>
          <template #[`item.sale_price`]="{ item }">
            {{ formatPrice(item.sale_price) }} ກີບ
          </template>
        </v-data-table>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs
export default {
  data() {
    return {
      selectedOption: null,
      options: ['view', 'like', 'share'],
      startModal: false,
      endModal: false,
      startDate: null,
      endDate: null,
      newSearch: null,
      newHeaders: [
        { text: 'ລຳດັບ', value: 'index' },
        { text: 'ຊື່ຜູ້ໂພສຕ໌ຄຳຖາມ', value: 'customerName' },
        { text: 'ເບີຜູ້ໂພສຕ໌ຄຳຖາມ', value: 'customerPhone' },
        { text: 'ວັນທີໂພສຕ໌ຄຳຖາມ', value: 'sale_date' },
        { text: 'ລາຍລະອຽດ', value: 'actions' },
      ],
      newdetailHeader: [
        { text: 'ລໍາດັບ', value: 'index' },
        {
          text: 'ຮູບ',
          align: 'center',
          sortable: false,
          value: 'profile',
        },
        { text: 'ຊື່ສິນຄ້າ', value: 'productName' },
        { text: 'ປະເພດ', value: 'productName' },
        { text: 'ສີ', value: 'color' },
        { text: 'ຂະໜາດ', value: 'size' },
        { text: 'ຈໍານວນ', value: 'quantity' },
        { text: 'ລາຄາ(ກິບ)', value: 'sale_price' },
        { text: 'ລາຄາລວມ(ກິບ)', value: 'total' },
      ],
      loading: false,
      getDetail: [],
      dialog: false,
      salesData: [], // This will hold the data from the API
    }
  },
  computed: {
    filteredSalesData() {
      // Apply filtering based on the selected date range and other criteria
      if (this.startDate && this.endDate) {
        const start = new Date(this.startDate)
        const end = new Date(this.endDate)
        return this.salesData.filter(
          (item) =>
            new Date(item.sale_date) >= start && new Date(item.sale_date) <= end
        )
      } else {
        return this.salesData
      }
    },
    totalSaleTotal() {
      return this.salesData.reduce((total, item) => {
        return total + item.sale_total
      }, 0)
    },
  },
  watch: {
    startDate: 'fetchFilteredSalesData',
    endDate: 'fetchFilteredSalesData',
  },
  created() {
    // Set default start date to yesterday
    // const currentDate = new Date();
    // currentDate.setDate(currentDate.getDate() - 1);
    // Subtract 1 day
    // this.startDate = currentDate.toISOString().slice(0, 10);

    // Set default end date to today
    this.startDate = new Date().toISOString().slice(0, 10)
    this.endDate = new Date().toISOString().slice(0, 10)

    // Fetch initial sales data using the default start and end dates
    this.fetchFilteredSalesData()
  },
  mounted() {
    this.fetchSalesData()
  },
  methods: {
    review(id) {
      this.dialog = true
      this.$axios
        .get(`/saleDetail/sale/${id}`)
        .then((data) => {
          this.getDetail = data.data.result.map((item, index) => {
            return { index: index + 1, ...item }
          })
        })
        .catch((error) => {
          this.$toast.error('ບໍ່ມີຂໍ້ມູນ!', error)
          this.getDetail = []
        })
    },
    fetchSalesData() {
      // Fetch the data from the API
      fetch(
        `http://localhost:8080/sale/sales/status-type-date?sale_status=completed&sale_type=online&startDate=${this.startDate}&endDate=${this.endDate}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.salesData = data.result
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    },

    fetchFilteredSalesData() {
      if (this.startDate && this.endDate) {
        fetch(
          `http://localhost:8080/sale/sales/status-type-date?sale_status=completed&sale_type=online&startDate=${this.startDate}&endDate=${this.endDate}`
        )
          .then((response) => response.json())
          .then((data) => {
            this.salesData = data.result
          })
          .catch((error) => {
            console.error('Error fetching data:', error)
          })
      }
    },
    generateAndPrintBill(callback) {
      const table = document.querySelector('.v-data-table__wrapper table')
      const clonedTable = table.cloneNode(true)
      const headers = clonedTable.querySelectorAll('thead th')
      const actionsIndex = Array.from(headers).findIndex(
        (header) => header.textContent.trim() === 'Actions'
      )
      if (actionsIndex !== -1) {
        headers[actionsIndex].remove()
        const rows = clonedTable.querySelectorAll('tbody tr')
        rows.forEach((row) => row.children[actionsIndex].remove())
      }

      const printWindow = window.open('', '', 'height=500,width=800')
      printWindow.document.write('<html><head><title>ລາຍງານການຂາຍອອນໄລ</title>')
      printWindow.document.write(`
        <style>
            *{
              font-family: phetsarath ot;
            }
          table {
            border-collapse: collapse;
            margin: 0 auto;
            font-family: 'Noto Sans Lao Looped', serif;
            width: 100%;
          }
          td, th {
            border: 1px solid black;
            padding: 0.5rem;
          }
          .logo {
            width: 80px;
            height: auto;
            margin-right: 10px;
          }
          .shop-info {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
          }
          .shop-details {
            margin-top: 10px;
          }
          .bill-date {
            margin-bottom: 10px;
          }
          .total-price {
            font-weight: bold;
            margin-bottom: 10px;
          }
        </style>
      `)
      printWindow.document.write('</head><body >')

      // Add bill date
      printWindow.document.write(`<h2 style='text-align:center'>ລາຍງານ</h2>`)
      printWindow.document.write(
        `<h3 class="bill-date">ພະນັກງານ: ${this.$cookies.get('name')}</h3>`
      )
      printWindow.document.write(
        `<div style='display: flex; justify-content:space-between'">
    
    
              <div>
                <h3> ລາຍງານວັນທີຂາຍ: ${this.formatDate(this.startDate)}</h3>
                <h3> ລາຍງານວັນທີຂາຍ: ${this.formatDate(this.endDate)}</h3>
              </div>
              <div style='border:1px solid black; padding:8px; margin:5px'>
               <p class="bill-date">ລວມເງິນທັງໝົດ: ${this.formatPrice(
                 this.totalSaleTotal
               )} ກີບ</p>
               <p class="bill-date">ຈຳນວນທັງໝົດ: ${this.formatPrice(0)}</p>
                    </div>
                      </div>
                      
            
            `
      )

      // Add table
      printWindow.document.write(clonedTable.outerHTML)

      printWindow.document.write('</body></html>')
      printWindow.document.close()
      printWindow.print()

      // Clear the value after printing is complete
      setTimeout(() => {
        this.value = ''
      }, 1000) // Wait for 1 second before clearing the value

      if (typeof callback === 'function') {
        callback()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.text-container {
  overflow: hidden;
  white-space: nowrap;
}

.moving-text {
  animation: moveRight 10s linear infinite;
  // Add more styling for the moving text if needed
}

@keyframes moveRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
