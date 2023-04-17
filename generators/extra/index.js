"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {

    this.fs.copyTpl(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );

    this.fs.copyTpl(
      this.templatePath('.gitattributesfile'),
      this.destinationPath('.gitattributesfile')
    );

    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath('.pre-commit-config.yaml'),
      this.destinationPath('.pre-commit-config.yaml')
    );

    this.fs.copyTpl(
      this.templatePath('data.tf'),
      this.destinationPath('data.tf')
    );

    this.fs.copyTpl(
      this.templatePath('locals.tf'),
      this.destinationPath('locals.tf')
    );

    this.fs.copyTpl(
      this.templatePath('.terraformignore'),
      this.destinationPath('.terraformignore')
    );

    this.fs.copyTpl(
      this.templatePath('.tflint.hcl'),
      this.destinationPath('.tflint.hcl')
    );

    this.fs.copyTpl(
      this.templatePath('.terraform-docs.yaml'),
      this.destinationPath('.terraform-docs.yaml')
    );

    this.fs.copyTpl(
      this.templatePath('.gitkeep'),
      this.destinationPath('modules/.gitkeep')
    );

  }

};
