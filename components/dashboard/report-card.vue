<template>
    <div>
        <v-row>
            <!-- first card -->
            <v-col cols="12" sm="3" lg="3" class="box2">
              <v-card
                v-ripple="{ class: `green--text` }"
                elevation="2"
                class="white--text pa-2"
                :style="{
                  background: 'linear-gradient(to right, #5e1b1b, #e60000)',
                  cursor: 'pointer',
                }"
                
              >
                <div class="d-flex justify-space-between align-center">
                  <div
                    class="py-2 text-caption text-sm-body-2 text-md-body-1 text-lg-h6"
                  >
                    <h3 color="#fff">ຈຳນວນໂພສຕໍ່ມື້</h3>
                    <span>50 ໂພສ</span>
                  </div>
                  <div>
                    <v-icon color="white" size="50">mdi-wallet-giftcard</v-icon>
                  </div>
                </div>
                <v-divider class="white mt-n2 mb-1"></v-divider>
                <div class="d-flex">
                  <v-icon v-ripple color="white" @click="Income()">{{
                    `mdi-arrow-${cardImcome ? 'down' : 'up'}-circle-outline`
                  }}</v-icon>
                  <div>{{ cardImcome ? 'ພາຍໃນປີ' : 'ພາຍໃນເດືອນ' }}</div>
                </div>
              </v-card>
            </v-col>
            <!-- second card -->
            <v-col cols="12" sm="3" lg="3">
              <v-card
                v-ripple="{ class: `green--text` }"
                elevation="2"
                class="white--text pa-2"
                :style="{
                  background: 'linear-gradient(to right, #5e1b1b, #e60000)',
                  cursor: 'pointer',
                }"
              >
                <div class="d-flex justify-space-between align-center">
                  <div
                    class="py-2 text-caption text-sm-body-2 text-md-body-1 text-lg-h6"
                  >
                    <h3>ຈຳນວນໂພສຕໍ່ມື້</h3>
                    <span>50 ໂພສ</span>
                  </div>
                  <div>
                    <v-icon color="white" size="50">mdi-wallet-giftcard</v-icon>
                  </div>
                </div>
                <v-divider class="white mt-n2 mb-1"></v-divider>
                <div class="d-flex">
                  <v-icon v-ripple color="white" @click="Income()">{{
                    `mdi-arrow-${cardImcome ? 'down' : 'up'}-circle-outline`
                  }}</v-icon>
                  <div>{{ cardImcome ? 'ພາຍໃນປີ' : 'ພາຍໃນເດືອນ' }}</div>
                </div>
              </v-card>
            </v-col>
            <!-- third card -->
            <v-col cols="12" sm="3" lg="3">
              <v-card
                v-ripple="{ class: `green--text` }"
                elevation="2"
                class="white--text pa-2"
                :style="{
                  background: 'linear-gradient(to right, #5e1b1b, #e60000)',
                  cursor: 'pointer',
                }"
              >
                <div class="d-flex justify-space-between align-center">
                  <div
                    class="py-2 text-caption text-sm-body-2 text-md-body-1 text-lg-h6"
                  >
                    <h3>ຈຳນວນໂພສຕໍ່ມື້</h3>
                    <span>50 ໂພສ</span>
                  </div>
                  <div>
                    <v-icon color="white" size="50">mdi-wallet-giftcard</v-icon>
                  </div>
                </div>
                <v-divider class="white mt-n2 mb-1"></v-divider>
                <div class="d-flex">
                  <v-icon v-ripple color="white" @click="Income()">{{
                    `mdi-arrow-${cardImcome ? 'down' : 'up'}-circle-outline`
                  }}</v-icon>
                  <div>{{ cardImcome ? 'ພາຍໃນປີ' : 'ພາຍໃນເດືອນ' }}</div>
                </div>
              </v-card>
            </v-col>
            <!-- four card -->
            <v-col cols="12" sm="3" lg="3">
              <v-card
                v-ripple="{ class: `green--text` }"
                elevation="2"
                class="white--text pa-2"
                :style="{
                  background: 'linear-gradient(to right, #5e1b1b, #e60000)',
                  cursor: 'pointer',
                }"
              >
                <div class="d-flex justify-space-between align-center">
                  <div
                    class="py-2 text-caption text-sm-body-2 text-md-body-1 text-lg-h6"
                  >
                    <h3>ຈຳນວນໂພສຕໍ່ມື້</h3>
                    <span>50 ໂພສ</span>
                  </div>
                  <div>
                    <v-icon color="white" size="50">mdi-wallet-giftcard</v-icon>
                  </div>
                </div>
                <v-divider class="white mt-n2 mb-1"></v-divider>
                <div class="d-flex">
                  <v-icon v-ripple color="white" @click="Income()">{{
                    `mdi-arrow-${cardImcome ? 'down' : 'up'}-circle-outline`
                  }}</v-icon>
                  <div>{{ cardImcome ? 'ພາຍໃນປີ' : 'ພາຍໃນເດືອນ' }}</div>
                </div>
              </v-card>
            </v-col>
            


        </v-row>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WorkspaceJsonIndex',
  
    data() {
      return {
        cardImcome:false,
  
      }
    },
  
    mounted() {},
  
    methods: {
      Income(){
        this.cardImcome = !this.cardImcome;
      }
    },
  }
  </script>
  
  <style lang="scss" scoped></style>
  