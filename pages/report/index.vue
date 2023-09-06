<template>
  <v-card>
    <v-tabs v-model="tab" background-color="teal" dark>
      <v-tab v-for="item in items" :key="item.tab">
        <h3>
          {{ item.tab }}
        </h3>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item key="post-questio">
        <v-card flat>
          <v-card-text>
            <Report-post-question />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item key="like-question">
        <v-card flat>
          <v-card-text>
            <Report-like-question />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item key="view-question">
        <v-card flat>
          <v-card-text>
            <Report-view-question />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item key="share-question">
        <v-card flat>
          <v-card-text>
            <Report-share-question />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        { tab: 'post-question', content: 'post-question' },
        { tab: 'like-question', content: 'post-like' },
        { tab: 'view-question', content: 'post-view' },
        { tab: 'share-question', content: 'post-share' },
      ],
    }
  },
}
</script>
