import AWS from "aws-sdk";
import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'

AWS.config.update({
  region: "us-east-1",
  maxRetries: 0,
  credentials: new AWS.Credentials({
    accessKeyId: "AKIAZWN4Q6NZW4CFWLCY",
    secretAccessKey: "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"
  }),
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
