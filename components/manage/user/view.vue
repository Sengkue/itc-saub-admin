<template>
    <div>
      <v-tooltip top color="primary">
        <template #activator="{ on }">
          <v-btn
            class="ma-n1"
            icon
            text
            color="primary"
            @click="edit(item.id)"
            v-on="on"
          >
            <v-icon>mdi-eye</v-icon>
          </v-btn>
        </template>
        view
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
  