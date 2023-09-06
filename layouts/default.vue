<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list v-for="(item, i) in items" :key="i" dense class="pt-0" tile flat>
        <!-- Menu drop down -->
        <v-list-group v-if="item.children" :prepend-icon="item.icon" no-action>
          <!-- title name of topic -->
          <template #activator>
            <v-list-item-title
              class="py-1 ml-n5"
              :style="{ fontWeight: 'bold', fontSize: '18px' }"
              >{{ item.title }}</v-list-item-title
            >
          </template>
          <!-- child lists menu display icon and title-->
          <v-list-item
            v-for="(child, j) in item.children"
            :key="j"
            :to="child.to"
            router
            exact
            active-class="blue-grey lighten-4"
          >
            <!-- child list icon -->
            <v-list-item-action class="ml-n6">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <!-- child list title -->
            <v-list-item-title class="ml-n6" :style="{ fontSize: '15px' }">{{
              child.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <!-- Menu title One line -->
        <v-list-item
          v-else
          :to="item.to"
          router
          exact
          dense
          active-class="blue-grey lighten-4"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content class="ml-n5">
            <v-list-item-title
              class="py-1"
              :style="{ fontWeight: 'bold', fontSize: '18px' }"
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      :style="{
        backgroundColor: '#FFDEE9',
        backgroundImage: 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
      }"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'ໜ້າຫຼັກ',
          to: '/',
        },
        //  ຈັດການຂໍ້ມູນພີ້ນຖາມ
        {
          icon: 'mdi-group',
          title: 'ຈັດການຂໍ້ມູນພື້ນຖານ',
          to: '/manage',
          children: [
            {
              icon: 'mdi-account-group',
              title: 'ຈັດການຂໍ້ມູນຜູ້ໃຊ້',
              to: '/user',
            },
            {
              icon: 'mdi-account-multiple-plus',
              title: 'ຈັດການຂໍ້ມູນຜູ້ໃຊ້ລະບົບ',
              to: '/admin-user',
            },
            {
              icon: 'mdi-post',
              title: 'ຈັດການຂໍ້ມູນໂພສ',
              to: '/post-user',
            },
            {
              icon: 'mdi-message-question',
              title: 'ຈັດການສິດສາມາດຕອບຄຳຖາມ',
              to: '/post-user',
            },
            {
              icon: 'mdi-deathly-hallows',
              title: 'ຈັດການໂຄສະນາ',
              to: '/post-user',
            },
            {
              icon: 'mdi-shape-plus-outline',
              title: 'ຈັດການຂໍ້ມູນປະເພດ',
              to: '/post-user',
            },
            {
              icon: 'mdi-image-multiple',
              title: 'ຈັດການຮູບbanner',
              to: '/post-user',
            },
          ],
        },
        // confirm questions
        {
          icon: 'mdi-message-question',
          title: 'ຢືນຢັນຄຳຖາມ',
          to: '/confirmQuestion',
        },
        {
          icon: 'mdi-forum',
          title: 'ຢືນຢັນຄຳຕອບ',
          to: '/confirmAnswer',
        },
        //  ລາຍງານ
        {
          icon: 'mdi-chart-areaspline',
          title: 'ລາຍງານ',
          to: '/report',
          children: [
            {
              icon: 'mdi-post',
              title: 'ລາຍງານຄຳຖາມ',
              to: '/report',
            },
          ],
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'seer',
    }
  },
}
</script>
