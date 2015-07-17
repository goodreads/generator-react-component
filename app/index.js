var generators = require('yeoman-generator');

module.exports = generators.NamedBase.extend({
  step1: function() {
    console.log('step 1 ran!');
  }
});