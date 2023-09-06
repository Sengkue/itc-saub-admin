<template>
  <div>
    <v-row>
      <v-col cols="12">
        <dashboard-report-card />
      </v-col>
      <v-col cols="4">
        <dashboard-pie-chart />
      </v-col>
      <v-col cols="4">
        <dashboard-line-chart />
      </v-col>
      <v-col cols="4">
        <dashboard-doughnut-chart />
      </v-col>
      <v-col cols="6">
        <dashboard-bar-chart />
      </v-col
      ><v-col cols="6">
        <dashboard-report-iep />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'WorkspaceJsonIndex',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
