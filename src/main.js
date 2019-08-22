import AWS from "aws-sdk";
import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'

AWS.config.update({
  region: "us-east-1",
  maxRetries: 0,
  credentials: new AWS.Credentials({
    accessKeyId: "AKIAIEL4UFO4V6MRIG3Q",
    secretAccessKey: "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"
  }),
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
