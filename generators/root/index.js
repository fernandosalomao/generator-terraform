"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

  }

  initializing() {

    this.composeWith(require.resolve('../minimal'));
    this.composeWith(require.resolve('../extra'));

  }

  writing() {

    this.fs.copyTpl(
      this.templatePath('terraform.tfvars'),
      this.destinationPath('terraform.tfvars')
    );

    this.fs.copyTpl(
      this.templatePath('providers.tf'),
      this.destinationPath('providers.tf')
    );

    this.fs.copyTpl(
      this.templatePath('terraform.tf'),
      this.destinationPath('terraform.tf')
    );

  }

};
