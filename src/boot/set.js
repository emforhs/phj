import Vue from 'vue'
import common from 'assets/js/commons'
import { Quasar,QDialog,ClosePopup} from 'quasar'

Vue.use(common);
Vue.use(Quasar, { components: { QDialog }, directives: { ClosePopup } })