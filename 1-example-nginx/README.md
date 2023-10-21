# Workshop: Kubernetes and Makefile 

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Workshop Content](#workshop-content)
4. [Prerequisites](#prerequisites)
5. [Usage](#usage)
7. [License](#license)

## Introduction
In this workshop, you'll learn how to deploy and manage applications in a Kubernetes cluster and automate various tasks using Makefiles. Kubernetes is a powerful container orchestration system, and Makefiles can simplify and streamline your development and deployment workflows.

## Getting Started
To get started with the workshop, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `kube` directory to access the Kubernetes manifests and Makefile.
3. Follow the content in this repository to learn about Kubernetes and Makefile usage.

## Workshop Content
The workshop content is organized in the `./kube` directory and includes the following Kubernetes YAML files:

1. `1-namespace.yaml`: Kubernetes namespace definition.
2. `2-pod.yaml`: Kubernetes Pod definition.
3. `3-deployment.yaml`: Kubernetes Deployment definition.
4. `4-service.yaml`: Kubernetes Service definition.
5. `5-ingress.yaml`: Kubernetes Ingress definition.

You can use these resources to practice various Kubernetes concepts.

## Prerequisites
Before diving into the workshop, ensure you have the following prerequisites:

- A basic understanding of Kubernetes concepts.
- A running Kubernetes cluster (local or remote).
- kubectl command-line tool installed.
- Make utility installed on your system.

## Usage
You can use the provided Kubernetes YAML files and Makefile in the `./kube` directory to practice and experiment with Kubernetes and Makefile concepts. Make sure to have your Kubernetes cluster set up and configured properly.

To deploy a resource, you can use the `kubectl apply` command like this:

```shell
kubectl apply -f ./kube/
```

Similarly, you can use the Makefile to automate various tasks. For example:

shell
Copy code
# Deploy the entire Kubernetes setup defined in the YAML files
make deploy

# Delete all deployed resources
make clean
Feel free to explore and modify the Makefile to suit your requirements.

# License

This workshop content is provided under the MIT License. Feel free to use, modify, and distribute it as needed.

Enjoy the workshop!


You can add more specific instructions or details about the workshop's agenda and content as needed. Make sure to adjust it according to the actual content and goals of the workshop.