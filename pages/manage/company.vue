<template>
  <div>
    <div>
      <v-card class="px-5">
        <v-row>
          <v-col cols="12" sm="12" class="ml-3 mt-6 pa-0">
              <h4>ຈັດການຂໍ້ມູນພື້ນຖານ >> ຈັດການຂໍ້ມູນອົງກອນ</h4>
          </v-col>
          <v-col cols="12" sm="12" class="mt-2">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="search"
                  label="ຄົ້ນຫາ"
                  small
                  outlined
                  hide-details
                  clearable
                  prepend-inner-icon="mdi-magnify"
                  dense
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="d-flex justify-end">
                  <manage-admin-create/>
                </div>
              </v-col>
            </v-row>
            <div></div>
          </v-col>
          <v-col cols="12" sm="12">
            <v-card>
              <v-data-table
                :headers="headers"
                :items="items"
                :search="search"
                :items-per-page="10"
                :loading="loading"
                class="elevation-1"
              >
                <template #[`item.profile`]="{ item }">
                  <div>
                    <div v-if="item.profile === null">
                      <v-icon large color="error">mdi-account-remove</v-icon>
                    </div>
                    <div v-else>
                      <img
                        :src="item.profile"
                        alt="Profile Image"
                        width="80"
                        height="80"
                      />
                    </div>
                  </div>
                </template>
                <template #[`item.status`]="{ item }">
                  <div>
                    <div v-if="item.status === 1">admin</div>
                    <div v-else>user</div>
                  </div>
                </template>
                <template #[`item.name`]="{ item }">
                  <div>
                    <div v-if="item.name">
                      {{ item.name }}
                    </div>
                    <div v-else>no name</div>
                  </div>
                </template>

                <template #[`item.createdAt`]="{ value }">
                  {{ formatDate(value) }}
                </template>

                <template #[`item.actions`]="{ item }">
                  <div class="d-flex">
                    <manage-admin-delete :task="item" />
                    <manage-admin-edit :task="item" />
                    <manage-admin-view :task="item" />
                  </div>
                </template>
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      loading: false,
      viewLoading: false,
      search: '',
      showDialog: '',
      headers: [
        { text: 'ລຳດັບ', value: 'index' },
        { text: 'ຮູບ', value: 'profile' },
        { text: 'ຊື່', value: 'name' },
        { text: 'ເບີ', value: 'phone' },
        { text: 'ສະຖານະ', value: 'status' },
        { text: 'ວັນທີສ້າງ', value: 'createdAt' },
        { text: 'ຈັດການ', value: 'actions' },
      ],
      items: [
        {
          index: 1,
          profile: '/v.png',
          name: 'John Doe',
          phone: '123-456-7890',
          status: 1, // Status values can be 0, 1, 2, or 3
          createdAt: '2023-09-29',
          actions: null, // You can populate this field with action buttons
        },
        {
          index: 2,
          profile: null,
          name: 'Jane Smith',
          phone: '987-654-3210',
          status: 2, // Status values can be 0, 1, 2, or 3
          createdAt: '2023-09-30',
          actions: null, // You can populate this field with action buttons
        },
        // Add more items as needed
      ],
    }
  },
  computed: {},
  mounted() {},
  methods: {
   
  },
}
</script>

<style lang="scss" scoped></style>
