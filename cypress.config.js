const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 't4jgyg',

  viewportWidth: 1366,
  viewportHeight: 768,
  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    //baseUrl: ''
    videosFolder: "cypress/videos",
    video: true
  },
});
