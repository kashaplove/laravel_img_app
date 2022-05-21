import Vue from "vue";
import Index from "./components";

require('./bootstrap');

new Vue({
    el: '#app',
    components: {
        Index
    }
})
