terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "${var.provider_region}"
  access_key = "${var.secret_access_key}"
  secret_key = "${var.secret_key}"
}