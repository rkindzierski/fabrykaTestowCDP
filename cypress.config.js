const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  viewportHeight: 1200,
  viewportWidth: 1200,

  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://simpletestsite.fabrykatestow.pl/',
    
  },
});
