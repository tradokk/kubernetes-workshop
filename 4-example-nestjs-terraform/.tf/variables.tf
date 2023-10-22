variable "build_docker_image" {
  description = "-(Required) Chart location or chart name <stable/example>"
  default     = true
}

variable "docker_image_name" {
  description = "-(Required) Chart location or chart name <stable/example>"
  default     = "4-example-nestjs-terraform"
}

variable "docker_image_tag" {
  description = "-(Optional) The tag for the docker images"
  default     = "latest"
}

variable "timeout" {
  default = "10"
}

