import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
import '@sweetalert2/theme-bootstrap-4/bootstrap-4.css'

export default ({ app }, inject) => {
  inject('swal', Swal)
}
