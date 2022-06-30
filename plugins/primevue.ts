

import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import ToastService from 'primevue/toastservice';
import SideBar from 'primevue/sidebar';
import SpeedDial from 'primevue/speeddial';
import BadgeDirective from 'primevue/badgedirective';
import Dialog from 'primevue/dialog';
import RadioButton from 'primevue/radiobutton';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('Toast', Toast);
    nuxtApp.vueApp.component('SideBar', SideBar);
    nuxtApp.vueApp.component('SpeedDial', SpeedDial);
    nuxtApp.vueApp.component('Dialog', Dialog);
    nuxtApp.vueApp.component('RadioButton', RadioButton);
    nuxtApp.vueApp.component('Textarea', Textarea);
    nuxtApp.vueApp.component('Checkbox', Checkbox);
    nuxtApp.vueApp.directive('badge', BadgeDirective);
   //other components that you need
});