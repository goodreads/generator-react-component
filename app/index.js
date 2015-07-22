var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.NamedBase.extend({
  writing: {
    writeJsx: function() {
      var filenameBase = _.snakeCase(this.name);
      this.log("Generating " + this.name + " component");
      this.fs.copyTpl(
        this.templatePath('component.js.jsx'),
        this.destinationPath('app/assets/javascripts/react_components/' + filenameBase + ".js.jsx"),
        { name: this.name }
      );
      this.fs.copyTpl(
        this.templatePath('unit_spec.js.es6'),
        this.destinationPath('test/javascripts/unit/react_components/' + filenameBase + ".js.es6"),
        {
          name: this.name,
          componentFilenameBase: filenameBase
         }
      );
    }
  }
});