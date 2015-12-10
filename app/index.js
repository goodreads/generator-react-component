var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.NamedBase.extend({
  writing: {
    writeJsx: function() {
      var filenameBase = _.snakeCase(this.name);
      var varName = this.name[0].toLowerCase() + this.name.substring(1);
      this.log("Generating " + this.name + " component");
      this.fs.copyTpl(
        this.templatePath('component.js.jsx'),
        this.destinationPath('app/gulp/javascripts/react_components/' + filenameBase + ".js.jsx"),
        {
          name: this.name,
          varName: varName,
          filename: filenameBase
        }
      );
      this.fs.copyTpl(
        this.templatePath('unit_spec.js.es6'),
        this.destinationPath('test/javascripts/unit/react_components/' + filenameBase + "_spec.js.es6"),
        {
          name: this.name,
          componentFilenameBase: filenameBase
         }
      );
      this.fs.copyTpl(
        this.templatePath('interaction_spec.js.es6'),
        this.destinationPath('test/javascripts/interaction/react_components/' + filenameBase + "_spec.js.es6"),
        {
          name: this.name,
          componentFilenameBase: filenameBase,
          varName: varName
         }
      );
    }
  }
});
