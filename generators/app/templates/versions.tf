# The versions.tf file in Terraform is used to specify the required version of the Terraform CLI and any required providers for your Terraform configuration.

terraform {

  required_providers {
    random = {
      source = "hashicorp/random"
      version = "3.5.1"
    }
  }

  required_version = "1.4.5"
}