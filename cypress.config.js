const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 't4jgyg',

  viewportWidth: 1366,
  viewportHeight: 768,
  

  e2e: {
    //baseUrl: 'http://localhost:8080/eva'
    baseUrl: 'https://bancar.com.br/pay'
    ,
    videosFolder: "cypress/videos",
    video: true
  },
});
