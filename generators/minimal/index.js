"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {

    this.fs.copyTpl(
      this.templatePath('main.tf'),
      this.destinationPath('main.tf')
    );

    this.fs.copyTpl(
      this.templatePath('outputs.tf'),
      this.destinationPath('outputs.tf')
    );

    this.fs.copyTpl(
      this.templatePath('variables.tf'),
      this.destinationPath('variables.tf')
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );

  }

};
