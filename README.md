# Yeoman Terraform Module Generator

Scaffolding generator for Terraform

## Overview

This Yeoman plugin intends to create terraform module folder structure based on [terraform official documentation](https://developer.hashicorp.com/terraform/language/modules/develop/structure) and industry best practices.

Files are added with examples and comments describing the usage.

## Features

- Generates minimal folder structure. (e.g child modules)
- Generates root folder structure (e.g project structure)
- Generates complete module structure for publish. (e.g including LICENSE)

## Prerequisites

- [Node LTS](https://nodejs.org/)
- [Yeoman](https://yeoman.io/learning/index.html)

## Installation

```sh
npm install -g generator-terraform
```

## Usage

#### Minimal Structure

```sh
yo terraform:minimal
```

```
.
├── README.md
├── main.tf
├── outputs.tf
└── variables.tf
```

#### Root Structure

```sh
yo terraform:root
```

```
.
├── modules
│   └── .gitkeep
├── .editorconfig
├── .gitattributesfile
├── .gitignore
├── .pre-commit-config.yaml
├── .terraform-docs.yaml
├── .terraformignore
├── .tflint.hcl
├── README.md
├── data.tf
├── locals.tf
├── main.tf
├── outputs.tf
├── providers.tf
├── terraform.tf
├── terraform.tfvars
└── variables.tf
```

#### Complete Structure

```sh
yo terraform
```

```
.
├── examples
│   └── simple
│       └── main.tf
├── modules
│   └── .gitkeep
├── .editorconfig
├── .gitattributesfile
├── .gitignore
├── .pre-commit-config.yaml
├── .terraform-docs.yaml
├── .terraformignore
├── .tflint.hcl
├── LICENSE
├── README.md
├── data.tf
├── locals.tf
├── main.tf
├── outputs.tf
├── variables.tf
└── versions.tf
```

## License

MIT