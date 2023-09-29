<template>
  <div>
    <v-tooltip top color="green">
      <template #activator="{ on }">
        <v-btn
          class="ma-n1"
          icon
          text
          color="green"
          @click="edit(item.id)"
          v-on="on"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      Edit
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: 'AdminSaubEdit',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
