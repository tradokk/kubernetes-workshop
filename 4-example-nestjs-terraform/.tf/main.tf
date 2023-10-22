provider "helm" {
  kubernetes {
    config_path = "~/.kube/config"
  }
}

provider "kubernetes" {
  config_path = "~/.kube/config"
}

# Pulls the image
resource "docker_image" "nest_image" {
  name  = var.docker_image_name
  count = var.build_docker_image == true ? 1 : 0

  build {
    context = ".."
    tag     = ["latest"]
    label = {
      author : "alex.larentis"
    }
  }
}


resource "helm_release" "nestjs_backend" {
  name  = "nestjs-terraform"
  chart = "../.helm"
  depends_on = [ docker_image.nest_image ]

  set {
    name  = "image.name"
    value = var.docker_image_name
  }

  set {
    name  = "image.tag"
    value = var.docker_image_tag
  }
}
