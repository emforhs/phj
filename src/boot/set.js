import Vue from 'vue';
import common from 'assets/commons/commons';
import { Quasar,QDialog,ClosePopup} from 'quasar';

Vue.use(common);
Vue.use(Quasar, { components: { QDialog }, directives: { ClosePopup } })