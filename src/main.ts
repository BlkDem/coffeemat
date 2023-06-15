/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

import { library } from "@fortawesome/fontawesome-svg-core";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {faMugHot} from "@fortawesome/free-solid-svg-icons";
import {faCreditCard} from "@fortawesome/free-regular-svg-icons";
import {faHourglassHalf} from "@fortawesome/free-regular-svg-icons";
// import {facu} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCoffee,
  faPhone,
  faCircleArrowLeft,
  faMinus,
  faMinusCircle,
  faPlusCircle,
  faMugHot,
  faCreditCard,
  faHourglassHalf
);

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
