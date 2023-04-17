# The terraform.tf file in Terraform is used to configure the behavior and settings of the Terraform CLI itself. This file can be used to set a variety of options, including the backend configuration and provider version constraints.

terraform {

  required_providers {
    random = {
      source = "hashicorp/random"
      version = "3.5.1"
    }
  }

  required_version = "1.4.5"
}