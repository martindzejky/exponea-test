exports.config = {

  seleniumAddress: "http://localhost:4444/wd/hub",
  capabilities: {
    browserName: "firefox"
  },
  baseUrl: "http://localhost:3000",
  specs: [
    "test/protractor/**/*.js"
  ]

};
