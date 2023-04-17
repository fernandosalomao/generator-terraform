# The variables.tf file in Terraform is used to define input variables for your Terraform configuration. Input variables allow you to parameterize your infrastructure resources, making your configuration more flexible and reusable.

variable "pet_name_prefix" {
  type = string
  description = "A string to prefix the name with."
  default = "pet"
}

variable "pet_name_length" {
  type = number
  description = "The length (in words) of the pet name. Defaults to 2"
  default     = 2
}