import './css/main.css';
import Vue from 'vue';
import App from './Game.vue';

window.onerror = (message,url,line) => {
    alert(message)
}

new Vue({
    el: "#root",
    render: h => h(App)
})