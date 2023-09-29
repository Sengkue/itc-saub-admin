<template>
  <div>
    <v-tooltip top color="red">
      <template #activator="{ on }">
        <v-btn
          class="ma-n1"
          icon
          text
          color="red"
          @click="deleteItem(task.id)"
          v-on="on"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
      Delete
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: 'AdminSaubDelete',
  // props: ["task"],
  props: {
    task: {
      type: Object, // Change Object to the actual type of your "task" prop
      required: true, // Depending on your requirements, you can make it required or not
    },
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {
    async deleteItem(item) {
      await this.$swal
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
            await this.$store.dispatch('user/selectUser')
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

<style lang="scss" scoped></style>
