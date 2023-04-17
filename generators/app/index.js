"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

  }

  initializing() {

    this.composeWith(require.resolve('../minimal'));
    this.composeWith(require.resolve('../extra'));
    this.composeWith(require.resolve('generator-license'), {
        defaultLicense: 'MIT'
      });
  }

  writing() {

    this.fs.copyTpl(
      this.templatePath('versions.tf'),
      this.destinationPath('versions.tf')
    );

    this.fs.copyTpl(
      this.templatePath('versions.tf'),
      this.destinationPath('versions.tf')
    );

    this.fs.copyTpl(
      this.templatePath('examples/simple/main.tf'),
      this.destinationPath('examples/simple/main.tf')
    );

  }

};
