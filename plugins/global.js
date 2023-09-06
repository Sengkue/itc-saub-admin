import Vue from "vue";
import dayjs from 'dayjs'
// import moment from 'moment';
import 'dayjs/locale/lo'; // import the Thai locale
import moment from 'moment-timezone'; // Import moment-timezone
// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true;
  Vue.mixin({
    data() {
      return {};
    },
    computed: {},
    methods: {
      formatPrice(value){
      const val = (value / 1).toFixed(0).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },

      currency(data) {
        return this.$test(data, { precision: 0, symbol: "₭" }).format();
      },
      formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      },

      formatDatetotext(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
      },

      formatDateLo(date) {
        return dayjs(date).locale('lo').format('D MMMM YYYY, HH:mm:ss');
      },
      // formatDateBill(date) {
      //   return moment(date).format('DD/MM/YYYY, HH:mm:ss');
      // },
      formatDateBill(date) {
        // Convert the date to the Indochina Time zone (ICT)
        const dateICT = moment.tz(date, "Asia/Bangkok");

        // Format the Date object using moment.js with the desired format
        return dateICT.format('DD/MM/YYYY, HH:mm:ss');
      },

    },
  }); // Set up your mixin then
}
